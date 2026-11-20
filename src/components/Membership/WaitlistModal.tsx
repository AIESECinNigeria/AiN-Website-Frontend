// components/Membership/WaitlistModal.tsx
"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { schools } from "@/data/schools";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  /** Typed as DD/MM/YYYY. */
  dob: string;
  academicType: string;
  institution: string;
  level: string;
  course: string;
  event: string;
  interests: string[];
  skills: string;
  motivation: string;
  source: string;
}

const EMPTY_FORM: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  academicType: "",
  institution: "",
  level: "",
  course: "",
  event: "",
  interests: [],
  skills: "",
  motivation: "",
  source: "",
};

const MAX_INTERESTS = 2;

const ACADEMIC_TYPES = ["Undergraduate", "Graduate", "Post-Graduate"];

/* Schools shown in the institution dropdown, picked from data/schools.js by
 * their `value`. Grouped by local committee. To add or remove a school, add or
 * delete its value here; a value that does not exist in schools.js is ignored. */
const LOCAL_COMMITTEE_SCHOOLS = [
  // Akure
  "federal university of technology, akure",
  // Abeokuta
  "federal university of agriculture, abeokuta",
  // Abuja
  "university of abuja, gwagwalada",
  "baze university",
  "african university of science & technology, abuja",
  "nigerian-turkish nile university, abuja",
  // Benin
  "university of benin",
  "benson idahosa university, benin city",
  "igbinedion university, okada",
  "ambrose alli university, ekpoma",
  // Ife
  "obafemi awolowo university, ile-ife",
  // Ilorin
  "university of ilorin",
  "al-hikmah university, ilorin",
  "kwara state university, ilorin",
  // Kano
  "bayero university, kano",
  "kano university of science & technology, wudil",
  "northwest university, kano",
  // Jos
  "university of jos",
  // Lagos
  "university of lagos",
  "lagos state university, ojo",
  "lagos state university of science and technology, ikorodu",
  "yaba college of technology, yaba",
  "covenant university, ota",
  "babcock university,ilishan-remo",
  "bells university of technology, ota",
  "pan-atlantic university, lagos",
  "caleb university, lagos",
  "national open university of nigeria, lagos",
  // Enugu
  "university of nigeria, nsukka",
  "enugu state university of science and technology, enugu",
  "caritas university, enugu",
  "godfrey okoye university, ugwuomu-nike",
  // Calabar
  "university of calabar",
  "cross river state university of science &technology, calabar",
  // // Benue
  // "benue state university, makurdi",
  // "university of agriculture, makurdi",
  // Ibadan
  "university of ibadan",
  "lead city university, ibadan",
  "ajayi crowther university, ibadan",
  // Port Harcourt
  "university of port-harcourt",
  "river state university of science and technology",
  "ignatius ajuru university of education, rumuolumeni",
  // Zaria
  "ahmadu bello university, zaria",
  "nuhu bamalli polytechnic, zaria",
  // Ekiti
  "ekiti state university",
  "federal university, oye-ekiti",
  "afe babalola university, ado-ekiti",
];

const OTHER_SCHOOL = "Other (my school is not listed)";

const committeeSchoolSet = new Set(LOCAL_COMMITTEE_SCHOOLS);

const INSTITUTIONS: string[] = [
  ...schools
    .filter((school: { value: string; label: string }) => committeeSchoolSet.has(school.value))
    .map((school: { value: string; label: string }) => school.label)
    .sort((a: string, b: string) => a.localeCompare(b)),
  OTHER_SCHOOL,
];

const LEVELS = ["100 level", "200 level", "300 level", "400 level", "500 level", "600 level"];

const INTERESTS = [
  "Human Resources",
  "Marketing",
  "Business Development and Sales",
  "Finance and Legalities",
  "Incoming Exchanges",
  "Outgoing Exchanges",
];

const SOURCES = ["Social Media", "Friend or Referral", "Campus Event", "AIESEC Website", "Other"];

const WAITLIST_ENDPOINT =
  "https://ain-backend.fastapicloud.dev/api/member-recruitment-waitlist/register";

