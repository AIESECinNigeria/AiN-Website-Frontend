// Field-definition data for the OGX multi-step exchange application form.
// Pure data module (no component, no "use client").

/** A single selectable option within a select / multiselect / radio field. */
export interface FieldOption {
  value: string;
  label: string;
  /** Emoji shown beside the label (work-field options). */
  icon?: string;
  /** Marks the free-text "Other" option (renders an inline fill-in). */
  isOther?: boolean;
  /** ISO-ish country code for the flag-icons glyph (nation options). */
  countryCode?: string;
  /** Secondary line beneath the label (radio "list" variant). */
  sublabel?: string;
}

/** Definition of one form field, consumed by <FormField />. */
export interface FieldDef {
  name: string;
  label: string;
  type:
    | "text"
    | "email"
    | "tel"
    | "select"
    | "multiselect"
    | "radio"
    | "checkbox"
    | "textarea"
    | "file";
  options?: FieldOption[];
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  showCharCount?: boolean;
  footerLeftText?: string;
  /** Leading icon key into the <FormField /> ICONS map. */
  icon?: string;
  /** Trailing icon key into the <FormField /> ICONS map. */
  trailingIcon?: string;
  /** Column count for multiselect grids. */
  columns?: number;
  /** "list" renders radios as a stacked list rather than cards. */
  variant?: string;
  hint?: string;
  maxSelect?: number;
  allowOther?: boolean;
  errorText?: string;
  accept?: string;
}

/**
 * Collected answers, keyed by field `name`. The model is intentionally dynamic
 * (values are strings, string[], boolean, or a File for the CV; "Other" fill-ins
 * live under `${name}Other`; per-track nations under gvNations/gtaNations/gteNations),
 * so a flexible record is used. Known keys include: fullName, email, phoneNumber,
 * age, location, educationLevel, aiesecer, medium, funding, opportunityType,
 * workField, workFieldOther, nations, travelTime, cv, motivation, additionalComments.
 */
export interface FormData {
  [key: string]: any;
}

// Age is collected as a range (dropdown) per the design.
export const ageOptions: FieldOption[] = [
  { value: "18-20", label: "18-20" },
  { value: "20-24", label: "20-24" },
  { value: "25-30", label: "25-30" },
];

// Nigerian states + FCT. (Design mock omitted Benue and misspelled Katsina as
// "Kastina" — corrected here to the canonical 36-state + FCT list.)
export const stateOptions: FieldOption[] = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "Federal Capital Territory (FCT)", "Gombe", "Imo", "Jigawa", "Kaduna",
  "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba",
  "Yobe", "Zamfara",
].map((s) => ({ value: s, label: s }));

export const educationOptions: FieldOption[] = [
  { value: "undergraduate", label: "Undergraduate" },
  { value: "graduate", label: "Graduate" },
];

export const aiesecerField: FieldDef = {
  name: "aiesecer",
  label: "Are you an AIESECer?",
  type: "select",
  required: true,
  helperText: "Are you a member of AIESEC in Nigeria?",
  placeholder: "Select an option",
  options: [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ],
};

export const mediumOptions: FieldOption[] = [
  { value: "AIESEC Member", label: "AIESEC Member" },
  { value: "AIESEC Event", label: "AIESEC Event" },
  { value: "Physical Outreach", label: "Physical Outreach" },
  { value: "WhatsApp", label: "WhatsApp" },
  { value: "Email", label: "Email" },
  { value: "X", label: "X" },
  { value: "Instagram", label: "Instagram" },
  { value: "Linkedin", label: "Linkedin" },
];

export const mediumField: FieldDef = {
  name: "medium",
  label: "How did you hear about AIESEC Exchanges?",
  type: "select",
  required: false,
  helperText: "Applies to Non-AIESECers only",
  placeholder: "Select a Medium",
  options: mediumOptions,
};

