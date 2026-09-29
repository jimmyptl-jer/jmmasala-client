/**
 * faqData.ts
 * Buyer FAQs for product pages. Every answer must be backed by a confirmed
 * business fact (product data in siteData.ts or the JMMasalaProducts.pdf spec
 * sheet) — FAQPage schema is generated from these, so nothing speculative here.
 *
 * Product-specific commercial facts (MOQ, samples, dispatch…) go in PRODUCT_FACTS.
 */
import { DOCUMENTATION_PACKAGE, type ProductData } from "@/data/siteData";

export type Faq = { question: string; answer: string };

/** Product-specific commercial facts. A field left undefined means its FAQ is skipped. */
type ProductFacts = {
  moq?: string;
  samples?: string;
  privateLabel?: string;
  dispatch?: string;
  capacity?: string;
};

export const PRODUCT_FACTS: Record<string, ProductFacts> = {
  "cumin-seeds-exporter-india": {
    moq: "Trial orders for cumin seeds start from 1 MT, so buyers can evaluate quality before moving to container loads.",
    samples:
      "Cumin samples are available for evaluation. The sample and courier charge is approximately ₹3,000, depending on destination.",
    privateLabel:
      "Yes. Custom and private-label packaging with your branding is available for approximately ₹1–2 per kg over standard packing.",
    dispatch:
      "Cumin orders are typically dispatched within 1–5 days of order confirmation, depending on grade, quantity and packaging.",
    capacity: "We can supply up to 200 MT of cumin seeds per month.",
  },
};

const specValue = (product: ProductData, ...labels: string[]) =>
  product.specs.find((spec) => labels.includes(spec.label))?.value;

const listJoin = (items: string[]) =>
  items.length > 1
    ? `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`
    : items.join("");

export const buildProductFaqs = (product: ProductData): Faq[] => {
  const name = product.name;
  const lower = name.toLowerCase();
  const faqs: Faq[] = [];

  faqs.push({
    question: `Where does JM Masala source its ${lower}?`,
    answer: `We source our ${lower} from ${product.origin}, India. We are based near the APMC Market Yard in Unjha, Gujarat, about 4 hours by road from Mundra and Kandla ports.`,
  });

  const purity = specValue(product, "Purity");
  const moisture = specValue(product, "Moisture");
  if (purity || moisture) {
    const parts = [
      purity && `purity of ${purity}`,
      moisture && `moisture of ${moisture.replace(/^Max/i, "max")}`,
    ].filter(Boolean);
    faqs.push({
      question: `What purity and moisture specification do you offer for ${lower}?`,
      answer: `Our export ${lower} is supplied at a ${parts.join(" and ")}. Full specifications are listed on this page, and every lot ships with an NABL lab Certificate of Analysis.`,
    });
  }

  if (product.qualityGrades?.length) {
    const grades = product.qualityGrades.map(
      (grade) => `${grade.market} (purity ${grade.purity}, moisture ${grade.moisture.replace(/^Max/i, "max")})`,
    );
    faqs.push({
      question: `Which ${lower} grades are available for different export markets?`,
      answer: `We supply market-specific grades: ${listJoin(grades)}. Grades can also be matched to a buyer's own specification.`,
    });
  }

  faqs.push({
    question: `How are export lots of ${lower} cleaned and processed?`,
    answer:
      "Lots are Sortex or machine cleaned, tested at an NABL-accredited laboratory, and fumigated according to destination requirements. ETO or steam sterilization is available on request.",
  });

  faqs.push({
    question: `What packaging options are available for ${lower}?`,
    answer:
      "Standard export packing is 25 kg or 50 kg PP bags with an inner liner. Retail packs and private-label packaging with your own branding are available on request.",
  });

  const facts = PRODUCT_FACTS[product.slug] ?? {};

  if (product.commercialGrades?.length) {
    const grades = product.commercialGrades.map(
      (grade) => `${grade.name} ${grade.purity} ${grade.cleaning.toLowerCase()}`,
    );
    faqs.push({
      question: `Which commercial grades of ${lower} do you offer?`,
      answer: `Our standard ${lower} grades are ${listJoin(grades)}.`,
    });
    faqs.push({
      question: `What is the difference between Sortex cleaned and machine cleaned ${lower}?`,
      answer: `Machine cleaning removes dust, stones and admixture by sieving and gravity separation. Sortex cleaning adds optical colour sorting, which rejects discoloured seeds and foreign matter one by one, giving higher and more uniform purity. Our Europe grades are Sortex cleaned; Singapore quality is offered both ways.`,
    });
  }

  if (facts.moq) {
    faqs.push({
      question: `What is the minimum order quantity (MOQ) for ${lower}?`,
      answer: facts.moq,
    });
  }
  if (facts.capacity) {
    faqs.push({
      question: `What is your monthly supply capacity for ${lower}?`,
      answer: facts.capacity,
    });
  }
  if (facts.dispatch) {
    faqs.push({
      question: `How soon can you dispatch a ${lower} order?`,
      answer: facts.dispatch,
    });
  }
  if (facts.samples) {
    faqs.push({
      question: `Can I get a sample of your ${lower}, and what does it cost?`,
      answer: facts.samples,
    });
  }
  if (facts.privateLabel) {
    faqs.push({
      question: `Do you offer private-label packaging for ${lower}?`,
      answer: facts.privateLabel,
    });
  }

  faqs.push({
    question: "How quickly can you provide a sample and Certificate of Analysis?",
    answer:
      "Our partner NABL-accredited laboratory is within 30 minutes of our facility, which allows same-day sample dispatch and a 24–48 hour COA turnaround for export lots. Lot photos are also available on request.",
  });

  faqs.push({
    question: "Which export documents are provided with each shipment?",
    answer: `Each export shipment includes: ${listJoin(DOCUMENTATION_PACKAGE)}.`,
  });

  faqs.push({
    question: "Which ports do you ship from, and what shipping and payment terms do you offer?",
    answer:
      "We ship from Mundra and Kandla ports in Gujarat on FOB, CFR or CIF terms, as full container (FCL) or less-than-container (LCL) loads, with multi-product consolidation available. Accepted payment terms are LC, TT and DA.",
  });

  return faqs;
};