/** Turns the form into the JSON body the backend expects. */
function toPayload(form: FormState) {
  // The form holds the date as DD/MM/YYYY, the backend wants YYYY-MM-DD.
  const [day, month, year] = form.dob.split("/");

  return {
    first_name: form.firstName.trim(),
    last_name: form.lastName.trim(),
    email: form.email.trim(),
    phone: form.phone.replace(/[\s-]/g, ""),
    date_of_birth: `${year}-${month}-${day}`,
    academic_type: form.academicType,
    academic_institution: form.institution,
    level_of_study: form.level.replace(/ level$/i, " Level"),
    course_of_study: form.course.trim(),
    events_participated: form.event.trim(),
    areas_of_interest: form.interests,
    skills: form.skills.trim(),
    motivation: form.motivation.trim(),
    how_hear_about_recruitment: form.source,
  };
}

/** Sends the sign-up to the backend. Throws an Error with a message that is
 *  safe to show the person if anything goes wrong. */
async function submitWaitlist(form: FormState): Promise<void> {
  let response: Response;
  try {
    response = await fetch(WAITLIST_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(toPayload(form)),
    });
  } catch {
    throw new Error("We could not reach the server. Check your connection and try again.");
  }

  if (response.ok) return;

  let message = "Something went wrong. Please try again.";
  try {
    const data = await response.json();
    if (typeof data?.detail === "string") message = data.detail;
  } catch {
    // The response was not JSON, so keep the default message.
  }
  throw new Error(message);
}

/** Keeps only digits and inserts the slashes while typing: 12052001 becomes 12/05/2001. */
function formatDob(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 8);
  let out = digits.slice(0, 2);
  if (digits.length > 2) out += "/" + digits.slice(2, 4);
  if (digits.length > 4) out += "/" + digits.slice(4, 8);
  return out;
}

/** A complete, real calendar date (no 31/02) between 1900 and today. */
function isValidDob(value: string): boolean {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!match) return false;

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  if (year < 1900) return false;

  const date = new Date(year, month - 1, day);
  const isRealDate =
    date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;

  return isRealDate && date <= new Date();
}

function isValid(form: FormState): boolean {
  return (
    form.firstName.trim() !== "" &&
    form.lastName.trim() !== "" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
    /^[+\d][\d\s-]{6,}$/.test(form.phone.trim()) &&
    isValidDob(form.dob) &&
    form.academicType !== "" &&
    form.institution !== "" &&
    form.level !== "" &&
    form.course.trim() !== "" &&
    form.interests.length >= 1 &&
    form.skills.trim() !== "" &&
    form.motivation.trim() !== "" &&
    form.source !== ""
  );
}

const fieldClass =
  "h-12 w-full rounded-xl bg-[#F7F7F7] px-4 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-aiesec-blue/40";