export const step1Fields: FieldDef[] = [
  { name: "fullName", label: "Full name", type: "text", icon: "user", placeholder: "Enter your full name", required: true },
  { name: "email", label: "Email address", type: "email", icon: "mail", placeholder: "Enter your email address", required: true },
  { name: "phoneNumber", label: "Phone number", type: "tel", icon: "phone", placeholder: "Enter your phone number", required: true },
  { name: "age", label: "Age", type: "select", placeholder: "Select your age range", required: true, options: ageOptions },
  { name: "location", label: "Where do you currently live?", type: "select", placeholder: "Select your location", required: true, options: stateOptions },
  { name: "educationLevel", label: "Level of Education?", type: "select", placeholder: "Select your level", required: true, options: educationOptions },
  aiesecerField,
  mediumField,
];

export const consentField: FieldDef = {
  name: "funding",
  label: "Can you fund the participation fees?",
  type: "select",
  helperText:
    "Please note that participation in the Global Exchanges program involves fees, usually between 300,000 Naira and 2,000,000 Naira, depending on the duration and the particular country of choice.",
  placeholder: "Select an option",
  options: [
    { value: "yes", label: "Yes, I can fund it" },
    { value: "no", label: "No, I can't fund it" },
  ],
  required: true,
  errorText: "Please acknowledge the participation fees to continue.",
};

//  Shared option sets

const workFieldOptions: FieldOption[] = [
  { value: "cs-it", label: "Computer Sciences/IT", icon: "💻" },
  { value: "education", label: "Education", icon: "🎓" },
  { value: "business-admin", label: "Business Administration", icon: "📊" },
  { value: "economics", label: "Economics", icon: "📈" },
  { value: "arts-culture", label: "Arts & Culture", icon: "🎨" },
  { value: "health-sciences", label: "Health Sciences", icon: "🩺" },
  { value: "accounting", label: "Accounting", icon: "💰" },
  { value: "engineering", label: "Engineering", icon: "⚙️" },
  { value: "other", label: "Other", icon: "✨", isOther: true },
];
const undergradNationOptions: FieldOption[] = [
  { value: "togo", label: "Togo", countryCode: "tg" },
  { value: "benin", label: "Benin Republic", countryCode: "bj" },
  { value: "cote-divoire", label: "Côte d'Ivoire", countryCode: "ci" },
  { value: "rwanda", label: "Rwanda", countryCode: "rw" },
  { value: "kenya", label: "Kenya", countryCode: "ke" },
  { value: "egypt", label: "Egypt", countryCode: "eg" },
  { value: "morocco", label: "Morocco", countryCode: "ma" },
  { value: "ghana", label: "Ghana", countryCode: "gh" },
  { value: "other", label: "Other", isOther: true },
];

export const graduateNationOptions: FieldOption[] = [
  { value: "togo", label: "Togo", countryCode: "tg" },
  { value: "benin", label: "Benin Republic", countryCode: "bj" },
  { value: "cote-divoire", label: "Côte d'Ivoire", countryCode: "ci" },
  { value: "rwanda", label: "Rwanda", countryCode: "rw" },
  { value: "kenya", label: "Kenya", countryCode: "ke" },
  { value: "egypt", label: "Egypt", countryCode: "eg" },
  { value: "morocco", label: "Morocco", countryCode: "ma" },
  { value: "malaysia", label: "Malaysia", countryCode: "my" },
  { value: "bahrain", label: "Bahrain", countryCode: "bh" },
  { value: "algeria", label: "Algeria", countryCode: "dz" },
  { value: "pakistan", label: "Pakistan", countryCode: "pk" },
  { value: "belgium", label: "Belgium", countryCode: "be" },
  { value: "ethiopia", label: "Ethiopia", countryCode: "et" },
  { value: "brazil", label: "Brazil", countryCode: "br" },
  { value: "tunisia", label: "Tunisia", countryCode: "tn" },
  { value: "azerbaijan", label: "Azerbaijan", countryCode: "az" },
  { value: "turkey", label: "Turkey", countryCode: "tr" },
  { value: "other", label: "Other", isOther: true },
];
//  Undergraduate branch

