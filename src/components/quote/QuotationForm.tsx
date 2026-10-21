import { useEffect, useMemo, useRef, useState } from "react";
import type { ChangeEvent, FormEvent, JSX } from "react";
import { COMPANY, PRODUCTS, buildWhatsAppUrl } from "@/data/siteData";
import {
  EMPTY_FIELDS,
  FIELD_LABELS,
  MAX_LENGTHS,
  PACKAGING,
  buildMailtoUrl,
  buildRfqMessage,
  submitRfq,
  validateField,
  validateRfq,
} from "@/lib/rfq";
import type { RfqErrors, RfqFieldName, RfqFields } from "@/lib/rfq";
import "@/styles/quote-form.css";

/**
 * Reusable B2B quotation form (contract used by the product pages, /contact and /quote).
 * Submits to VITE_RFQ_ENDPOINT when configured; otherwise shows a review panel with
 * user-initiated WhatsApp and email links (see src/lib/rfq.ts).
 */
export type QuotationFormProps = {
  /** Product preselected in the form, e.g. "Cumin Seeds". Matched against the product list case-insensitively. */
  defaultProduct?: string;
  /** Grade options for the selected product page, shown in the Grade select. "Other / to be discussed" is always added. */
  gradeOptions?: string[];
  /** Packaging option preselected in the form. Must match one of the packaging options exactly; other values are ignored. */
  defaultPackaging?: string;
  /** First line of the WhatsApp / email text. Default: "Hello JM Masala, I would like a bulk quotation." */
  messageIntro?: string;
  /** Page the form sits on (slug or path), sent with the enquiry for tracking. */
  sourcePage?: string;
  /** DOM id of the form section; anchors like #quotation-form or #inquiry-form link to it. Default "quotation-form". */
  id?: string;
  /** Heading text (H2). Default "Request a Bulk Quotation". */
  heading?: string;
  /** Show the optional preferred payment terms select (used on /contact). Default false. */
  showPaymentTerms?: boolean;
  /** Destination country preset in the form (for example "India" on domestic pages). */
  defaultCountry?: string;
  /** Submit button label. Default "Request quotation". */
  submitLabel?: string;
  /** Email subject is "{prefix}: {product or 'spices'} - {company}". Default "Quotation request". */
  emailSubjectPrefix?: string;
  /** Page the visitor came from, added to the message as "(via ...)" and sent with the enquiry. */
  fromPage?: string;
  /** Make the packaging select required. */
  requirePackaging?: boolean;
  /** Optional paragraph shown under the heading. */
  introText?: string;
};

type Phase = "idle" | "submitting" | "success" | "error" | "handoff";

const OTHER_PRODUCT = "Other product";
const OTHER_GRADE = "Other / to be discussed";
const PAYMENT_TERMS = ["LC at Sight", "LC 30 Days", "TT Advance", "Other"];