const hiddenScrollbar =
  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`size-4 shrink-0 text-gray-600 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TextInput({
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
  inputRef,
  inputMode,
  maxLength,
  ariaLabel,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  maxLength?: number;
  ariaLabel?: string;
}) {
  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      inputMode={inputMode}
      maxLength={maxLength}
      autoComplete={autoComplete}
      aria-label={ariaLabel ?? placeholder}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className={fieldClass}
    />
  );
}

function Dropdown({
  placeholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className="flex h-12 w-full cursor-pointer items-center justify-between rounded-xl bg-[#F7F7F7] px-4 text-left text-sm outline-none focus-visible:ring-2 focus-visible:ring-aiesec-blue/40"
      >
        <span className={value ? "font-medium text-gray-900" : "text-gray-500"}>
          {value || placeholder}
        </span>
        <Chevron open={open} />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={placeholder}
          className="mt-2 flex flex-col rounded-xl border border-gray-200 bg-white p-1 shadow-sm"
        >
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`w-full cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100 ${
                  option === value ? "bg-gray-100" : ""
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/** Same look as Dropdown, with a search box above a scrollable list. Every
 *  word typed must appear somewhere in the option, in any order. */
function SearchableDropdown({
  placeholder,
  searchPlaceholder,
  options,
  value,
  onChange,
}: {
  placeholder: string;
  searchPlaceholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const listId = useId();

  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  const filtered = terms.length
    ? options.filter((option) => {
        const text = option.toLowerCase();
        return terms.every((term) => text.includes(term));
      })
    : options;

  const toggle = () => {
    setQuery("");
    setOpen((current) => !current);
  };

  return (
    <div>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={toggle}
        className="flex h-12 w-full cursor-pointer items-center justify-between gap-3 rounded-xl bg-[#F7F7F7] px-4 text-left text-sm outline-none focus-visible:ring-2 focus-visible:ring-aiesec-blue/40"
      >
        <span className={`truncate ${value ? "font-medium text-gray-900" : "text-gray-500"}`}>
          {value || placeholder}
        </span>
        <Chevron open={open} />
      </button>

      {open && (
        <div className="mt-2 rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="mb-1 h-10 w-full rounded-lg bg-[#F7F7F7] px-3 text-sm text-gray-900 outline-none placeholder:text-gray-500 focus:ring-2 focus:ring-aiesec-blue/40"
          />
          <ul
            id={listId}
            role="listbox"
            aria-label={placeholder}
            className={`flex max-h-56 flex-col overflow-y-auto ${hiddenScrollbar}`}
          >
            {filtered.length === 0 ? (
              <li className="px-3 py-3 text-sm text-gray-500">
                No match. Try another spelling, or choose &quot;Other&quot;.
              </li>
            ) : (
              filtered.map((option) => (
                <li key={option} role="option" aria-selected={option === value}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setOpen(false);
                    }}
                    className={`w-full cursor-pointer rounded-lg px-3 py-3 text-left text-sm font-semibold text-gray-900 hover:bg-gray-100 ${
                      option === value ? "bg-gray-100" : ""
                    }`}
                  >
                    {option}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

function MultiDropdown({
  placeholder,
  options,
  values,
  max,
  onChange,
}: {
  placeholder: string;
  options: string[];
  values: string[];
  max: number;
  onChange: (values: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const atLimit = values.length >= max;

  const toggleOption = (option: string) => {
    if (values.includes(option)) {
      onChange(values.filter((item) => item !== option));
    } else if (!atLimit) {
      onChange([...values, option]);
    }
  };

  return (
    <div>
      <div className="flex min-h-12 items-center gap-2 rounded-xl bg-[#F7F7F7] px-4 py-2">
        <div className="flex flex-1 flex-wrap items-center gap-2">
          {values.length === 0 ? (
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="h-8 flex-1 cursor-pointer text-left text-sm text-gray-500"
            >
              {placeholder}
            </button>
          ) : (
            values.map((value) => (
              <span
                key={value}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-900"
              >
                {value}
                <button
                  type="button"
                  aria-label={`Remove ${value}`}
                  onClick={() => onChange(values.filter((item) => item !== value))}
                  className="cursor-pointer text-gray-500 hover:text-gray-900"
                >
                  &times;
                </button>
              </span>
            ))
          )}
        </div>
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-label="Toggle areas of interest"
          onClick={() => setOpen((current) => !current)}
          className="cursor-pointer p-1"
        >
          <Chevron open={open} />
        </button>
      </div>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-multiselectable="true"
          aria-label={placeholder}
          className="mt-2 flex flex-col rounded-xl border border-gray-200 bg-white p-1 shadow-sm"
        >
          {options.map((option) => {
            const selected = values.includes(option);
            const disabled = atLimit && !selected;
            return (
              <li key={option} role="option" aria-selected={selected}>
                <button
                  type="button"
                  disabled={disabled}
                  onClick={() => toggleOption(option)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm font-semibold hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400 disabled:hover:bg-transparent ${
                    selected ? "bg-gray-100 text-aiesec-blue" : "cursor-pointer text-gray-900"
                  }`}
                >
                  {option}
                  {selected && <span aria-hidden="true">&#10003;</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-2 pr-10 text-lg font-semibold text-aiesec-blue first:mt-0">{children}</h3>;
}

/** Waitlist sign-up form in a modal. Mount it only while it should be open so
 *  the form resets each time. Submitting posts the form to the backend and
 *  shows the confirmation once the server accepts it. */
export default function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((current) => ({ ...current, [key]: value }));

  // Lock page scroll while the modal is open and restore it afterwards.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    firstFieldRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const valid = isValid(form);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      await submitWaitlist(form);
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Join the waitlist"
        className={`relative max-h-[90dvh] w-full max-w-[640px] overflow-y-auto bg-white p-5 shadow-xl lg:p-8 ${hiddenScrollbar}`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex size-8 cursor-pointer items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {done ? (
          <div className="flex flex-col items-center gap-3 px-2 py-10 text-center">
            <h2 className="text-2xl font-extrabold text-aiesec-heading">
              You&apos;re on the waitlist
            </h2>
            <p className="max-w-[380px] text-body text-aiesec-gray">
              Thanks, {form.firstName.trim()}. We will contact you as soon as recruitment opens.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 h-12 cursor-pointer rounded-pill bg-aiesec-blue px-8 text-base font-medium text-white hover:bg-aiesec-blue/90"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
            <SectionTitle>Personal Information</SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2">
              <TextInput
                inputRef={firstFieldRef}
                value={form.firstName}
                onChange={(value) => update("firstName", value)}
                placeholder="First Name"
                autoComplete="given-name"
              />
              <TextInput
                value={form.lastName}
                onChange={(value) => update("lastName", value)}
                placeholder="Last Name (Surname)"
                autoComplete="family-name"
              />
            </div>
            <TextInput
              type="email"
              value={form.email}
              onChange={(value) => update("email", value)}
              placeholder="Email Address"
              autoComplete="email"
            />
            <TextInput
              type="tel"
              value={form.phone}
              onChange={(value) => update("phone", value)}
              placeholder="Phone Number"
              autoComplete="tel"
            />
            <TextInput
              value={form.dob}
              onChange={(value) => update("dob", formatDob(value))}
              placeholder="Date of Birth"
              ariaLabel="Date of Birth (day, month, year)"
              inputMode="numeric"
              maxLength={10}
              autoComplete="bday"
            />

            <SectionTitle>Academic Information</SectionTitle>
            <Dropdown
              placeholder="Academic Type"
              options={ACADEMIC_TYPES}
              value={form.academicType}
              onChange={(value) => update("academicType", value)}
            />
            <SearchableDropdown
              placeholder="Name of Academic Institution"
              searchPlaceholder="Search your institution"
              options={INSTITUTIONS}
              value={form.institution}
              onChange={(value) => update("institution", value)}
            />
            <Dropdown
              placeholder="Level of Study"
              options={LEVELS}
              value={form.level}
              onChange={(value) => update("level", value)}
            />
            <TextInput
              value={form.course}
              onChange={(value) => update("course", value)}
              placeholder="Course of Study"
            />

            <SectionTitle>Personal Interests</SectionTitle>
            <TextInput
              value={form.event}
              onChange={(value) => update("event", value)}
              placeholder="Enter any AIESEC/non-AIESEC event you've participated in"
            />
            <MultiDropdown
              placeholder="Select at most two areas of interest"
              options={INTERESTS}
              values={form.interests}
              max={MAX_INTERESTS}
              onChange={(values) => update("interests", values)}
            />
            <TextInput
              value={form.skills}
              onChange={(value) => update("skills", value)}
              placeholder="List any skills that you will like us to know about"
            />
            <TextInput
              value={form.motivation}
              onChange={(value) => update("motivation", value)}
              placeholder="What is your motivation for joining AIESEC?"
            />
            <Dropdown
              placeholder="How did you hear about AIESEC's recruitment?"
              options={SOURCES}
              value={form.source}
              onChange={(value) => update("source", value)}
            />

            {error && (
              <p role="alert" className="text-sm font-medium text-red-600">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!valid || submitting}
              className={`mt-2 h-12 w-full rounded-pill text-base font-medium transition-colors ${
                valid && !submitting
                  ? "cursor-pointer bg-aiesec-blue text-white hover:bg-aiesec-blue/90"
                  : "cursor-not-allowed bg-gray-300 text-gray-600"
              }`}
            >
              {submitting ? "Joining..." : "Join Waitlist"}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  );
}