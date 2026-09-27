"use client";

import { useEffect, useMemo, useState } from "react";
import CloudImage from "@/components/CloudImage";

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
type TooltipPlacement = "left" | "right" | "above" | "below";

// The local committees listed in the design and the Nigerian states they serve.
const locations: Location[] = [
  { city: "Akure", state: "Ondo" },
  { city: "Abeokuta", state: "Ogun" },
  { city: "Abuja", state: "Federal Capital Territory" },
  { city: "Benin", state: "Edo" },
  { city: "Ife", state: "Osun" },
  { city: "Ilorin", state: "Kwara" },
  { city: "Kano", state: "Kano" },
  { city: "Jos", state: "Plateau" },
  { city: "Lagos", state: "Lagos" },
  { city: "Enugu", state: "Enugu" },
  { city: "Calabar", state: "Cross River" },
  { city: "Benue", state: "Benue" },
  { city: "Ibadan", state: "Oyo" },
  { city: "Port Harcourt", state: "Rivers" },
  { city: "Zaria", state: "Kaduna" },
  { city: "Ekiti", state: "Ekiti" },
];

const locationDescriptions: Record<string, string> = {
  Akure:
    "FUTA produces strong technical graduates, but a certificate alone will not set you apart. AIESEC in Akure helps students and young professionals build leadership experience and global exposure.",
  Abeokuta:
    "Studying in Abeokuta or serving as a corps member should not mean your world stops there. AIESEC in Abeokuta connects ambitious students and graduates with opportunities beyond Nigeria.",
  Lagos:
    "Lagos moves fast, and a certificate alone may not be enough. AIESEC in Lagos gives young people practical leadership experience and access to global opportunities.",
  Zaria:
    "AIESEC in Zaria gives young people the chance to practise leadership, contribute to their community, and explore international opportunities.",
  Abuja:
    "Standing out as a young person in a city full of big organizations can be difficult. AIESEC in Abuja gives you a seat at the table and direct access to global opportunities.",
  Ilorin:
    "AIESEC in Ilorin works with students and career-driven young people, opening trusted doors to global internships, volunteering, and hands-on leadership experience.",
  Ekiti:
    "AIESEC in Ekiti helps young people turn their ambition into practical leadership experience and meaningful opportunities in Nigeria and beyond.",
  "Port Harcourt":
    "Students in the Garden City deserve the tools to practise before graduation. AIESEC in Port Harcourt connects curious young people with future-focused projects and global exchange programs.",
  Benin:
    "AIESEC in Benin bridges the gap between classroom learning and leadership, helping ambitious young people build experience through hands-on roles.",
  Enugu:
    "AIESEC in Enugu helps young people build practical leadership skills, work on community projects, and discover global opportunities.",
  Calabar:
    "AIESEC in Calabar helps young people build in-demand leadership skills locally while connecting them to international opportunities.",
  Ibadan:
    "AIESEC in Ibadan works with students and career-driven young people, opening trusted doors to global internships and volunteering opportunities.",
  Ife:
    "AIESEC in Ife gives students the space to practise leadership, contribute to their community, and take their first steps toward global opportunities.",
  Jos:
    "AIESEC in Jos takes young people beyond the classroom with hands-on community projects and life-changing international volunteer experiences.",
  Kano:
    "AIESEC in Kano helps young people practise leadership, make a difference in their community, and explore international opportunities.",
  Benue:
    "In Makurdi, AIESEC in Benue gives students a place to practise leadership, solve local problems, and access international volunteer and teaching opportunities.",
};

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

