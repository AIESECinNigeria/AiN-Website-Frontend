"use client";

import { useEffect, useMemo, useState } from "react";

interface Location {
  city: string;
  state: string;
}

type BoundaryData = { name: string; rings: [number, number][][] }[];
type ProjectedState = {
  name: string;
  polygons: string[];
  center: [number, number];
  bounds: [number, number, number, number];
};

// The local committees listed in the design and the Nigerian states they serve.
const locations: Location[] = [
  { city: "Akure", state: "Ondo" },
  { city: "Abeokuta", state: "Ogun" },
  { city: "Lagos", state: "Lagos" },
  { city: "Zaria", state: "Kaduna" },
  { city: "Abuja", state: "Federal Capital Territory" },
  { city: "Ilorin", state: "Kwara" },
  { city: "Ekiti", state: "Ekiti" },
  { city: "Port Harcourt", state: "Rivers" },
  { city: "Benin", state: "Edo" },
  { city: "Enugu", state: "Enugu" },
  { city: "Calabar", state: "Cross River" },
  { city: "Ibadan", state: "Oyo" },
  { city: "Ife", state: "Osun" },
  { city: "Jos", state: "Plateau" },
  { city: "Kano", state: "Kano" },
  { city: "Benue", state: "Benue" },
];

const BOUNDARY_SOURCES = [
  "https://datacatalogfiles.worldbank.org/ddh-published/0039368/1/DR0048905/ngaadmbndaadm1osgof.geojson",
  "https://services1.arcgis.com/HmwnYiJTBZ4UkySc/ArcGIS/rest/services/GIS_Final_Project_RS_WFL1/FeatureServer/6/query?where=1%3D1&outFields=admin1Name&outSR=4326&f=geojson",
  "https://gist.githubusercontent.com/segebee/ff4a2f75be560462c369/raw/814c222b3e6bbf2067636dd0ad3151dcc1eb1403/nigeria_state_polygons.json",
];
const WIDTH = 900;
const HEIGHT = 720;
const PADDING = 12;

function cleanStateName(name: string) {
  const normalized = name.trim().toUpperCase().replace(/[_-]+/g, " ");
  if (
    normalized === "FCT" ||
    normalized === "ABUJA" ||
    normalized === "FCT ABUJA"
  ) {
    return "FEDERAL CAPITAL TERRITORY";
  }
  return normalized.replace(/\s+/g, " ");
}

function normalizeBoundaries(payload: unknown): BoundaryData {
  if (!payload || typeof payload !== "object") return [];
  const object = payload as Record<string, unknown>;

  if (Array.isArray(object.features)) {
    return object.features.flatMap((item): BoundaryData => {
      if (!item || typeof item !== "object") return [];
      const feature = item as Record<string, unknown>;
      const properties = (feature.properties ?? {}) as Record<string, unknown>;
      const geometry = (feature.geometry ?? {}) as Record<string, unknown>;
      const stateName =
        properties.admin1Name ?? properties.admin1Name_en ?? properties.ADMIN1_EN ?? properties.STATENAME ??
        properties.state ?? properties.STATE ?? properties.name ?? properties.NAME_1 ?? properties.NAME;
      if (typeof stateName !== "string" || !Array.isArray(geometry.coordinates)) return [];

      const coordinates = geometry.coordinates;
      const outerRings: unknown[] = geometry.type === "Polygon"
        ? [coordinates[0]]
        : geometry.type === "MultiPolygon"
          ? coordinates.map((polygon) => Array.isArray(polygon) ? polygon[0] : null)
          : [];
      const rings = outerRings.flatMap((ring): [number, number][][] => {
        if (!Array.isArray(ring)) return [];
        const points = ring.filter(
          (point): point is [number, number] => Array.isArray(point) &&
            typeof point[0] === "number" && typeof point[1] === "number",
        );
        // GeoJSON is [longitude, latitude]; the map projector accepts [latitude, longitude].
        return points.length >= 3
          ? [points.map(([lon, lat]) => [lat, lon] as [number, number])]
          : [];
      });
      return rings.length ? [{ name: cleanStateName(stateName), rings }] : [];
    });
  }

  // Legacy boundary fallback stores an object of state names and [lat, lon] points.
  return Object.entries(object).flatMap(([name, value]): BoundaryData => {
    if (!Array.isArray(value)) return [];
    const ring = value.filter(
      (point): point is [number, number] => Array.isArray(point) &&
        typeof point[0] === "number" && typeof point[1] === "number",
    );
    return ring.length >= 3 ? [{ name: cleanStateName(name), rings: [ring] }] : [];
  });
}

