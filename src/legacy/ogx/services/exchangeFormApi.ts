import { labelFor } from "../Utilities/optionLabels";
import {
  step1Fields, undergradFields, workFieldOptions,
  aiesecerField, mediumField,
  graduateNationOptions, graduateTravelTimeField,
} from "../data/formFields";

const UPLOAD_CV_ENDPOINT = "https://ain-backend.fly.dev/api/ogx/upload-cv";
const REGISTER_ENDPOINT = "https://ain-backend.fly.dev/api/ogx/register";

const TRACK_LABELS: Record<string, string> = { volunteer: "GV", intern: "GTA", teach: "GTE" };
const TRACK_NATION_KEYS: Record<string, string> = { volunteer: "gv_preferred_countries", intern: "gta_preferred_countries", teach: "gte_preferred_countries" };

async function uploadCV(file: File) {
  const payload = new FormData();
  payload.append("file", file);

  const response = await fetch(UPLOAD_CV_ENDPOINT, { method: "POST", body: payload });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.detail || `CV upload failed (${response.status})`);
  }
  const data = await response.json();
  return data.url || data.cv_url || data.link || data.data?.url;
}

function buildRegisterPayload(formData: Record<string, any>, cvUrl: any) {
  const isUndergrad = formData.educationLevel === "undergraduate";
  const educationField = step1Fields.find((f) => f.name === "educationLevel")!;

  const nationOptions = isUndergrad
    ? undergradFields.find((f) => f.name === "nations")!.options
    : graduateNationOptions;

  const travelTimeOptions = isUndergrad
    ? undergradFields.find((f) => f.name === "travelTime")!.options
    : graduateTravelTimeField.options;

  const selectedOpportunityTypes = Array.isArray(formData.opportunityType)
    ? formData.opportunityType
    : [];
  const selectedTracks = isUndergrad
    ? ["GV"]
    : selectedOpportunityTypes.map((track) => TRACK_LABELS[track]).filter(Boolean);

  // "Other" selections carry their typed-in text through a companion `${name}Other` key.
  const workFieldValues = Array.isArray(formData.workField) ? formData.workField : [];
  const workField = workFieldValues
    .map((v) => (v === "other" ? (formData.workFieldOther || "Other") : labelFor(workFieldOptions, v)))
    .join(", ");
  const payload: Record<string, any> = {
    full_name: formData.fullName,
    email: formData.email,
    phone: formData.phoneNumber,
    age: String(formData.age || ""),
    location: formData.location,
    education: labelFor(educationField.options, formData.educationLevel),
    is_aiesecer: labelFor(aiesecerField.options, formData.aiesecer),
    how_hear_about_ogx: labelFor(mediumField.options, formData.medium),
    selected_tracks: selectedTracks,
    work_field: workField,
    duration: labelFor(travelTimeOptions, formData.travelTime),
    funding: formData.funding || "",
    cv_url: cvUrl,
    motivation: formData.motivation,
    additional_comments: formData.additionalComments || "None",
  };

  if (isUndergrad) {
    payload.gv_preferred_countries = Array.isArray(formData.nations)
      ? formData.nations.map((v: any) => labelFor(nationOptions, v))
      : [];
  } else {
    selectedOpportunityTypes.forEach((track) => {
      const nationFieldName = { volunteer: "gvNations", intern: "gtaNations", teach: "gteNations" }[track as string];
      const values = Array.isArray(formData[nationFieldName as string]) ? formData[nationFieldName as string] : [];
      payload[TRACK_NATION_KEYS[track]] = values.map((v: any) => labelFor(nationOptions, v));
    });
  }

  return payload;
}

export async function submitExchangeForm(formData: Record<string, any>) {
  const cvUrl = formData.cv ? await uploadCV(formData.cv) : "";
  const payload = buildRegisterPayload(formData, cvUrl);

  const response = await fetch(REGISTER_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.detail || `Registration failed (${response.status})`);
  }
  return response.json();
}
