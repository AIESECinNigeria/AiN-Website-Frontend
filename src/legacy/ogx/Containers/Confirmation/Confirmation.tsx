"use client";
import type { ReactNode } from "react";
import {
  step1Fields, undergradFields,
  graduateNationOptions, graduateTravelTimeField,
  type FieldDef, type FieldOption, type FormData,
} from "../../data/formFields";
import { labelFor } from "../../Utilities/optionLabels";

const PROGRAMME_NAMES: Record<string, string> = {
  volunteer: 'Global Volunteer',
  intern: 'Global Talent',
  teach: 'Global Teacher',
};
const TRACK_NATION_FIELDS: Record<string, string> = {
  volunteer: 'gvNations',
  intern: 'gtaNations',
  teach: 'gteNations',
};
const findField = (fields: FieldDef[], name: string) => fields.find((f) => f.name === name);

const renderCountriesWithFlags = (options: FieldOption[] | undefined, values: any) => {
  if (!Array.isArray(values) || values.length === 0) return '—';
  return (
    <div className="flex flex-col flex-wrap gap-x-2.5 gap-y-1.5 justify-start w-full">
      {values.map((v: any) => {
        const opt = options?.find((o) => o.value === v);
        if (!opt) return null;
        return (
          <span key={v} className="inline-flex items-center gap-1.5">
            {opt.countryCode && (
              <span className={`fi fis fi-${opt.countryCode} w-[18px] h-[18px] rounded-full bg-cover bg-center shrink-0`} />
            )}
            {opt.label}
          </span>
        );
      })}
    </div>
  );
};

interface ConfirmationProps {
  data: FormData;
  onEdit: (step: number) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSubmitting: boolean;
  submitError: string | null;
}

