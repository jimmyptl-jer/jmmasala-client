import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  MapPin,
  Package,
  Tag,
  Layers,
  Truck,
  FileText,
  Star,
  ChevronRight,
} from "lucide-react";
import Seo from "@/components/Seo";
import {
  DOCUMENTATION_PACKAGE,
  PRODUCTS,
  SITE_URL,
  TRUST_BADGES,
} from "@/data/siteData";

import bannerImage from "@/assets/homepage.png";
/* ─────────────────────────── DATA ─────────────────────────── */

const STATS = [
  { value: "25+", label: "Years of Legacy" },
  { value: "12+", label: "Spice Varieties" },
  { value: "30+", label: "Export Countries" },
  { value: "500+", label: "Satisfied Buyers" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Farmer Sourcing",
    description:
      "Direct procurement from Unjha mandi network and trusted farmer channels across Gujarat and South India.",
    icon: "🌾",
  },
  {
    step: "02",
    title: "Cleaning & Grading",
    description:
      "Every lot goes through mechanical cleaning, optical sorting, and manual grading for consistent quality.",
    icon: "⚙️",
  },
  {
    step: "03",
    title: "Lab Testing",
    description:
      "In-house and third-party lab tests for moisture, volatile oil, pesticide residue, and microbial compliance.",
    icon: "🔬",
  },
  {
    step: "04",
    title: "Packing & Labelling",
    description:
      "Custom packing in retail or bulk formats with private-label printing and batch coding per buyer spec.",
    icon: "📦",
  },
  {
    step: "05",
    title: "Documentation",
    description:
      "Full export document set prepared — COA, phytosanitary, fumigation, APEDA, and LC-compatible documents.",
    icon: "📋",
  },
  {
    step: "06",
    title: "Dispatch & Tracking",
    description:
      "Container stuffing, shipping marks, and shipment communication to ensure smooth port clearance.",
    icon: "🚢",
  },
];

const SERVICES = [
  {
    icon: <Tag className="h-7 w-7" />,
    title: "Custom Labelling",
    description:
      "Your brand, your identity. We print buyer-specific labels with logo, nutritional info, barcode, and regulatory text for any target market.",
    highlights: [
      "Full-color label printing",
      "Regulatory text per country",
      "Barcode & QR code support",
      "Multi-language labels",
    ],
  },
  {
    icon: <Package className="h-7 w-7" />,
    title: "Custom Packing",
    description:
      "From 50g sachets to 50kg export bags — we offer flexible packing formats tailored to your distribution model.",
    highlights: [
      "100g / 250g / 500g / 1kg retail",
      "5kg / 10kg institutional packs",
      "25kg / 50kg export bags",
      "Food-grade PP & HDPE liners",
    ],
  },
  {
    icon: <Layers className="h-7 w-7" />,
    title: "Private Label Program",
    description:
      "Launch your own spice brand with zero manufacturing investment. We handle everything from sourcing to shelf-ready packs.",
    highlights: [
      "Brand identity setup support",
      "MOQ flexibility by product",
      "SKU-wise lot management",
      "Distributor & retail chain ready",
    ],
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "Bulk Export Supply",
    description:
      "Container-load supply for importers, wholesalers, and food processors with consistent quality across shipments.",
    highlights: [
      "FCL & LCL options",
      "Fumigation & phytosanitary",
      "LC / TT / DA payment terms",
      "Multi-product consolidation",
    ],
  },
  {
    icon: <FileText className="h-7 w-7" />,
    title: "Export Documentation",
    description:
      "We manage the full compliance paper trail so your imports clear without delays or rejections.",
    highlights: [
      "COA & test reports",
      "APEDA & Spice Board docs",
      "Phytosanitary certificate",
      "Commercial invoice & packing list",
    ],
  },
  {
    icon: <MapPin className="h-7 w-7" />,
    title: "Origin Certification",
    description:
      "All products come with traceable origin certificates, supporting your buyer's clean-label and transparency requirements.",
    highlights: [
      "Country of origin certificate",
      "Lot-wise traceability",
      "Non-GMO declarations",
      "Organic sourcing on request",
    ],
  },
];

