import type { FieldDef } from "../data/formFields";

export function getFieldError(field: FieldDef, value: any): string | null {
  if (!field.required) return null;
  // Some fields (e.g. the consent checkbox) carry their text in `placeholder`
  // rather than `label`, so fall back to an explicit `errorText` or a generic phrase.
  const requiredMsg = field.errorText || `${field.label || "This field"} is required`;
  switch (field.type) {
    case "multiselect":
      return Array.isArray(value) && value.length > 0 ? null : requiredMsg;
    case "file":
      return value instanceof File ? null : "Please upload your CV — if you navigated away, you may need to re-select it.";
    case "checkbox":
      return value ? null : requiredMsg;
    default:
      return value !== undefined && value !== null && String(value).trim() !== "" ? null : requiredMsg;
  }
}

export function validateFields(fields: FieldDef[], data: Record<string, any>): string[] {
  return fields.reduce<string[]>((errors, field) => {
    const value = data[field.name];
    const err = getFieldError(field, value);
    if (err) {
      errors.push(err);
      return errors;
    }

    // Enforce the max-selection cap on multiselects (e.g. "Select up to 3 countries").
    if (field.type === "multiselect" && field.maxSelect && Array.isArray(value) && value.length > field.maxSelect) {
      errors.push(`Please select no more than ${field.maxSelect} for "${field.label}".`);
    }

    // When an "Other" option is chosen, the companion fill-in must not be empty.
    if (field.allowOther) {
      const otherChosen = field.type === "multiselect"
        ? Array.isArray(value) && value.includes("other")
        : value === "other";
      if (otherChosen) {
        const otherText = data[`${field.name}Other`];
        if (!otherText || String(otherText).trim() === "") {
          errors.push(`Please specify your "Other" answer for "${field.label}".`);
        }
      }
    }

    return errors;
  }, []);
}