function projectBoundaries(data: BoundaryData): ProjectedState[] {
  const all = data.flatMap((state) => state.rings.flat());
  if (!all.length) return [];

  // This boundary source stores each point as [latitude, longitude].
  const latitudes = all.map(([lat]) => lat);
  const longitudes = all.map(([, lon]) => lon);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLon = Math.min(...longitudes);
  const maxLon = Math.max(...longitudes);
  const scale = Math.min(
    (WIDTH - PADDING * 2) / (maxLon - minLon),
    (HEIGHT - PADDING * 2) / (maxLat - minLat),
  );
  const drawnWidth = (maxLon - minLon) * scale;
  const drawnHeight = (maxLat - minLat) * scale;
  const offsetX = (WIDTH - drawnWidth) / 2;
  const offsetY = (HEIGHT - drawnHeight) / 2;

  return data.map(({ name, rings }) => {
    const projectedRings = rings.map((ring) => ring.map(([lat, lon]) => [
      offsetX + (lon - minLon) * scale,
      offsetY + (maxLat - lat) * scale,
    ] as const));
    const points = projectedRings.flat();
    const xs = points.map(([x]) => x);
    const ys = points.map(([, y]) => y);
    const center: [number, number] = [
      (Math.min(...xs) + Math.max(...xs)) / 2,
      (Math.min(...ys) + Math.max(...ys)) / 2,
    ];
    return {
      name,
      polygons: projectedRings.map((ring) =>
        ring.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" "),
      ),
      center,
      bounds: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)],
    };
  });
}

async function loadBoundaries(signal: AbortSignal): Promise<BoundaryData> {
  for (const url of BOUNDARY_SOURCES) {
    const requestController = new AbortController();
    const abortRequest = () => requestController.abort();
    const timeout = setTimeout(abortRequest, 5000);
    signal.addEventListener("abort", abortRequest, { once: true });
    try {
      const response = await fetch(url, { signal: requestController.signal });
      if (!response.ok) continue;
      const data = normalizeBoundaries(await response.json());
      if (data.length >= 30) return data;
    } catch (error) {
      if (signal.aborted) throw error;
    } finally {
      clearTimeout(timeout);
      signal.removeEventListener("abort", abortRequest);
    }
  }
  throw new Error("State boundaries could not be loaded");
}