const EXPORT_REGIONS = [
  {
    region: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "Oman"],
    color: "#C84B11",
  },
  {
    region: "Southeast Asia",
    countries: ["Malaysia", "Singapore", "Indonesia", "Vietnam", "Thailand"],
    color: "#8B2E00",
  },
  {
    region: "Europe",
    countries: ["UK", "Germany", "Netherlands", "France", "Spain", "Poland"],
    color: "#D4680A",
  },
  {
    region: "Americas",
    countries: ["USA", "Canada", "Brazil", "Mexico"],
    color: "#A0522D",
  },
  {
    region: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Tanzania"],
    color: "#6B3A1F",
  },
  {
    region: "Oceania & Others",
    countries: ["Australia", "New Zealand", "Sri Lanka", "Bangladesh"],
    color: "#E8860E",
  },
];

const TESTIMONIALS = [
  {
    name: "Ahmed Al-Rashidi",
    company: "Gulf Spice Trading, UAE",
    rating: 5,
    text: "JM Masala has been our primary cumin and coriander supplier for 4 years. Consistent quality, reliable documentation, and they always meet our container timelines. Highly recommended for serious importers.",
  },
  {
    name: "Priya Nair",
    company: "Spiceworld Distributors, UK",
    rating: 5,
    text: "Their private label program is exceptional. We launched our own brand within 3 months with their support — labels, packing, documentation, everything handled professionally.",
  },
  {
    name: "Marcus Weber",
    company: "NaturalFood GmbH, Germany",
    rating: 5,
    text: "HACCP and ISO certifications are genuine, not just on paper. Their COA quality and lot-wise testing reports are detailed and pass our European food safety audits without any issues.",
  },
  {
    name: "Li Wei",
    company: "Hua Xin Foods, Malaysia",
    rating: 5,
    text: "We source turmeric, chilli, and black pepper from them. The grading is always consistent and their communication is prompt. A trustworthy long-term partner from Unjha.",
  },
];

const ABOUT_HIGHLIGHTS = [
  { label: "Founded", value: "2 Generations" },
  { label: "Base", value: "Unjha, Gujarat" },
  { label: "Certifications", value: "HACCP · ISO 22000" },
  { label: "Registrations", value: "APEDA · Spice Board · FSSAI" },
];

/* ─────────────────────────── COMPONENT ─────────────────────────── */