function Confirmation({ data, onEdit, onSubmit, onBack, isSubmitting, submitError }: ConfirmationProps) {
  const isUndergrad = data.educationLevel === 'undergraduate';
  const educationField = findField(step1Fields, 'educationLevel')!;
  const selectedTracks: any[] = isUndergrad ? ['volunteer'] : (Array.isArray(data.opportunityType) ? data.opportunityType : []);
  const programmeNames = selectedTracks.map((track) => PROGRAMME_NAMES[track]).filter(Boolean);

  let nationsDisplay: ReactNode = "—";
  let travelTimeOptions: FieldOption[] | undefined;
  const nationOptions = isUndergrad ? findField(undergradFields, "nations")!.options : graduateNationOptions; // graduateNationOptions needs exporting from formFields.js if not already
  const workFieldOptions = findField(undergradFields, "workField")!.options;
  if (isUndergrad) {
    travelTimeOptions = findField(undergradFields, "travelTime")!.options;
  } else {
    travelTimeOptions = graduateTravelTimeField.options;
  }
  const countrySelections = isUndergrad
    ? [{ track: 'volunteer', values: data.nations }]
    : selectedTracks.map((track) => ({ track, values: data[TRACK_NATION_FIELDS[track]] }));
  nationsDisplay = (
    <div>
      {countrySelections.map(({ track, values }) => (
        <div key={track} className="py-2.5 border-b border-[var(--color-border)]">
          {!isUndergrad && <span className="block text-[13px] text-[var(--color-text-muted)] mb-2">{PROGRAMME_NAMES[track]}</span>}
          {renderCountriesWithFlags(nationOptions, values)}
        </div>
      ))}
    </div>
  );

  // Resolve "Other" fill-ins to the text the applicant typed.
  const workFieldDisplay = Array.isArray(data.workField) && data.workField.length
    ? data.workField.map((v: any) => (v === "other" ? (data.workFieldOther || "Other") : labelFor(workFieldOptions, v))).join(", ")
    : "—";
  const fundingDisplay = data.funding || "—";

  const dtClass = "py-2.5 border-b border-[var(--color-border)] text-[13px] text-[var(--color-text-muted)] font-normal last-of-type:border-b-0";
  const ddClass = "py-2.5 border-b border-[var(--color-border)] text-[13px] text-[var(--color-text)] font-normal text-right m-0 last-of-type:border-b-0";
  const editButtonClass = "bg-none border-none text-[var(--color-primary)] text-[13px] font-semibold cursor-pointer p-0 hover:underline";
  const sectionHeaderClass = "flex justify-between items-center pb-3 border-b border-[var(--color-border)] mb-0";
  const h3Class = "text-[15px] font-semibold text-[var(--color-text)] m-0";
  const fieldsCardClass = "bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] p-10 max-[640px]:py-4 max-[640px]:px-3";

  return (
    <div className="font-body">
      <h1 className="font-body text-[34px] font-bold tracking-[-0.01em] text-[var(--color-text)] m-0 mb-2 leading-[1.1] max-[640px]:text-[26px]">
        Review your application.
      </h1>
      <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-[1.6] m-0 mb-6 max-w-[640px] max-[640px]:text-sm max-[640px]:leading-[1.5] max-[640px]:mb-[18px]">
        Check everything looks correct before submitting. You can edit any
        section.
      </p>

      <div className="flex flex-col gap-4">
        <div className={fieldsCardClass}>
          <div className={sectionHeaderClass}>
            <h3 className={h3Class}>Personal information</h3>
            <button type="button" className={editButtonClass} onClick={() => onEdit(1)}>
              Edit
            </button>
          </div>
          <dl className="grid grid-cols-2 gap-y-0 m-0">
            <dt className={dtClass}>Full name</dt>
            <dd className={ddClass}>{data.fullName || '—'}</dd>
            <dt className={dtClass}>Email</dt>
            <dd className={ddClass}>{data.email || '—'}</dd>
            <dt className={dtClass}>Phone</dt>
            <dd className={ddClass}>{data.phoneNumber || '—'}</dd>
            <dt className={dtClass}>Age</dt>
            <dd className={ddClass}>{data.age || '—'}</dd>
            <dt className={dtClass}>Location</dt>
            <dd className={ddClass}>{data.location || '—'}</dd>
            <dt className={dtClass}>Education</dt>
            <dd className={ddClass}>{labelFor(educationField.options, data.educationLevel)}</dd>
          </dl>
        </div>

        <div className={fieldsCardClass}>
          <div className={sectionHeaderClass}>
            <h3 className={h3Class}>Exchange Programmes</h3>
            <button type="button" className={editButtonClass} onClick={() => onEdit(2)}>
              Edit
            </button>
          </div>
          <dl className="grid grid-cols-2 gap-y-0 m-0">
            <dt className={dtClass}>Selected Tracks</dt>
            <dd className="py-2.5 border-b border-[var(--color-border)] text-[13px] text-right m-0 last-of-type:border-b-0 text-[var(--color-success)] font-semibold whitespace-pre-line">{programmeNames.length ? programmeNames.join(', ') : '—'}</dd>
          </dl>
        </div>

        <div className={fieldsCardClass}>
          <div className={sectionHeaderClass}>
            <h3 className={h3Class}>Your preferences</h3>
            <button type="button" className={editButtonClass} onClick={() => onEdit(2)}>Edit</button>
          </div>

          <div className="py-2.5 border-b border-[var(--color-border)]">
            <span className="block text-[13px] text-[var(--color-text-muted)] mb-2">Preferred countries</span>
            {nationsDisplay}
          </div>

          <dl className="grid grid-cols-2 gap-y-0 m-0">
            <dt className={dtClass}>Work field</dt><dd className={ddClass}>{workFieldDisplay}</dd>
            <dt className={dtClass}>Duration</dt><dd className={ddClass}>{labelFor(travelTimeOptions, data.travelTime)}</dd>
            <dt className={dtClass}>Funding</dt><dd className={ddClass}>{fundingDisplay}</dd>
          </dl>
        </div>

        <div className={fieldsCardClass}>
          <div className={sectionHeaderClass}>
            <h3 className={h3Class}>Your application</h3>
            <button type="button" className={editButtonClass} onClick={() => onEdit(3)}>
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center gap-4 py-2.5 border-b border-[var(--color-border)]">
            <span className="text-[13px] text-[var(--color-text-muted)]">CV</span>
            <span className="text-[13px] text-right break-words text-[var(--color-primary)] font-medium">{data.cv ? data.cv.name : '—'}</span>
          </div>
          <div className="py-3 border-b border-[var(--color-border)] last-of-type:border-b-0">
            <span className="block text-[13px] text-[var(--color-text-muted)] mb-1.5">Motivation</span>
            <p className="text-sm text-[var(--color-text)] leading-[1.5] whitespace-pre-line">{data.motivation || '—'}</p>
          </div>
          <div className="py-3 border-b border-[var(--color-border)] last-of-type:border-b-0">
            <span className="block text-[13px] text-[var(--color-text-muted)] mb-1.5">Additional comments</span>
            <p className="text-sm text-[var(--color-text)] leading-[1.5] whitespace-pre-line">{data.additionalComments || 'Nil'}</p>
          </div>
        </div>
      </div>

      {submitError && <p className="text-[var(--color-error)] text-[13px] mt-4">{submitError}</p>}

      <div className="flex justify-between items-center mt-7 gap-3">
        <button
          type="button"
          className="font-body bg-transparent text-[var(--color-text-muted)] border border-[var(--color-border)] py-[14px] px-5 rounded-xl text-[15px] font-semibold cursor-pointer hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
          onClick={onBack}
          disabled={isSubmitting}
        >
          ← Back
        </button>
        <button
          type="button"
          className="font-body bg-[var(--color-primary)] text-white border-none py-[14px] px-[22px] rounded-xl text-[15px] font-semibold cursor-pointer hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none"
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application →'}
        </button>
      </div>
    </div>
  );
}

export default Confirmation;
