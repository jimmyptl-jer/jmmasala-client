/**
 * RFQ (request for quotation) validation and submission.
 *
 * CONFIGURATION
 * Set VITE_RFQ_ENDPOINT (build-time env variable) to an endpoint that accepts a JSON POST
 * and returns a 2xx status on success, for example a form-handling service or a serverless
 * function. No such endpoint exists yet. Only a 2xx response counts as "sent".
 *
 * Without VITE_RFQ_ENDPOINT no network request is made and submitRfq returns "handoff":
 * the UI then shows a review panel with user-initiated WhatsApp and email links, and must
 * NOT claim the enquiry was sent.
 *
 * Personal data is never logged or stored by this module.
 */

export type RfqFields = {
  product: string;
  grade: string;
  quantity: string;
  country: string;
  packaging: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  paymentTerms: string;
};

export type RfqFieldName = keyof RfqFields;

export type RfqPayload = RfqFields & {
  sourcePage: string;
  /** ISO 8601 timestamp */
  timestamp: string;
};

export type RfqErrors = Partial<Record<RfqFieldName, string>>;

export type RfqValidation =
  | { valid: true; errors: Record<string, never> }
  | { valid: false; errors: RfqErrors };

export type RfqSubmitResult =
  | { status: "success" }
  | { status: "error"; reason: "network" | "http" | "timeout"; httpStatus?: number }
  | { status: "handoff" };

export const EMPTY_FIELDS: RfqFields = {
  product: "",
  grade: "",
  quantity: "",
  country: "",
  packaging: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
  paymentTerms: "",
};

/** Display labels, also used when building the message text. */
export const FIELD_LABELS: Record<RfqFieldName, string> = {
  product: "Product",
  grade: "Grade",
  quantity: "Estimated quantity",
  country: "Destination country",
  packaging: "Packaging preference",
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "WhatsApp / contact number",
  message: "Message",
  paymentTerms: "Preferred payment terms",
};

export const MAX_LENGTHS: Record<RfqFieldName, number> = {
  product: 100,
  grade: 100,
  quantity: 60,
  country: 80,
  packaging: 100,
  name: 100,
  company: 120,
  email: 254,
  phone: 30,
  message: 2000,
  paymentTerms: 40,
};

const REQUIRED: RfqFieldName[] = ["product", "quantity", "country", "name", "company", "email", "phone"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_CHARS_RE = /^\+?[\d\s\-()]+$/;

export const validateField = (field: RfqFieldName, rawValue: string): string | undefined => {
  const value = rawValue.trim();
  const label = FIELD_LABELS[field];
  if (!value) {
    return REQUIRED.includes(field) ? `Enter ${label.toLowerCase()}.` : undefined;
  }
  if (value.length > MAX_LENGTHS[field]) {
    return `${label} must be ${MAX_LENGTHS[field]} characters or fewer.`;
  }
  if (field === "email" && !EMAIL_RE.test(value)) {
    return "Enter a valid email address, for example name@company.com.";
  }
  if (field === "phone") {
    const digits = value.replace(/\D/g, "").length;
    if (!PHONE_CHARS_RE.test(value) || digits < 7 || digits > 15) {
      return "Enter a phone number with 7 to 15 digits. You may use +, spaces, hyphens and brackets.";
    }
  }
  return undefined;
};

export const validateRfq = (fields: RfqFields): RfqValidation => {
  const errors: RfqErrors = {};
  (Object.keys(FIELD_LABELS) as RfqFieldName[]).forEach((field) => {
    const message = validateField(field, fields[field]);
    if (message) errors[field] = message;
  });
  if (Object.keys(errors).length === 0) return { valid: true, errors: {} };
  return { valid: false, errors };
};

const TIMEOUT_MS = 15000;

export const isEndpointConfigured = (): boolean => {
  const endpoint = import.meta.env.VITE_RFQ_ENDPOINT;
  return typeof endpoint === "string" && endpoint.trim() !== "";
};

export const submitRfq = async (payload: RfqPayload): Promise<RfqSubmitResult> => {
  const endpoint = import.meta.env.VITE_RFQ_ENDPOINT;
  if (typeof endpoint !== "string" || endpoint.trim() === "") {
    return { status: "handoff" };
  }

  const controller = new AbortController();
  let timedOut = false;
  const timer = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, TIMEOUT_MS);

  try {
    const response = await fetch(endpoint.trim(), {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (response.status >= 200 && response.status < 300) return { status: "success" };
    return { status: "error", reason: "http", httpStatus: response.status };
  } catch {
    return { status: "error", reason: timedOut ? "timeout" : "network" };
  } finally {
    clearTimeout(timer);
  }
};

/** One field per line, every field listed ("Not provided" when empty). */
export const buildRfqMessage = (fields: RfqFields, sourcePage: string, includePayment: boolean): string => {
  const order: RfqFieldName[] = [
    "product",
    "grade",
    "quantity",
    "country",
    "packaging",
    "name",
    "company",
    "email",
    "phone",
    ...(includePayment ? (["paymentTerms"] as RfqFieldName[]) : []),
    "message",
  ];
  const lines = order.map((f) => `${FIELD_LABELS[f]}: ${fields[f].trim() || "Not provided"}`);
  return ["Hello JM Masala, I would like a bulk quotation.", ...lines, `Sent from page: ${sourcePage || "website"}`].join("\n");
};

export const buildMailtoUrl = (to: string, subject: string, body: string): string =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