export default function LocationsMap() {
  const [boundaryData, setBoundaryData] = useState<BoundaryData | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    loadBoundaries(controller.signal)
      .then(setBoundaryData)
      .catch((error: unknown) => {
        if (controller.signal.aborted || (error instanceof Error && error.name === "AbortError")) return;
        setLoadError(true);
      });
    return () => controller.abort();
  }, []);

  const states = useMemo(
    () => (boundaryData ? projectBoundaries(boundaryData) : []),
    [boundaryData],
  );
  const committeesByState = useMemo(() => {
    const grouped = new Map<string, string[]>();
    locations.forEach(({ city, state }) => {
      const key = cleanStateName(state);
      grouped.set(key, [...(grouped.get(key) ?? []), city]);
    });
    return grouped;
  }, []);

  const activeState = hoveredState ?? (selectedState ? cleanStateName(selectedState) : null);
  const activeCommittees = activeState ? committeesByState.get(activeState) ?? [] : [];
  const activeStateFeature = activeState ? states.find((state) => state.name === activeState) : undefined;
  const orderedStates = [...states].sort((a, b) => {
    const priority = (state: ProjectedState) =>
      state.name === hoveredState ? 2 : selectedState && state.name === cleanStateName(selectedState) ? 1 : 0;
    return priority(a) - priority(b);
  });
  const cardOnLeft = (activeStateFeature?.center[0] ?? 0) > WIDTH * 0.58;

  return (
    <section className="px-6 pb-16 pt-16 lg:px-20 lg:pb-24 lg:pt-24">
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold leading-[120%] tracking-[-1%] text-gray-900 lg:text-[2.5rem]">
        AIESEC is present in all these locations within the country
      </h2>

      <div className="relative mx-auto mt-8 w-full max-w-[820px] md:mt-12">
        <div className="relative aspect-[5/4] w-full">
          {boundaryData ? (
            <svg
              viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
              className="h-full w-full overflow-visible"
              role="img"
              aria-label="Interactive map of Nigerian states with local committees"
            >
              {orderedStates.map((state) => {
                const stateCommittees = committeesByState.get(state.name) ?? [];
                const hasCommittee = stateCommittees.length > 0;
                const isSelected = selectedState !== null && cleanStateName(selectedState) === state.name;
                const isHovered = hoveredState === state.name && !isSelected;
                return (
                  <g
                    key={state.name}
                    tabIndex={hasCommittee ? 0 : -1}
                    role={hasCommittee ? "button" : undefined}
                    aria-label={hasCommittee ? `${state.name}, ${stateCommittees.join(", ")}` : state.name}
                    aria-pressed={hasCommittee ? isSelected : undefined}
                    onPointerEnter={(event) => {
                      if (hasCommittee && event.pointerType !== "touch") {
                        setHoveredState(state.name);
                      }
                    }}
                    onPointerLeave={() => setHoveredState(null)}
                    onClick={() => hasCommittee && setSelectedState(state.name)}
                    onKeyDown={(event) => {
                      if (hasCommittee && (event.key === "Enter" || event.key === " ")) {
                        event.preventDefault();
                        setSelectedState(state.name);
                      }
                    }}
                    className="outline-none transition-colors duration-150 focus:outline-none focus-visible:outline-none"
                    style={{ cursor: hasCommittee ? "pointer" : "default", outline: "none" }}
                  >
                    {state.polygons.map((points, index) => (
                      <polygon
                        key={`${state.name}-${index}`}
                        points={points}
                        fill={isSelected ? "#037ef3" : "#ffffff"}
                        stroke={isHovered ? "#7bbcff" : "#c4c9ce"}
                        strokeWidth={isHovered ? 2 : 1.5}
                        vectorEffect="non-scaling-stroke"
                      />
                    ))}
                  </g>
                );
              })}
            </svg>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              {loadError ? "The map is temporarily unavailable." : "Loading state map…"}
            </div>
          )}
        </div>

        {activeStateFeature && activeCommittees.length > 0 && (
          <aside
            aria-live="polite"
            style={{
              left: `${((cardOnLeft ? activeStateFeature.bounds[0] : activeStateFeature.bounds[2]) / WIDTH) * 100}%`,
              top: `${(activeStateFeature.center[1] / HEIGHT) * 100}%`,
              transform: cardOnLeft
                ? "translate(calc(-100% - 12px), -50%)"
                : "translate(12px, -50%)",
            }}
            className="pointer-events-none absolute z-20 w-max max-w-[80vw] rounded-md bg-aiesec-blue px-3 py-2 text-white shadow-md"
          >
            <p className="text-sm font-semibold">{activeState}</p>
          </aside>
        )}
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-y-3">
        {locations.map(({ city, state }) => {
          const selected = selectedState !== null && cleanStateName(selectedState) === cleanStateName(state);
          return (
            <button
              key={city}
              type="button"
              aria-pressed={selected}
              onClick={() => setSelectedState(state)}
              onPointerEnter={(event) => {
                if (event.pointerType !== "touch") {
                  setHoveredState(cleanStateName(state));
                }
              }}
              onPointerLeave={() => setHoveredState(null)}
              className={`rounded-lg px-3 py-3 text-left font-medium transition-colors ${
                selected
                  ? "bg-aiesec-blue text-white"
                  : "text-aiesec-blue hover:bg-aiesec-blue/5"
              }`}
            >
              AIESEC in {city}
            </button>
          );
        })}
      </div>
    </section>
  );
}
