import { PACKAGING } from "@/lib/rfq";

export type EnquiryIntentKey = "quote" | "sample" | "packaging" | "private-label";

export type EnquiryIntent = {
  /** H2 of the form. */
  heading: string;
  /** Must match a packaging option exactly (see PACKAGING in lib/rfq.ts). */
  packaging?: string;
  /** Packaging is required for this intent. */
  requirePackaging?: boolean;
  /** First line of the WhatsApp / email text (QuotationForm `messageIntro`). */
  intro: string;
  /** Visible paragraph under the heading (QuotationForm `introText`). */
  introText?: string;
  submitLabel: string;
  /** Email subject is `{emailSubjectPrefix}: {product or 'spices'} - {company}`. */
  emailSubjectPrefix: string;
  /** Hide the preferred payment terms select. */
  hidePaymentTerms: boolean;
  /** Text of the "WhatsApp About ..." quick link on /contact. */
  quickMessage: (product?: string) => string;
};

const RETAIL_OR_PRIVATE_LABEL = PACKAGING[2];

export const INTENTS: Record<EnquiryIntentKey, EnquiryIntent> = {
  quote: {
    heading: "Request a Bulk Quotation",
    intro: "Hello JM Masala, I would like a bulk quotation.",
    submitLabel: "Request quotation",
    emailSubjectPrefix: "Quotation request",
    hidePaymentTerms: false,
    quickMessage: (product) =>
      `Hi JM Masala, I am interested in ${product || "your spices"}. Please share specifications, MOQ, packing options and pricing.`,
  },
  sample: {
    heading: "Request a Sample and Quotation",
    intro: "Hello JM Masala, I would like to request a sample and a quotation.",
    introText:
      "Tell us the product and grade you want to evaluate and the destination. We confirm sample details with you before dispatch.",
    submitLabel: "Request sample and quotation",
    emailSubjectPrefix: "Sample and quotation request",
    hidePaymentTerms: true,
    quickMessage: (product) =>
      `Hi JM Masala, I would like a sample of ${product || "your spices"} and a quotation. Please share the sample details.`,
  },
  packaging: {
    heading: "Request Packaging Options and a Quotation",
    intro: "Hello JM Masala, I would like to discuss packaging options and a quotation.",
    introText: "Choose a packing format and add pack sizes, printing or branding and quantity in the message.",
    requirePackaging: true,
    submitLabel: "Request quotation",
    emailSubjectPrefix: "Packaging enquiry",
    hidePaymentTerms: true,
    quickMessage: (product) =>
      `Hi JM Masala, I would like to discuss packaging options for ${product || "spices"}. Please share the available formats and pack sizes.`,
  },
  "private-label": {
    heading: "Request a Private Label Quotation",
    packaging: RETAIL_OR_PRIVATE_LABEL,
    intro: "Hello JM Masala, I would like a private label quotation.",
    introText: "Tell us the products, pack sizes and quantity. Artwork and labelling can follow after your enquiry.",
    submitLabel: "Request quotation",
    emailSubjectPrefix: "Private label quotation request",
    hidePaymentTerms: true,
    quickMessage: (product) =>
      `Hi JM Masala, I am interested in private label packing for ${product || "spices"}. Please share options, MOQ and pricing.`,
  },
};

/** Returns the intent for a query-string value, or undefined for anything not in the map. */
export const getIntent = (key: string | null | undefined): EnquiryIntent | undefined =>
  key && Object.prototype.hasOwnProperty.call(INTENTS, key) ? INTENTS[key as EnquiryIntentKey] : undefined;

/** '/contact?intent=..&product=..#inquiry-form' */
export const enquiryHref = (intent: EnquiryIntentKey, productName?: string): string => {
  const params = new URLSearchParams({ intent });
  if (productName) params.set("product", productName);
  return `/contact?${params.toString()}#inquiry-form`;
};