const HomePage = () => {
  return (
    <>
      <Seo
        title="JM Masala | Premium Indian Spice Exporter | Unjha Gujarat"
        description="HACCP certified Indian spice exporter from Unjha Gujarat. Complete portfolio — cumin, coriander, turmeric, red chilli, black pepper, cardamom, psyllium. Custom packing, private label, export documentation. APEDA Spice Board registered."
        path="/"
        imageUrl={PRODUCTS[0]?.imageUrl}
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "JM Masala Exports",
          url: SITE_URL,
          email: "jmmasala@outlook.in",
          logo: `${SITE_URL}/favicon.svg`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91 91067 66041",
            contactType: "sales",
            areaServed: "Worldwide",
          },
        }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        .jm2-root {
          font-family: 'DM Sans', sans-serif;
          color: #2C1A0E;
          --spice-dark: #2C1A0E;
          --spice-brown: #5C2E0E;
          --spice-amber: #C84B11;
          --spice-gold: #E8860E;
          --spice-cream: #FAF6F0;
          --spice-beige: #F0E6D8;
          --spice-warm-white: #FFFDF9;
        }

        .jm2-display { font-family: 'Playfair Display', serif; }

        /* Hero */
        .jm2-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .jm2-hero__bg {
          position: absolute; inset: 0;
          background-image: url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1800&q=80');
          background-size: cover; background-position: center;
        }
        .jm2-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(44,26,14,0.92) 0%, rgba(92,46,14,0.75) 60%, rgba(200,75,17,0.3) 100%);
        }
        .jm2-hero__content {
          position: relative;
          max-width: 1200px;
          margin: 0 auto;
          padding: 5rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 768px) {
          .jm2-hero__content { grid-template-columns: 1fr; gap: 2rem; }
          .jm2-hero__right { display: none; }
        }
        .jm2-hero__eyebrow {
          display: inline-flex; align-items: center; gap: 0.5rem;
          background: rgba(232,134,14,0.2); border: 1px solid rgba(232,134,14,0.4);
          color: #E8860E; padding: 0.35rem 1rem; border-radius: 2rem;
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        .jm2-hero__h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          color: #fff; line-height: 1.15;
          margin-bottom: 1.5rem;
        }
        .jm2-hero__h1 em { color: #E8860E; font-style: italic; }
        .jm2-hero__sub {
          font-size: 1.05rem; color: rgba(255,255,255,0.85);
          line-height: 1.7; margin-bottom: 2.5rem; max-width: 480px;
        }
        .jm2-hero__actions { display: flex; gap: 1rem; flex-wrap: wrap; }
        .jm2-btn-primary {
          background: linear-gradient(135deg, #C84B11, #E8860E);
          color: #fff; padding: 0.85rem 2rem; border-radius: 0.5rem;
          font-weight: 600; font-size: 0.95rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(200,75,17,0.35);
        }
        .jm2-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(200,75,17,0.45); }
        .jm2-btn-outline {
          border: 2px solid rgba(255,255,255,0.5); color: #fff;
          padding: 0.85rem 2rem; border-radius: 0.5rem;
          font-weight: 600; font-size: 0.95rem; text-decoration: none;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: all 0.2s;
        }
        .jm2-btn-outline:hover { background: rgba(255,255,255,0.1); border-color: #fff; }

        /* Spice cards in hero */
        .jm2-hero__spice-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;
        }
        .jm2-spice-pill {
          background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.85rem 1.2rem; border-radius: 0.75rem;
          color: #fff; font-size: 0.9rem; font-weight: 500;
          display: flex; align-items: center; gap: 0.6rem;
        }
        .jm2-spice-pill span { font-size: 1.3rem; }

        /* Trust bar */
        .jm2-trust {
          background: var(--spice-brown);
          padding: 1rem 2rem;
        }
        .jm2-trust__inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; flex-wrap: wrap; gap: 0.5rem 2rem;
          align-items: center; justify-content: center;
        }
        .jm2-trust__item {
          display: flex; align-items: center; gap: 0.5rem;
          color: rgba(255,255,255,0.9); font-size: 0.82rem; font-weight: 500;
        }
        .jm2-trust__dot { width: 5px; height: 5px; border-radius: 50%; background: #E8860E; }

        /* Section shared */
        .jm2-section {
          padding: 5rem 2rem;
        }
        .jm2-section--cream { background: var(--spice-cream); }
        .jm2-section--beige { background: var(--spice-beige); }
        .jm2-section--white { background: var(--spice-warm-white); }
        .jm2-section--dark { background: var(--spice-dark); }
        .jm2-container { max-width: 1200px; margin: 0 auto; }
        .jm2-label {
          font-size: 0.75rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--spice-amber);
          margin-bottom: 0.75rem;
        }
        .jm2-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.5vw, 2.6rem);
          color: var(--spice-dark); line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        .jm2-heading--white { color: #fff; }
        .jm2-sub {
          font-size: 1rem; color: #6B4226; line-height: 1.7;
          max-width: 600px; margin-bottom: 3rem;
        }
        .jm2-divider {
          width: 3rem; height: 3px; background: linear-gradient(90deg, #C84B11, #E8860E);
          border-radius: 2px; margin-bottom: 1rem;
        }

        /* Stats */
        .jm2-stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
          background: var(--spice-beige);
        }
        @media (max-width: 640px) { .jm2-stats { grid-template-columns: repeat(2, 1fr); } }
        .jm2-stat {
          background: var(--spice-warm-white);
          padding: 2.5rem 1.5rem; text-align: center;
        }
        .jm2-stat__value {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem; font-weight: 700;
          color: var(--spice-amber); line-height: 1;
          margin-bottom: 0.4rem;
        }
        .jm2-stat__label { font-size: 0.85rem; color: #6B4226; font-weight: 500; }

        /* About */
        .jm2-about {
          display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
        }
        @media (max-width: 768px) { .jm2-about { grid-template-columns: 1fr; gap: 2.5rem; } }
        .jm2-about__img-wrap {
          position: relative; border-radius: 1rem; overflow: hidden;
          box-shadow: 0 20px 60px rgba(44,26,14,0.2);
        }
        .jm2-about__img { width: 100%; height: 420px; object-fit: cover; }
        .jm2-about__badge {
          position: absolute; bottom: 1.5rem; left: 1.5rem;
          background: linear-gradient(135deg, #C84B11, #E8860E);
          color: #fff; padding: 0.75rem 1.25rem; border-radius: 0.75rem;
          font-weight: 700; font-size: 0.9rem; font-family: 'Playfair Display', serif;
        }
        .jm2-about__meta {
          display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;
        }
        .jm2-about__meta-item {
          background: var(--spice-beige); padding: 1rem 1.25rem; border-radius: 0.75rem;
          border-left: 3px solid var(--spice-amber);
        }
        .jm2-about__meta-label { font-size: 0.72rem; font-weight: 700; color: var(--spice-amber); text-transform: uppercase; letter-spacing: 0.08em; }
        .jm2-about__meta-value { font-size: 0.9rem; font-weight: 600; color: var(--spice-dark); margin-top: 0.2rem; }

        /* Products */
        .jm2-products-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }
        @media (max-width: 900px) { .jm2-products-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .jm2-products-grid { grid-template-columns: 1fr; } }
        .jm2-product-card {
          background: #fff; border-radius: 1rem;
          border: 1px solid var(--spice-beige);
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(44,26,14,0.06);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .jm2-product-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(44,26,14,0.12); }
        .jm2-product-card__img { width: 100%; height: 180px; object-fit: cover; }
        .jm2-product-card__body { padding: 1.25rem; }
        .jm2-product-card__name { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; color: var(--spice-dark); margin-bottom: 0.4rem; }
        .jm2-product-card__desc { font-size: 0.85rem; color: #6B4226; line-height: 1.6; margin-bottom: 1rem; }
        .jm2-product-card__link {
          font-size: 0.85rem; font-weight: 700; color: var(--spice-amber);
          display: inline-flex; align-items: center; gap: 0.3rem; text-decoration: none;
          transition: gap 0.2s;
        }
        .jm2-product-card__link:hover { gap: 0.6rem; }

        /* Process */
        .jm2-process {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;
        }
        @media (max-width: 900px) { .jm2-process { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .jm2-process { grid-template-columns: 1fr; } }
        .jm2-process-step {
          position: relative; padding: 2rem;
          background: #fff; border-radius: 1rem;
          border: 1px solid var(--spice-beige);
          box-shadow: 0 2px 12px rgba(44,26,14,0.05);
        }
        .jm2-process-step__num {
          font-family: 'Playfair Display', serif;
          font-size: 3rem; font-weight: 700;
          color: var(--spice-beige); line-height: 1;
          margin-bottom: 0.5rem;
        }
        .jm2-process-step__emoji { font-size: 2rem; margin-bottom: 0.75rem; display: block; }
        .jm2-process-step__title { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; color: var(--spice-dark); margin-bottom: 0.5rem; }
        .jm2-process-step__desc { font-size: 0.85rem; color: #6B4226; line-height: 1.7; }
        .jm2-process-step__bar {
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #C84B11, #E8860E);
          border-radius: 1rem 1rem 0 0;
        }

        /* Services */
        .jm2-services {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }
        @media (max-width: 900px) { .jm2-services { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .jm2-services { grid-template-columns: 1fr; } }
        .jm2-service-card {
          background: #fff; padding: 2rem; border-radius: 1rem;
          border: 1px solid var(--spice-beige);
          box-shadow: 0 2px 12px rgba(44,26,14,0.05);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .jm2-service-card:hover { transform: translateY(-3px); box-shadow: 0 10px 28px rgba(44,26,14,0.1); }
        .jm2-service-card__icon {
          width: 3rem; height: 3rem; border-radius: 0.75rem;
          background: linear-gradient(135deg, #C84B11, #E8860E);
          display: flex; align-items: center; justify-content: center;
          color: #fff; margin-bottom: 1.25rem;
        }
        .jm2-service-card__title { font-family: 'Playfair Display', serif; font-size: 1.15rem; font-weight: 600; color: var(--spice-dark); margin-bottom: 0.6rem; }
        .jm2-service-card__desc { font-size: 0.85rem; color: #6B4226; line-height: 1.7; margin-bottom: 1.25rem; }
        .jm2-service-card__list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.4rem; }
        .jm2-service-card__list li {
          font-size: 0.8rem; color: #5C2E0E; font-weight: 500;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .jm2-service-card__list li::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--spice-amber); flex-shrink: 0;
        }

        /* Export regions */
        .jm2-regions {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
        }
        @media (max-width: 900px) { .jm2-regions { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .jm2-regions { grid-template-columns: 1fr; } }
        .jm2-region-card {
          padding: 1.5rem; border-radius: 1rem;
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(4px);
        }
        .jm2-region-card__name {
          font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 600;
          color: #fff; margin-bottom: 0.75rem;
          display: flex; align-items: center; gap: 0.5rem;
        }
        .jm2-region-card__dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .jm2-region-card__countries { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .jm2-country-tag {
          background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.8);
          padding: 0.2rem 0.65rem; border-radius: 2rem; font-size: 0.75rem; font-weight: 500;
        }
        .jm2-export-hero {
          text-align: center; margin-bottom: 3rem;
        }
        .jm2-export-hero__num {
          font-family: 'Playfair Display', serif; font-size: 4.5rem; font-weight: 700;
          color: var(--spice-gold); line-height: 1;
        }

        /* Testimonials */
        .jm2-testimonials {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem;
        }
        @media (max-width: 640px) { .jm2-testimonials { grid-template-columns: 1fr; } }
        .jm2-testimonial {
          background: #fff; padding: 2rem; border-radius: 1rem;
          border: 1px solid var(--spice-beige);
          box-shadow: 0 2px 12px rgba(44,26,14,0.05);
          position: relative;
        }
        .jm2-testimonial::before {
          content: '"'; font-family: 'Playfair Display', serif; font-size: 5rem;
          color: var(--spice-beige); position: absolute; top: 0.5rem; right: 1.5rem;
          line-height: 1;
        }
        .jm2-stars { display: flex; gap: 0.2rem; margin-bottom: 1rem; }
        .jm2-star { color: #E8860E; font-size: 1rem; }
        .jm2-testimonial__text { font-size: 0.9rem; color: #4A2C15; line-height: 1.8; margin-bottom: 1.5rem; font-style: italic; }
        .jm2-testimonial__author { font-weight: 700; font-size: 0.9rem; color: var(--spice-dark); }
        .jm2-testimonial__company { font-size: 0.8rem; color: var(--spice-amber); font-weight: 500; margin-top: 0.1rem; }

        /* Certifications */
        .jm2-certs {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;
        }
        @media (max-width: 640px) { .jm2-certs { grid-template-columns: repeat(2, 1fr); } }
        .jm2-cert {
          background: var(--spice-beige); padding: 1.25rem;
          border-radius: 0.75rem; text-align: center;
          border: 1px solid rgba(200,75,17,0.15);
        }
        .jm2-cert__name { font-weight: 700; font-size: 0.85rem; color: var(--spice-dark); }
        .jm2-cert__sub { font-size: 0.75rem; color: #6B4226; margin-top: 0.2rem; }

        /* CTA */
        .jm2-cta {
          background: linear-gradient(135deg, #2C1A0E 0%, #5C2E0E 50%, #8B2E00 100%);
          padding: 5rem 2rem; text-align: center; position: relative; overflow: hidden;
        }
        .jm2-cta::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(232,134,14,0.15) 0%, transparent 60%);
        }
        .jm2-cta__inner { position: relative; max-width: 600px; margin: 0 auto; }
        .jm2-cta__heading {
          font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.5rem);
          color: #fff; margin-bottom: 1rem; line-height: 1.3;
        }
        .jm2-cta__sub { color: rgba(255,255,255,0.75); font-size: 1rem; margin-bottom: 2rem; line-height: 1.7; }
        .jm2-cta__actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
      `}</style>

      <div className="jm2-root">
        {/* ── HERO ── */}
        <section className="jm2-hero">
          <div className="jm2-hero__bg" />
          <div className="jm2-hero__overlay" />
          <div className="jm2-hero__content">
            <div>
              <div className="jm2-hero__eyebrow">
                <MapPin className="h-3 w-3" /> Unjha, Gujarat, India
              </div>
              <h1 className="jm2-hero__h1">
                Premium Indian Spices — <em>Direct from Origin</em>
              </h1>
              <p className="jm2-hero__sub">
                Two generations of spice expertise. One complete export partner
                for cumin, coriander, turmeric, chilli, fennel, fenugreek,
                psyllium and more. HACCP certified, APEDA & Spice Board
                registered.
              </p>
              <div className="jm2-hero__actions">
                <Link
                  to="/contact?intent=quote#inquiry-form"
                  className="jm2-btn-primary"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="/JMMasalaProducts.pdf" className="jm2-btn-outline">
                  Download Catalogue
                </a>
              </div>
            </div>
            <div className="jm2-hero__right">
              <div className="jm2-hero__spice-grid">
                {[
                  "🟤 Cumin Seeds",
                  "🟡 Turmeric",
                  "🌶️ Red Chilli",
                  "🟢 Fennel Seeds",
                  "⚫ Black Pepper",
                  "💚 Cardamom",
                  "🟠 Coriander",
                  "🌿 Fenugreek",
                ].map((s) => (
                  <div key={s} className="jm2-spice-pill">
                    <span>{s.split(" ")[0]}</span>
                    <span>{s.split(" ").slice(1).join(" ")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <div className="jm2-trust">
          <div className="jm2-trust__inner">
            {[
              "HACCP Certified",
              "ISO 22000",
              "APEDA Registered",
              "Spice Board RCMC",
              "FSSAI Licensed",
              "IEC Registered",
              "30+ Export Countries",
            ].map((b, i, arr) => (
              <div
                key={b}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div className="jm2-trust__item">
                  <CheckCircle2
                    className="h-3.5 w-3.5"
                    style={{ color: "#E8860E" }}
                  />
                  <span>{b}</span>
                </div>
                {i < arr.length - 1 && <div className="jm2-trust__dot" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="jm2-stats">
          {STATS.map((s) => (
            <div key={s.label} className="jm2-stat">
              <div className="jm2-stat__value">{s.value}</div>
              <div className="jm2-stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── ABOUT ── */}
        <section className="jm2-section jm2-section--white">
          <div className="jm2-container">
            <div className="jm2-about">
              <div className="jm2-about__img-wrap">
                <img
                  src={bannerImage}
                  alt="Spice market at Unjha"
                  className="jm2-about__img"
                />
                <div className="jm2-about__badge">Est. Unjha, Gujarat</div>
              </div>
              <div>
                <p className="jm2-label">About JM Masala</p>
                <h2 className="jm2-heading">
                  Two Generations. One Commitment to Quality.
                </h2>
                <div className="jm2-divider" />
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#4A2C15",
                    lineHeight: 1.8,
                    marginBottom: "1rem",
                  }}
                >
                  JM Masala Exports is rooted in Unjha — India's largest spice
                  trading hub in Gujarat. What started as a family passion for
                  spice quality has grown into a trusted export operation
                  supplying buyers across 30+ countries.
                </p>
                <p
                  style={{
                    fontSize: "0.95rem",
                    color: "#4A2C15",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                  }}
                >
                  Our dual sourcing network — Unjha mandi for core spices and
                  selected partners in South India for region-specific varieties
                  — ensures we cover your full portfolio needs from a single,
                  accountable supplier. Every shipment is backed by genuine
                  certifications, lot-wise testing, and meticulous export
                  documentation.
                </p>
                <div className="jm2-about__meta">
                  {ABOUT_HIGHLIGHTS.map((h) => (
                    <div key={h.label} className="jm2-about__meta-item">
                      <div className="jm2-about__meta-label">{h.label}</div>
                      <div className="jm2-about__meta-value">{h.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ── */}
        <section className="jm2-section jm2-section--cream">
          <div className="jm2-container">
            <p className="jm2-label">Our Portfolio</p>
            <h2 className="jm2-heading">Complete Indian Spice Range</h2>
            <div className="jm2-divider" />
            <p className="jm2-sub">
              12+ varieties sourced from origin, graded to specification, and
              packed for your market.
            </p>
            <div className="jm2-products-grid">
              {PRODUCTS.slice(0, 6).map((product) => (
                <article key={product.slug} className="jm2-product-card">
                  {product.imageUrl && (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="jm2-product-card__img"
                    />
                  )}
                  <div className="jm2-product-card__body">
                    <h3 className="jm2-product-card__name">{product.name}</h3>
                    <p className="jm2-product-card__desc">
                      {product.shortDescription}
                    </p>
                    <Link
                      to={`/${product.slug}`}
                      className="jm2-product-card__link"
                    >
                      View Specifications{" "}
                      <ChevronRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
              <Link
                to="/products"
                className="jm2-btn-primary"
                style={{ display: "inline-flex" }}
              >
                View All Products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="jm2-section jm2-section--white">
          <div className="jm2-container">
            <p className="jm2-label">How It Works</p>
            <h2 className="jm2-heading">
              From Farm to Your Shipment — Our Process
            </h2>
            <div className="jm2-divider" />
            <p className="jm2-sub">
              Every order follows a structured 6-step journey ensuring quality,
              compliance, and on-time delivery.
            </p>
            <div className="jm2-process">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="jm2-process-step">
                  <div className="jm2-process-step__bar" />
                  <div className="jm2-process-step__num">{step.step}</div>
                  <span className="jm2-process-step__emoji">{step.icon}</span>
                  <h3 className="jm2-process-step__title">{step.title}</h3>
                  <p className="jm2-process-step__desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="jm2-section jm2-section--beige">
          <div className="jm2-container">
            <p className="jm2-label">Our Services</p>
            <h2 className="jm2-heading">
              Everything You Need Beyond the Spice
            </h2>
            <div className="jm2-divider" />
            <p className="jm2-sub">
              We don't just supply spices — we build your supply chain. Custom
              packing, private labelling, export documentation and more.
            </p>
            <div className="jm2-services">
              {SERVICES.map((svc) => (
                <div key={svc.title} className="jm2-service-card">
                  <div className="jm2-service-card__icon">{svc.icon}</div>
                  <h3 className="jm2-service-card__title">{svc.title}</h3>
                  <p className="jm2-service-card__desc">{svc.description}</p>
                  <ul className="jm2-service-card__list">
                    {svc.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPORT COUNTRIES ── */}
        <section
          className="jm2-section"
          style={{
            background:
              "linear-gradient(135deg, #1A0E06 0%, #2C1A0E 50%, #3D1F0A 100%)",
          }}
        >
          <div className="jm2-container">
            <div className="jm2-export-hero">
              <p className="jm2-label">Global Reach</p>
              <div className="jm2-export-hero__num">30+</div>
              <h2
                className="jm2-heading jm2-heading--white"
                style={{ marginTop: "0.5rem" }}
              >
                Countries We Export To
              </h2>
              <div
                className="jm2-divider"
                style={{ margin: "0.75rem auto 1rem" }}
              />
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.95rem",
                  maxWidth: 500,
                  margin: "0 auto",
                }}
              >
                Trusted by importers, distributors, and food processors across 6
                global regions.
              </p>
            </div>
            <div className="jm2-regions">
              {EXPORT_REGIONS.map((r) => (
                <div key={r.region} className="jm2-region-card">
                  <div className="jm2-region-card__name">
                    <div
                      className="jm2-region-card__dot"
                      style={{ background: r.color }}
                    />
                    {r.region}
                  </div>
                  <div className="jm2-region-card__countries">
                    {r.countries.map((c) => (
                      <span key={c} className="jm2-country-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="jm2-section jm2-section--cream">
          <div className="jm2-container">
            <p className="jm2-label">Client Reviews</p>
            <h2 className="jm2-heading">What Our Buyers Say</h2>
            <div className="jm2-divider" />
            <p className="jm2-sub">
              Trusted by importers and distributors across the globe for over
              two decades.
            </p>
            <div className="jm2-testimonials">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="jm2-testimonial">
                  <div className="jm2-stars">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="jm2-star"
                        fill="#E8860E"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="jm2-testimonial__text">{t.text}</p>
                  <div className="jm2-testimonial__author">{t.name}</div>
                  <div className="jm2-testimonial__company">{t.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="jm2-section jm2-section--white">
          <div className="jm2-container">
            <p className="jm2-label">Compliance</p>
            <h2 className="jm2-heading">
              Certifications &amp; Export Documentation
            </h2>
            <div className="jm2-divider" />
            <p className="jm2-sub">
              Every shipment is backed by genuine certifications and a complete
              export document set.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    color: "var(--spice-dark)",
                    marginBottom: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Our Certifications
                </h3>
                <div className="jm2-certs">
                  {[
                    "HACCP Certified",
                    "ISO 22000",
                    "APEDA Registered",
                    "Spice Board RCMC",
                    "FSSAI Licensed",
                    "IEC Registered",
                  ].map((c) => (
                    <div key={c} className="jm2-cert">
                      <div
                        style={{ fontSize: "1.5rem", marginBottom: "0.35rem" }}
                      >
                        ✓
                      </div>
                      <div className="jm2-cert__name">{c}</div>
                      <div className="jm2-cert__sub">Verified</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: "var(--spice-beige)",
                  borderRadius: "1rem",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    color: "var(--spice-dark)",
                    marginBottom: "1.25rem",
                    fontWeight: 600,
                  }}
                >
                  Standard Export Document Set
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {DOCUMENTATION_PACKAGE.map((doc) => (
                    <li
                      key={doc}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.6rem",
                        fontSize: "0.875rem",
                        color: "#4A2C15",
                      }}
                    >
                      <CheckCircle2
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "#C84B11",
                          marginTop: "0.1rem",
                          flexShrink: 0,
                        }}
                      />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="jm2-cta">
          <div className="jm2-cta__inner">
            <p className="jm2-label" style={{ color: "#E8860E" }}>
              Get Started
            </p>
            <h2 className="jm2-cta__heading">
              Ready to Source Premium Indian Spices?
            </h2>
            <p className="jm2-cta__sub">
              Send us your requirements — product, quantity, packing preference,
              and destination. We'll get back with a competitive quote and
              sample availability.
            </p>
            <div className="jm2-cta__actions">
              <Link
                to="/contact?intent=quote#inquiry-form"
                className="jm2-btn-primary"
              >
                Send Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="/JMMasalaProducts.pdf" className="jm2-btn-outline">
                Download Catalogue
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
