import type { FieldOption } from "../data/formFields";

export const labelFor = (
  options: FieldOption[] | undefined,
  value: string,
): string =>
  (options ?? []).find((o) => o.value === value)?.label || value || "";

export const labelsForMulti = (
  options: FieldOption[] | undefined,
  values: unknown,
): string =>
  Array.isArray(values) && values.length
    ? values.map((v) => labelFor(options, v)).join(", ")
    : "";
