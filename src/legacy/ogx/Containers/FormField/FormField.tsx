"use client";
import { useState, useRef, useEffect } from "react";
import type { ChangeEvent, CSSProperties, ReactNode } from "react";
import type { FieldDef, FieldOption } from "../../data/formFields";

const ICONS: Record<string, ReactNode> = {
  user: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  mail: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  ),
  phone: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  calendar: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  ),
  chevron: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  upload: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 8 5-5 5 5" />
      <path d="M5 21h14" />
    </svg>
  ),
};

interface SelectFieldProps {
  name: string;
  value: any;
  options: FieldOption[];
  placeholder?: string;
  onChange: (value: any) => void;
}

// Custom dropdown that matches the design (styled trigger + popover of rounded
// option cards). Used for the `select` field type.
function SelectField({ name, value, options, placeholder, onChange }: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return undefined;
    const handlePointer = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div
      className="relative w-full rounded-[var(--radius-sm)] bg-[var(--color-bg)] font-body text-sm text-[var(--color-text)]"
      ref={ref}
    >
      <button
        type="button"
        id={name}
        className="w-full box-border flex items-center justify-between gap-2.5 font-body text-sm pt-[11px] pr-3 pb-[11px] pl-[14px] border border-[var(--color-border)] rounded-lg bg-[var(--color-bg)] text-[var(--color-text)] cursor-pointer text-left"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className={selected ? "text-[var(--color-text)]" : "text-[var(--color-text-muted)]"}>
          {selected ? selected.label : placeholder || "Select an option"}
        </span>
        <span
          className={`flex items-center justify-center w-6 h-6 rounded-full border text-[var(--color-text-muted)] shrink-0 transition-transform duration-150 ease-[ease]${
            open ? " rotate-180" : ""
          }`}
        >
          {ICONS.chevron}
        </span>
      </button>
      {open && (
        <ul
          className="list-none mt-2 p-2 absolute z-20 top-full left-0 right-0 max-h-[280px] overflow-y-auto bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[14px] shadow-[var(--shadow-card)] flex flex-col gap-2"
          role="listbox"
        >
          {options.map((opt) => {
            const isSel = opt.value === value;
            return (
              <li key={opt.value} className="list-none" role="option" aria-selected={isSel}>
                <button
                  type="button"
                  className={`w-full text-left font-body text-sm py-[14px] px-4 rounded-[10px] cursor-pointer shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-[border-color,background,color] duration-150 ease-[ease] ${
                    isSel
                      ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white"
                      : "bg-[var(--color-bg)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:bg-[var(--color-primary-light)]"
                  }`}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

interface FormFieldProps {
  field: FieldDef;
  value: any;
  otherValue?: string;
  onChange: (name: string, value: any) => void;
}

function FormField({ field, value, otherValue, onChange }: FormFieldProps) {
  const {
    name,
    label,
    type,
    options,
    placeholder,
    required,
    helperText,
    showCharCount,
    footerLeftText,
    icon,
    trailingIcon,
    columns,
    variant,
    hint,
    maxSelect,
    allowOther,
  } = field;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const newValue = type === "checkbox" ? target.checked : target.value;
    onChange(name, newValue);
  };

  const handleMultiselectToggle = (optionValue: string) => {
    const current: any[] = Array.isArray(value) ? value : [];
    if (current.includes(optionValue)) {
      onChange(name, current.filter((v) => v !== optionValue));
      return;
    }
    // Respect the max-selection cap (e.g. "Select up to 3 countries").
    if (maxSelect && current.length >= maxSelect) return;
    onChange(name, [...current, optionValue]);
  };

  const otherInput = (
    <input
      type="text"
      className="mt-2.5 w-full box-border font-body text-sm py-3 px-[14px] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_var(--color-primary-light)]"
      placeholder="Please specify"
      value={otherValue || ""}
      onChange={(e) => onChange(`${name}Other`, e.target.value)}
    />
  );

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <SelectField
            name={name}
            value={value}
            options={options ?? []}
            placeholder={placeholder}
            onChange={(v) => onChange(name, v)}
          />
        );

      case "multiselect": {
        const selectedArr: any[] = Array.isArray(value) ? value : [];
        const atLimit = !!maxSelect && selectedArr.length >= maxSelect;
        const isTrack = name === "opportunityType";
        const gridColsClass = isTrack
          ? "grid-cols-2 max-[640px]:grid-cols-1"
          : columns
            ? "grid-cols-[repeat(var(--ms-cols),1fr)] max-[640px]:grid-cols-2"
            : "grid-cols-[repeat(auto-fill,minmax(130px,1fr))] max-[640px]:grid-cols-2";
        const common =
          "flex items-center min-w-0 overflow-hidden font-body text-sm border text-left transition-all duration-150 ease-[ease]";
        return (
          <>
            <div
              className={`grid my-[15px] ${isTrack ? "gap-2 p-[15px]" : "gap-[15px]"} ${gridColsClass}`}
              style={!isTrack && columns ? ({ "--ms-cols": columns } as CSSProperties) : undefined}
            >
              {(options ?? []).map((opt) => {
                const selected = selectedArr.includes(opt.value);
                const disabled = !selected && atLimit;
                const optionClass = isTrack
                  ? `${common} min-h-[44px] py-2.5 px-3 rounded-lg gap-2 border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] hover:border-[var(--color-primary)] max-[640px]:p-[15px] before:content-[''] before:w-4 before:h-4 before:rounded-full before:shrink-0 before:[flex:0_0_16px] before:border ${
                      selected
                        ? "before:border-[var(--color-primary)] before:[background:radial-gradient(circle,var(--color-primary)_0_4px,var(--color-bg)_4.5px)]"
                        : "before:border-[var(--color-border)] before:bg-[var(--color-bg)]"
                    } ${disabled ? "opacity-[0.45] cursor-not-allowed" : "cursor-pointer"}`
                  : `${common} py-[13px] px-[14px] rounded-[var(--radius-sm)] ${
                      opt.isOther ? "gap-1 max-[640px]:col-span-2" : "gap-2.5"
                    } ${
                      selected
                        ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white cursor-pointer"
                        : disabled
                          ? "bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] opacity-[0.45] cursor-not-allowed hover:border-[var(--color-border)]"
                          : "bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] cursor-pointer hover:border-[var(--color-primary)]"
                    }`;
                return (
                  <button
                    type="button"
                    key={opt.value}
                    className={optionClass}
                    aria-pressed={selected}
                    disabled={disabled}
                    onClick={(e) => {
                      const optionButton = e.currentTarget;
                      handleMultiselectToggle(opt.value);
                      if (opt.isOther && !selected) {
                        setTimeout(() => optionButton.querySelector("input")?.focus(), 0);
                      }
                    }}
                  >
                    {opt.icon && <span className="text-base leading-none inline-flex">{opt.icon}</span>}
                    {opt.countryCode && (
                      <span className={`fi fis fi-${opt.countryCode} w-5 h-3.5 rounded-[2px] shrink-0`} />
                    )}
                    <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                      {opt.isOther ? `${opt.label}:` : opt.label}
                    </span>
                    {opt.isOther && (
                      <input
                        type="text"
                        className="min-w-0 flex-1 w-full py-0.5 px-0 border-0 border-b border-current rounded-none bg-transparent text-inherit outline-none placeholder:text-transparent focus:shadow-none"
                        style={{ font: "inherit" }}
                        placeholder=""
                        value={otherValue || ""}
                        autoFocus={selected}
                        disabled={disabled}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!selected) handleMultiselectToggle(opt.value);
                        }}
                        onChange={(e) => onChange(`${name}Other`, e.target.value)}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        );
      }

      case "radio":
        if (variant !== "list") {
          return (
            <>
              <div
                className="grid grid-cols-3 gap-3 my-[15px] max-[560px]:grid-cols-1"
                style={columns ? ({ "--radio-cols": columns } as CSSProperties) : undefined}
              >
                {(options ?? []).map((opt) => {
                  const selected = value === opt.value;
                  return (
                    <label
                      key={opt.value}
                      className={`flex items-center gap-2.5 border rounded-lg p-[14px] text-sm text-[var(--color-text)] cursor-pointer ${
                        selected
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]"
                          : "border-[var(--color-border)] bg-[var(--color-bg)]"
                      }`}
                    >
                      <input
                        type="radio"
                        name={name}
                        value={opt.value}
                        checked={selected}
                        onChange={handleChange}
                        required={required}
                        className="accent-[var(--color-primary)] w-4 h-4"
                      />
                      <span>{opt.isOther ? `${opt.label}:` : opt.label}</span>
                    </label>
                  );
                })}
              </div>
              {allowOther && value === "other" && otherInput}
            </>
          );
        }
        return (
          <>
            <div className="flex flex-col gap-2.5">
              {(options ?? []).map((opt) => (
                <label key={opt.value} className="flex items-start gap-2.5 cursor-pointer py-1.5">
                  <input
                    type="radio"
                    name={name}
                    value={opt.value}
                    checked={value === opt.value}
                    onChange={handleChange}
                    required={required}
                    className="mt-[3px] w-[18px] h-[18px] accent-[var(--color-primary)] shrink-0"
                  />
                  <span className="flex flex-col">
                    <span className="text-sm font-semibold text-[var(--color-text)]">{opt.label}</span>
                    {opt.sublabel && (
                      <span className="text-[12.5px] text-[var(--color-text-muted)] mt-px">{opt.sublabel}</span>
                    )}
                  </span>
                </label>
              ))}
            </div>
            {allowOther && value === "other" && otherInput}
          </>
        );

      case "checkbox":
        return (
          <label className="flex items-start gap-2.5 text-[13px] text-[var(--color-text-muted)] leading-[1.5] cursor-pointer">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={!!value}
              onChange={handleChange}
              className="accent-[var(--color-primary)] w-4 h-4 mt-0.5 shrink-0"
            />
            {placeholder}
          </label>
        );

      case "textarea":
        return (
          <>
            <textarea
              className="font-body text-sm py-[13px] px-[14px] border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[var(--color-text)] bg-[var(--color-bg)] transition-[border-color,box-shadow] duration-150 ease-[ease] resize-y min-h-[90px] focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_var(--color-primary-light)]"
              id={name}
              name={name}
              value={value || ""}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
            />
            {(showCharCount || footerLeftText) && (
              <div className="flex justify-between text-xs text-[var(--color-text-muted)] mt-1">
                <span>{footerLeftText || ""}</span>
                {showCharCount && <span>{(value || "").length} chars</span>}
              </div>
            )}
          </>
        );

      case "file":
        return (
          <label className="block border border-dashed border-[var(--color-border)] rounded-lg py-8 px-5 text-center bg-[var(--color-bg)] cursor-pointer hover:border-[var(--color-primary)]">
            <div className="w-10 h-10 rounded-[15px] bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3">
              {ICONS.upload}
            </div>
            <p className="text-sm font-semibold text-[var(--color-text)] m-0 mb-1">{label}</p>
            <p className="text-xs text-[var(--color-text-muted)] m-0 mb-2.5">
              {hint || "PDF, DOC or DOCX · Max 10 MB"}
            </p>
            <span className="text-[13px] text-[var(--color-primary)] font-semibold cursor-pointer">
              Click to browse, or drag and drop
            </span>
            <input
              type="file"
              id={name}
              name={name}
              accept={field.accept}
              onChange={(e) => onChange(name, e.target.files?.[0])}
              style={{ display: "none" }}
            />
            {value && <p className="mt-2.5 text-[13px] text-[var(--color-text-muted)]">{value.name}</p>}
          </label>
        );

      default:
        return (
          <div className="relative flex items-center">
            {icon && (
              <span className="absolute left-[14px] text-[rgba(102,112,133,0.5)] flex pointer-events-none">
                {ICONS[icon]}
              </span>
            )}
            <input
              className={`w-full box-border py-3 font-body text-sm border border-[var(--color-border)] rounded-lg text-[var(--color-text)] bg-[var(--color-bg)] focus:outline-none focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_var(--color-primary-light)] ${
                icon ? "pl-[42px]" : "pl-[14px]"
              } ${trailingIcon ? "pr-[42px]" : "pr-[14px]"}`}
              type={type}
              id={name}
              name={name}
              value={value || ""}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
            />
            {trailingIcon && (
              <span className="absolute right-[14px] text-[var(--color-text-muted)] flex pointer-events-none">
                {ICONS[trailingIcon]}
              </span>
            )}
          </div>
        );
    }
  };

  return (
    <div className="my-[15px] flex flex-col gap-1.5 font-body">
      {type !== "checkbox" && type !== "file" && (
        <label htmlFor={name} className="text-sm font-semibold text-[var(--color-text)]">
          {label} {required && <span className="text-[var(--color-error)] ml-0.5">*</span>}
        </label>
      )}
      {type === "file" && (
        <label className="text-sm font-semibold text-[var(--color-text)]">
          {label} {required && <span className="text-[var(--color-error)] ml-0.5">*</span>}
        </label>
      )}
      {helperText && <p className="text-[13px] text-[var(--color-text-muted)] -mt-0.5 mb-1">{helperText}</p>}
      {renderInput()}
    </div>
  );
}

export default FormField;