const normalise = (value: string): string =>
  value
    .toLowerCase()
    .replace(/\(.*?\)/g, " ")
    .replace(/[^a-z0-9/ ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const stripSeeds = (value: string): string => normalise(value).replace(/\b(seeds?)\b/g, "").replace(/\s+/g, " ").trim();

const matchProduct = (wanted: string | undefined, names: string[]): string => {
  if (!wanted || !wanted.trim()) return "";
  const lower = wanted.trim().toLowerCase();
  const exact = names.find((n) => n.toLowerCase() === lower);
  if (exact) return exact;
  const norm = names.find((n) => normalise(n) === normalise(wanted));
  if (norm) return norm;
  const loose = names.filter((n) => stripSeeds(n) === stripSeeds(wanted));
  return loose.length === 1 ? loose[0] : "";
};

const matchPackaging = (wanted: string | undefined): string =>
  wanted && (PACKAGING as readonly string[]).includes(wanted) ? wanted : "";

const SUMMARY_ORDER: RfqFieldName[] = [
  "product",
  "grade",
  "quantity",
  "country",
  "packaging",
  "name",
  "company",
  "email",
  "phone",
  "paymentTerms",
  "message",
];

const QuotationForm = ({
  defaultProduct,
  gradeOptions,
  defaultPackaging,
  messageIntro,
  sourcePage,
  id = "quotation-form",
  heading = "Request a Bulk Quotation",
  showPaymentTerms = false,
  defaultCountry,
  submitLabel = "Request quotation",
  emailSubjectPrefix = "Quotation request",
  fromPage,
  requirePackaging = false,
  introText,
}: QuotationFormProps): JSX.Element => {
  const productNames = useMemo(() => [...PRODUCTS.map((p) => p.name), OTHER_PRODUCT], []);
  const grades = useMemo(
    () => [...(gradeOptions ?? []).filter((g) => g && g !== OTHER_GRADE), OTHER_GRADE],
    [gradeOptions],
  );

  const initial = (): RfqFields => ({
    ...EMPTY_FIELDS,
    product: matchProduct(defaultProduct, productNames),
    packaging: matchPackaging(defaultPackaging),
    country: defaultCountry ?? "",
  });

  const [fields, setFields] = useState<RfqFields>(initial);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<RfqErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");
  const [focusTick, setFocusTick] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const inFlight = useRef(false);
  const handoffHeadingRef = useRef<HTMLHeadingElement>(null);
  const [copied, setCopied] = useState<"" | "yes" | "no">("");
  const autoPackaging = useRef(matchPackaging(defaultPackaging));
  const autoProduct = useRef(matchProduct(defaultProduct, productNames));

  // Apply a late-arriving defaultProduct (or drop one that has gone away). Only a value the form set itself
  // is replaced or removed; anything the visitor chose is kept. Capture the old value before assigning the
  // ref, because the updater below may run after the assignment.
  useEffect(() => {
    const next = matchProduct(defaultProduct, productNames);
    const prev = autoProduct.current;
    autoProduct.current = next;
    setFields((f) => (f.product === "" || f.product === prev ? (f.product === next ? f : { ...f, product: next }) : f));
  }, [defaultProduct, productNames]);

  // Same for defaultPackaging, which can arrive after hydration (an enquiry intent) and can go away again
  // when the visitor moves to another /contact URL.
  useEffect(() => {
    const next = matchPackaging(defaultPackaging);
    const prev = autoPackaging.current;
    autoPackaging.current = next;
    setFields((f) => (f.packaging === "" || f.packaging === prev ? (f.packaging === next ? f : { ...f, packaging: next }) : f));
  }, [defaultPackaging]);

  useEffect(() => {
    if (focusTick > 0) summaryRef.current?.focus();
  }, [focusTick]);

  useEffect(() => {
    if (phase === "handoff") handoffHeadingRef.current?.focus();
    else setCopied("");
  }, [phase]);

  const titleId = `${id}-title`;
  const fid = (f: RfqFieldName) => `${id}-${f}`;
  const eid = (f: RfqFieldName) => `${id}-${f}-error`;

  const setValue = (field: RfqFieldName, value: string) => {
    setFields((prev) => ({ ...prev, [field]: value }));
    if (attempted && errors[field]) {
      const msg = validateField(field, value, field === "packaging" && requirePackaging);
      setErrors((prev) => {
        const next = { ...prev };
        if (msg) next[field] = msg;
        else delete next[field];
        return next;
      });
    }
  };

  const onBlur = (field: RfqFieldName) => {
    if (!attempted) return;
    const msg = validateField(field, fields[field], field === "packaging" && requirePackaging);
    setErrors((prev) => {
      const next = { ...prev };
      if (msg) next[field] = msg;
      else delete next[field];
      return next;
    });
  };

  const page = () => sourcePage || (typeof window !== "undefined" ? window.location.pathname : "");

  const send = async () => {
    if (inFlight.current) return;
    inFlight.current = true;
    setPhase("submitting");
    try {
      const result = await submitRfq({
        ...fields,
        sourcePage: page(),
        ...(fromPage ? { fromPage } : {}),
        timestamp: new Date().toISOString(),
      });
      if (result.status === "success") {
        setPhase("success");
        setFields(initial());
        setErrors({});
        setAttempted(false);
      } else if (result.status === "handoff") {
        setPhase("handoff");
      } else {
        setPhase("error");
      }
    } finally {
      inFlight.current = false;
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (honeypot.trim() || phase === "submitting") return;
    setAttempted(true);
    const result = validateRfq(fields, { requirePackaging });
    if (!result.valid) {
      setErrors(result.errors);
      setFocusTick((t) => t + 1);
      return;
    }
    setErrors({});
    void send();
  };

  const message = buildRfqMessage(fields, page(), showPaymentTerms, messageIntro, fromPage);
  const whatsappUrl = buildWhatsAppUrl(message);
  const mailUrl = buildMailtoUrl(COMPANY.email, `${emailSubjectPrefix}: ${fields.product || "spices"} - ${fields.company}`, message);

  const copyEnquiry = async () => {
    let ok = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(message);
        ok = true;
      }
    } catch {
      ok = false;
    }
    if (!ok) {
      try {
        const area = document.createElement("textarea");
        area.value = message;
        area.setAttribute("readonly", "");
        area.style.position = "fixed";
        area.style.opacity = "0";
        document.body.appendChild(area);
        area.select();
        ok = document.execCommand("copy");
        document.body.removeChild(area);
      } catch {
        ok = false;
      }
    }
    setCopied(ok ? "yes" : "no");
  };

  const errorList = (Object.keys(errors) as RfqFieldName[]).filter((f) => errors[f]);

  const text = (
    field: RfqFieldName,
    opts: { type?: string; inputMode?: "text" | "email" | "tel"; autoComplete?: string; required?: boolean; full?: boolean },
  ) => (
    <div className={`jmq-field${opts.full ? " jmq-full" : ""}`}>
      <label className="jmq-label" htmlFor={fid(field)}>
        {FIELD_LABELS[field]}
        {opts.required ? <span className="jmq-req" aria-hidden="true"> *</span> : <span> (optional)</span>}
      </label>
      <input
        id={fid(field)}
        name={field}
        type={opts.type ?? "text"}
        inputMode={opts.inputMode}
        autoComplete={opts.autoComplete ?? "off"}
        className="jmq-control"
        value={fields[field]}
        maxLength={MAX_LENGTHS[field] + 50}
        aria-required={opts.required || undefined}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={errors[field] ? eid(field) : undefined}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(field, e.target.value)}
        onBlur={() => onBlur(field)}
      />
      {errors[field] && (
        <p className="jmq-error" id={eid(field)}>
          {errors[field]}
        </p>
      )}
    </div>
  );

  const select = (field: RfqFieldName, options: readonly string[], opts: { placeholder?: string; required?: boolean }) => (
    <div className="jmq-field">
      <label className="jmq-label" htmlFor={fid(field)}>
        {FIELD_LABELS[field]}
        {opts.required ? <span className="jmq-req" aria-hidden="true"> *</span> : <span> (optional)</span>}
      </label>
      <select
        id={fid(field)}
        name={field}
        className="jmq-control"
        value={fields[field]}
        aria-required={opts.required || undefined}
        aria-invalid={errors[field] ? true : undefined}
        aria-describedby={errors[field] ? eid(field) : undefined}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setValue(field, e.target.value)}
        onBlur={() => onBlur(field)}
      >
        <option value="">{opts.placeholder ?? "Select an option"}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {errors[field] && (
        <p className="jmq-error" id={eid(field)}>
          {errors[field]}
        </p>
      )}
    </div>
  );

  const fallbackLinks = (
    <>
      <a className="jmq-btn jmq-btn--outline" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        Open WhatsApp with this enquiry
      </a>
      <a className="jmq-btn jmq-btn--outline" href={mailUrl}>
        Open email draft
      </a>
    </>
  );

  return (
    <section id={id} className="jmq" aria-labelledby={titleId} tabIndex={-1}>
      <h2 className="jmq-heading" id={titleId}>
        {heading}
      </h2>
      {introText && phase !== "handoff" && <p className="jmq-intro">{introText}</p>}

      {phase === "success" && (
        <div className="jmq-status" role="status">
          <p style={{ margin: 0 }}>Thank you. Your enquiry has been received. We will reply by email or WhatsApp.</p>
          <div className="jmq-actions">
            <button type="button" className="jmq-btn" onClick={() => setPhase("idle")}>
              Send another enquiry
            </button>
          </div>
        </div>
      )}

      {phase === "handoff" && (
        <div className="jmq-status" role="status">
          <h3 ref={handoffHeadingRef} tabIndex={-1} style={{ margin: "0 0 4px", fontSize: "1.15rem" }}>
            Review and send
          </h3>
          <dl className="jmq-summary">
            {SUMMARY_ORDER.filter((f) => (f !== "paymentTerms" || showPaymentTerms) && fields[f].trim()).map((f) => (
              <div key={f} style={{ display: "contents" }}>
                <dt>{FIELD_LABELS[f]}</dt>
                <dd>{fields[f]}</dd>
              </div>
            ))}
          </dl>
          <p className="jmq-warn">
            Your enquiry has not been sent yet. Press send in WhatsApp or in your email app to deliver it.
          </p>
          <div className="jmq-actions">
            <a className="jmq-btn jmq-btn--gold" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Open WhatsApp with this enquiry
            </a>
            <a className="jmq-btn" href={mailUrl}>
              Open email draft
            </a>
            <button type="button" className="jmq-btn jmq-btn--outline" onClick={() => void copyEnquiry()}>
              Copy enquiry
            </button>
            <button type="button" className="jmq-btn jmq-btn--outline" onClick={() => setPhase("idle")}>
              Edit details
            </button>
          </div>
          <p style={{ margin: "10px 0 0" }}>
            Or email us at <strong>{COMPANY.email}</strong>.
          </p>
          <p aria-live="polite" style={{ margin: "6px 0 0" }}>
            {copied === "yes" ? "Copied" : copied === "no" ? "Could not copy. Please select the text and copy it manually." : ""}
          </p>
        </div>
      )}

      {(phase === "idle" || phase === "submitting" || phase === "error") && (
        <>
          {phase === "error" && (
            <div className="jmq-alert" role="alert">
              <strong>Your enquiry was not sent.</strong>
              <p style={{ margin: "6px 0 0" }}>
                Something went wrong, so nothing was delivered. Your details are still below. You can try again, or send the
                same enquiry through WhatsApp or email.
              </p>
              <div className="jmq-actions">
                <button type="button" className="jmq-btn" onClick={() => void send()}>
                  Try again
                </button>
                {fallbackLinks}
              </div>
            </div>
          )}

          {errorList.length > 0 && (
            <div className="jmq-alert" role="alert" tabIndex={-1} ref={summaryRef}>
              <strong>Please fix the following before sending:</strong>
              <ul>
                {errorList.map((f) => (
                  <li key={f}>
                    <a
                      href={`#${fid(f)}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(fid(f))?.focus();
                      }}
                    >
                      {FIELD_LABELS[f]}: {errors[f]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={onSubmit} noValidate aria-busy={phase === "submitting"}>
            <div className="jmq-grid">
              {select("product", productNames, { placeholder: "Select a product", required: true })}
              {grades.length > 1 && select("grade", grades, { placeholder: "Select a grade" })}
              {text("quantity", { required: true })}
              {text("country", { autoComplete: "country-name", required: true })}
              {select("packaging", PACKAGING, { placeholder: "Select packaging", required: requirePackaging })}
              {text("name", { autoComplete: "name", required: true })}
              {text("company", { autoComplete: "organization", required: true })}
              {text("email", { type: "email", inputMode: "email", autoComplete: "email", required: true })}
              {text("phone", { type: "tel", inputMode: "tel", autoComplete: "tel", required: true })}
              {showPaymentTerms && select("paymentTerms", PAYMENT_TERMS, { placeholder: "Select payment terms" })}

              <div className="jmq-field jmq-full">
                <label className="jmq-label" htmlFor={fid("message")}>
                  {FIELD_LABELS.message} <span>(optional)</span>
                </label>
                <textarea
                  id={fid("message")}
                  name="message"
                  className="jmq-control"
                  rows={4}
                  value={fields.message}
                  aria-invalid={errors.message ? true : undefined}
                  aria-describedby={errors.message ? eid("message") : undefined}
                  onChange={(e) => setValue("message", e.target.value)}
                  onBlur={() => onBlur("message")}
                />
                {errors.message && (
                  <p className="jmq-error" id={eid("message")}>
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="jmq-hp" aria-hidden="true">
                <label htmlFor={`${id}-website`}>Website</label>
                <input
                  id={`${id}-website`}
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
            </div>

            <div className="jmq-actions">
              <button type="submit" className="jmq-btn jmq-btn--gold" disabled={phase === "submitting"} aria-busy={phase === "submitting"}>
                {phase === "submitting" ? "Sending..." : submitLabel}
              </button>
            </div>
          </form>
        </>
      )}
    </section>
  );
};

export default QuotationForm;