export const undergradFields: FieldDef[] = [
  {
    name: "nations",
    label: "Which nation would you like to volunteer abroad?",
    type: "multiselect",
    helperText: "You can select up to 3 countries",
    required: true,
    maxSelect: 3,
    allowOther: true,
    options: undergradNationOptions,
    columns: 4,
  },
  {
    name: "workField",
    label: "Which work field are you interested in?",
    type: "multiselect",
    maxSelect: 2,
    required: true,
    allowOther: true,
    options: workFieldOptions,
    columns: 3,
  },
  {
    name: "travelTime",
    label: "How much time can you take off to travel right now?",
    type: "radio",
    required: true,
    options: [
      { value: "6-weeks", label: "6 weeks" },
      { value: "8-weeks", label: "8 Weeks" },
      { value: "more-than-8-weeks", label: "More than 8 weeks" },
    ],
  },
];

// Graduate branch (has an internal sub-branch on opportunityType)

export const graduateOpportunityTypeField: FieldDef = {
  name: "opportunityType",
  label: "Would you like to Volunteer, intern or teach abroad?",
  helperText: "You can choose more than one",
  type: "multiselect",
  required: true,
  maxSelect: 3,
  options: [
    { value: "volunteer", label: "Volunteer (Unpaid Opportunity)" },
    { value: "intern", label: "Intern (Paid Opportunity)" },
    { value: "teach", label: "Teach (Paid Opportunity)" },
  ],
};

export const graduateWorkFieldField: FieldDef = {
  name: "workField",
  label: "Which work field are you interested in?",
  type: "multiselect",
  maxSelect: 2,
  required: true,
  allowOther: true,
  options: workFieldOptions,
  columns: 3,
};

// Nation questions are keyed by track so each selected programme has its own values.
export function getGraduateNationField(track: string): FieldDef | null {
  const trackDetails = {
    volunteer: { name: "gvNations", word: "VOLUNTEER" },
    intern: { name: "gtaNations", word: "INTERN" },
    teach: { name: "gteNations", word: "TEACH" },
  }[track];
  if (!trackDetails) return null;
  return {
    name: trackDetails.name,
    label: `Which nation would you like to ${trackDetails.word} abroad?`,
    type: "multiselect",
    helperText: "You can select up to 3 countries",
    required: true,
    maxSelect: 3,
    allowOther: true,
    columns: 4,
    options: graduateNationOptions,
  };
}

export const graduateTravelTimeField: FieldDef = {
  name: "travelTime",
  label: "How much time can you take off to travel right now?",
  type: "radio",
  required: true,
  options: [
    { value: "6-weeks", label: "6 Weeks" },
    { value: "3-months", label: "3 Months" },
    { value: "6-months", label: "6 Months" },
    { value: "more-than-6-months", label: "More than 6 Months" },
  ],
};

export const step3Fields: FieldDef[] = [
  {
    name: "cv",
    label: "Upload your CV",
    type: "file",
    required: true,
    helperText: "Help us understand your background and experience.",
    accept: ".pdf,.doc,.docx",
  },
  {
    name: "motivation",
    label: "What do you hope to gain from this experience?",
    type: "textarea",
    required: true,
    helperText: "Share your goals, expectations, and what excites you most about this opportunity.",
    footerLeftText: "Be yourself",
    showCharCount: true,
    placeholder:
      "e.g. I want to develop my leadership skills by working with communities in Rwanda while contributing to meaningful education projects.",
  },
  {
    name: "additionalComments",
    label: "Anything else you would like us to know?",
    type: "textarea",
    required: false,
    placeholder: "Any questions, special circumstances, or extra details you'd like to share...",
  },
];

export { workFieldOptions };