function getTooltipPlacement(
  state: ProjectedState,
  label: string,
  avoidInfoCard: boolean,
): TooltipPlacement {
  const preferred: TooltipPlacement = state.center[0] > WIDTH * 0.58 ? "left" : "right";
  if (!avoidInfoCard) return preferred;

  const labelWidth = Math.min(330, label.length * 8 + 32);
  const labelHeight = 42;
  const gap = 12;
  const infoCard = {
    left: WIDTH * 0.51,
    right: WIDTH * 0.86,
    top: HEIGHT * (0.82 - 0.23),
    bottom: HEIGHT * (0.82 + 0.23),
  };
  const candidates: TooltipPlacement[] = [
    preferred,
    preferred === "left" ? "right" : "left",
    "above",
    "below",
  ];
  const getBounds = (placement: TooltipPlacement) => {
    switch (placement) {
      case "left":
        return {
          left: state.bounds[0] - gap - labelWidth,
          right: state.bounds[0] - gap,
          top: state.center[1] - labelHeight / 2,
          bottom: state.center[1] + labelHeight / 2,
        };
      case "right":
        return {
          left: state.bounds[2] + gap,
          right: state.bounds[2] + gap + labelWidth,
          top: state.center[1] - labelHeight / 2,
          bottom: state.center[1] + labelHeight / 2,
        };
      case "above":
        return {
          left: state.center[0] - labelWidth / 2,
          right: state.center[0] + labelWidth / 2,
          top: state.bounds[1] - gap - labelHeight,
          bottom: state.bounds[1] - gap,
        };
      case "below":
        return {
          left: state.center[0] - labelWidth / 2,
          right: state.center[0] + labelWidth / 2,
          top: state.bounds[3] + gap,
          bottom: state.bounds[3] + gap + labelHeight,
        };
    }
  };
  const overlapsInfoCard = (placement: TooltipPlacement) => {
    const bounds = getBounds(placement);
    return bounds.left < infoCard.right && bounds.right > infoCard.left &&
      bounds.top < infoCard.bottom && bounds.bottom > infoCard.top;
  };
  const staysOnMap = (placement: TooltipPlacement) => {
    const bounds = getBounds(placement);
    return bounds.left >= 0 && bounds.right <= WIDTH && bounds.top >= 0 && bounds.bottom <= HEIGHT;
  };

  return candidates.find((placement) => !overlapsInfoCard(placement) && staysOnMap(placement))
    ?? candidates.find((placement) => !overlapsInfoCard(placement))
    ?? preferred;
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
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const updateDesktop = () => setIsDesktop(desktopQuery.matches);
    updateDesktop();
    desktopQuery.addEventListener("change", updateDesktop);
    return () => desktopQuery.removeEventListener("change", updateDesktop);
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
  const selectedLocation = selectedState
    ? locations.find(({ state }) => cleanStateName(state) === cleanStateName(selectedState))
    : undefined;
  const toggleSelectedState = (state: string) => {
    setSelectedState((current) =>
      current && cleanStateName(current) === cleanStateName(state) ? null : state,
    );
  };
  const activeStateFeature = activeState ? states.find((state) => state.name === activeState) : undefined;
  const tooltipPlacement = activeStateFeature
    ? getTooltipPlacement(activeStateFeature, activeState ?? "", isDesktop && Boolean(selectedLocation))
    : "right";
  const orderedStates = [...states].sort((a, b) => {
    const priority = (state: ProjectedState) =>
      state.name === hoveredState ? 2 : selectedState && state.name === cleanStateName(selectedState) ? 1 : 0;
    return priority(a) - priority(b);
  });
  return (
    <section className="px-6 pb-0 pt-16 lg:px-20 lg:pb-24 lg:pt-24">
      <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-[120%] tracking-[-1%] text-gray-900 lg:text-[2.5rem]">
        AIESEC is present in all these locations within the country
      </h2>

      <div className="flex flex-col">
        <div className="order-2 -mx-6 mt-6 grid w-[calc(100%_+_3rem)] max-w-[1200px] grid-flow-col grid-cols-2 grid-rows-8 gap-0 [&>button:nth-child(-n+8)]:border-r-2 [&>button:nth-child(8)]:border-b-0 [&>button:nth-child(16)]:border-b-0 sm:grid-flow-row sm:grid-cols-4 sm:grid-rows-4 sm:[&>button:nth-child(n+1)]:border-r-2 sm:[&>button:nth-child(4n)]:border-r-0 sm:[&>button:nth-child(8)]:border-b-2 sm:[&>button:nth-child(n+13)]:border-b-0 lg:order-1 lg:mx-auto lg:mt-10 lg:w-full lg:grid-cols-8 lg:grid-rows-2 lg:gap-y-3 lg:[&>button:nth-child(4n):not(:nth-child(8n))]:border-r-[3px] lg:[&>button:nth-child(8n)]:border-r-0 lg:[&>button:nth-child(n+1)]:border-b-0">
          {locations.map(({ city, state }) => {
            const selected = selectedState !== null && cleanStateName(selectedState) === cleanStateName(state);
            return (
              <button
                key={city}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleSelectedState(state)}
                onPointerEnter={(event) => {
                  if (event.pointerType !== "touch") {
                    setHoveredState(cleanStateName(state));
                  }
                }}
                onPointerLeave={() => setHoveredState(null)}
                className="min-h-12 border-b-2 border-r-0 border-[#111827] bg-aiesec-blue px-2 text-center text-base font-semibold text-white transition-colors hover:bg-[#006edb] focus-visible:relative focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111827] sm:text-lg lg:min-h-16 lg:border-r-[3px] lg:border-b-0"
              >
                {city}
              </button>
            );
          })}
        </div>

        <div className="order-1 relative -mx-2 mt-6 w-[calc(100%_+_1rem)] max-w-[820px] lg:order-2 lg:mx-auto lg:mt-12 lg:w-full">
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
                    onClick={() => hasCommittee && toggleSelectedState(state.name)}
                    onKeyDown={(event) => {
                      if (hasCommittee && (event.key === "Enter" || event.key === " ")) {
                        event.preventDefault();
                        toggleSelectedState(state.name);
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
          {activeStateFeature && activeCommittees.length > 0 && (
            <aside
              aria-live="polite"
              style={{
                left: `${((tooltipPlacement === "left"
                  ? activeStateFeature.bounds[0]
                  : tooltipPlacement === "right"
                    ? activeStateFeature.bounds[2]
                    : activeStateFeature.center[0]) / WIDTH) * 100}%`,
                top: `${((tooltipPlacement === "above"
                  ? activeStateFeature.bounds[1] - 12
                  : tooltipPlacement === "below"
                    ? activeStateFeature.bounds[3] + 12
                    : activeStateFeature.center[1]) / HEIGHT) * 100}%`,
                transform: tooltipPlacement === "left"
                  ? "translate(calc(-100% - 12px), -50%)"
                  : tooltipPlacement === "right"
                    ? "translate(12px, -50%)"
                    : tooltipPlacement === "above"
                      ? "translate(-50%, -100%)"
                      : "translate(-50%, 12px)",
              }}
              className="pointer-events-none absolute z-30 w-max max-w-[80vw] rounded-md bg-aiesec-blue px-3 py-2 text-white shadow-md"
            >
              <p className="text-sm font-semibold">{activeState}</p>
            </aside>
          )}
        </div>

        {selectedLocation && (
          <article
            aria-live="polite"
            aria-label={`AIESEC in ${selectedLocation.city}`}
            className="pointer-events-none relative z-20 mx-auto mt-4 h-max w-[92%] max-w-[360px] bg-white p-2 shadow-[0_3px_16px_rgba(0,0,0,0.16)] lg:absolute lg:left-[51%] lg:top-[82%] lg:mx-0 lg:mt-0 lg:w-[35%] lg:max-w-[340px] lg:-translate-y-1/2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <CloudImage
                id="ain/footer/gallery-1"
                alt="AIESEC members together at a local committee event"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="mt-1.5 pt-2 pb-1 text-base font-extrabold leading-tight text-aiesec-blue sm:text-xl">
              AIESEC in {selectedLocation.city}
            </h3>
            <p className="mt-1 text-[11px] leading-[1.5] text-[#929292] sm:text-xs">
              {locationDescriptions[selectedLocation.city]}
            </p>
          </article>
        )}
        </div>
      </div>

    </section>
  );
}
