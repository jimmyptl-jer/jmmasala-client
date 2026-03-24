import Seo from "@/Components/Seo";

// ─── Inline styles to avoid Tailwind purge issues with dynamic classes ──────
const styles = `
  .sn-root { font-family: var(--font-body); color: var(--brand-charcoal); background: var(--brand-cream); }

  /* Hero */
  .sn-hero {
    background: linear-gradient(135deg, #10170f 0%, var(--brand-deep-green) 52%, var(--wood-dark) 100%);
    position: relative; overflow: hidden; padding: 96px 24px 80px;
  }
  .sn-hero::before {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(circle at 20% 50%, rgba(200,150,12,0.12) 0%, transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(200,150,12,0.08) 0%, transparent 50%);
  }
  .sn-hero-grain {
    position: absolute; inset: 0; opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  }
  .sn-hero-label {
    font-family: var(--font-body); font-size: 11px; font-weight: 700;
    letter-spacing: 4px; text-transform: uppercase; color: var(--brand-gold);
    margin-bottom: 20px; display: flex; align-items: center; gap: 12px;
  }
  .sn-hero-label::before, .sn-hero-label::after {
    content: ''; flex: 1; max-width: 48px; height: 1px; background: var(--brand-gold); opacity: 0.6;
  }
  .sn-hero h1 {
    font-family: var(--font-display); font-size: clamp(36px, 5vw, 60px);
    font-weight: 700; color: #fff; line-height: 1.15; margin-bottom: 20px; max-width: 780px;
  }
  .sn-hero h1 em { font-style: italic; color: var(--brand-gold); }
  .sn-hero p {
    font-family: var(--font-body); font-size: 17px; color: rgba(255,255,255,0.78);
    max-width: 620px; line-height: 1.75; margin-bottom: 36px;
  }
  .sn-hero-stats {
    display: flex; flex-wrap: wrap; gap: 32px;
  }
  .sn-stat { border-left: 2px solid var(--brand-gold); padding-left: 16px; }
  .sn-stat-num { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: #fff; }
  .sn-stat-label { font-size: 12px; color: rgba(255,255,255,0.6); letter-spacing: 1px; text-transform: uppercase; margin-top: 2px; }

  /* Section wrapper */
  .sn-section { max-width: 1200px; margin: 0 auto; padding: 80px 24px; }
  .sn-section-sm { max-width: 1200px; margin: 0 auto; padding: 48px 24px; }
  .sn-section-label {
    font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
  }
  .sn-section-label::before { content: ''; width: 32px; height: 1px; background: var(--brand-gold); }
  .sn-section-heading {
    font-family: var(--font-display); font-size: clamp(28px, 4vw, 42px);
    font-weight: 700; color: var(--brand-charcoal); line-height: 1.2; margin-bottom: 16px;
  }
  .sn-section-sub { font-size: 16px; color: var(--brand-forest); line-height: 1.75; max-width: 640px; }
  .sn-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent); margin: 0; }

  /* India Map SVG section */
  .sn-map-section { background: var(--brand-deep-green); padding: 64px 24px; }
  .sn-map-inner { max-width: 1200px; margin: 0 auto; }
  .sn-map-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  @media (max-width: 768px) { .sn-map-grid { grid-template-columns: 1fr; } }
  .sn-map-title { font-family: var(--font-display); font-size: 36px; color: #fff; margin-bottom: 12px; }
  .sn-map-sub { color: rgba(255,255,255,0.65); line-height: 1.75; margin-bottom: 32px; }
  .sn-zone { display: flex; gap: 16px; margin-bottom: 24px; align-items: flex-start; }
  .sn-zone-dot { width: 14px; height: 14px; border-radius: 50%; margin-top: 4px; flex-shrink: 0; }
  .sn-zone-dot-north { background: var(--brand-gold); box-shadow: 0 0 12px rgba(201,168,76,0.6); }
  .sn-zone-dot-south { background: var(--brand-sage); box-shadow: 0 0 12px rgba(74,103,65,0.6); }
  .sn-zone-name { font-weight: 700; color: #fff; margin-bottom: 4px; }
  .sn-zone-desc { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; }
  .sn-zone-products { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 8px; }
  .sn-zone-tag {
    font-size: 11px; padding: 3px 10px; border-radius: 20px; font-weight: 600;
    letter-spacing: 0.5px;
  }
  .sn-zone-tag-north { background: rgba(201,168,76,0.15); color: var(--brand-gold); border: 1px solid rgba(201,168,76,0.3); }
  .sn-zone-tag-south { background: rgba(74,103,65,0.16); color: var(--brand-gold-light); border: 1px solid rgba(74,103,65,0.32); }

  /* India SVG map */
  .sn-india-map { position: relative; }
  .sn-india-map svg { width: 100%; max-width: 400px; margin: 0 auto; display: block; }
  .pulse-north { animation: pulse-gold 2s infinite; }
  .pulse-south { animation: pulse-green 2.2s infinite; }
  @keyframes pulse-gold {
    0%, 100% { r: 8; opacity: 1; }
    50% { r: 14; opacity: 0.4; }
  }
  @keyframes pulse-green {
    0%, 100% { r: 8; opacity: 1; }
    50% { r: 14; opacity: 0.4; }
  }

  /* Sourcing journey */
  .sn-journey-bg { background: var(--brand-warm-white); }
  .sn-journey-steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2px; margin-top: 48px; }
  .sn-step {
    background: var(--brand-cream); padding: 40px 32px; position: relative;
    transition: background 0.3s; cursor: default;
  }
  .sn-step:hover { background: var(--brand-gold-pale); }
  .sn-step-num {
    font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 700;
    color: rgba(200,150,12,0.15); line-height: 1; margin-bottom: 8px;
    position: absolute; top: 24px; right: 24px;
  }
  .sn-step-icon { font-size: 32px; margin-bottom: 16px; }
  .sn-step-title { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--brand-charcoal); margin-bottom: 12px; }
  .sn-step-desc { font-size: 14px; color: var(--brand-forest); line-height: 1.7; }
  .sn-step-detail { font-size: 12px; color: var(--wood-mid); margin-top: 12px; font-style: italic; }

  /* Processing */
  .sn-processing-bg { background: var(--brand-cream); }
  .sn-process-timeline { margin-top: 56px; position: relative; }
  .sn-process-timeline::before {
    content: ''; position: absolute; left: 28px; top: 0; bottom: 0;
    width: 2px; background: linear-gradient(to bottom, var(--brand-gold), rgba(201,168,76,0.1));
  }
  @media (max-width: 640px) { .sn-process-timeline::before { display: none; } }
  .sn-process-item { display: flex; gap: 32px; margin-bottom: 48px; align-items: flex-start; }
  .sn-process-icon-wrap {
    width: 56px; height: 56px; border-radius: 50%; flex-shrink: 0;
    background: var(--brand-deep-green); display: flex; align-items: center; justify-content: center;
    font-size: 22px; position: relative; z-index: 1;
    box-shadow: 0 0 0 4px var(--brand-cream), 0 0 0 6px rgba(201,168,76,0.3);
  }
  .sn-process-body { flex: 1; padding-top: 8px; }
  .sn-process-title { font-family: var(--font-display); font-size: 20px; font-weight: 700; color: var(--brand-charcoal); margin-bottom: 8px; }
  .sn-process-desc { font-size: 15px; color: var(--brand-forest); line-height: 1.75; }
  .sn-process-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px; }
  .sn-process-tag {
    font-size: 11px; padding: 4px 12px; border-radius: 20px;
    background: rgba(201,168,76,0.12); color: var(--wood-dark);
    border: 1px solid rgba(201,168,76,0.22); font-weight: 600; letter-spacing: 0.5px;
  }

  /* Customisation */
  .sn-custom-bg { background: var(--brand-deep-green); padding: 80px 24px; }
  .sn-custom-inner { max-width: 1200px; margin: 0 auto; }
  .sn-custom-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 48px; }
  .sn-custom-card {
    border: 1px solid rgba(200,150,12,0.2); border-radius: 16px;
    padding: 32px; background: rgba(255,255,255,0.04);
    transition: border-color 0.3s, background 0.3s;
  }
  .sn-custom-card:hover { border-color: rgba(200,150,12,0.5); background: rgba(200,150,12,0.06); }
  .sn-custom-card-icon { font-size: 36px; margin-bottom: 16px; }
  .sn-custom-card-title { font-family: var(--font-display); font-size: 20px; color: #fff; margin-bottom: 10px; }
  .sn-custom-card-desc { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; }
  .sn-custom-card-list { margin-top: 16px; list-style: none; padding: 0; }
  .sn-custom-card-list li { font-size: 13px; color: rgba(255,255,255,0.55); padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,0.06); display: flex; gap: 8px; }
  .sn-custom-card-list li::before { content: '→'; color: var(--brand-gold); flex-shrink: 0; }

  /* Quality promise */
  .sn-promise-bg { background: #fff; }
  .sn-promise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; margin-top: 48px; }
  .sn-promise-card {
    padding: 32px 24px; border-radius: 12px; text-align: center;
    border: 1.5px solid #EDE0C4; transition: border-color 0.3s, box-shadow 0.3s;
  }
  .sn-promise-card:hover { border-color: #C8960C; box-shadow: 0 8px 32px rgba(200,150,12,0.12); }
  .sn-promise-emoji { font-size: 40px; margin-bottom: 16px; }
  .sn-promise-title { font-family: 'Playfair Display', serif; font-size: 18px; color: #2C1A0E; margin-bottom: 8px; }
  .sn-promise-desc { font-size: 13px; color: #5C3D1E; line-height: 1.65; }

  /* CTA */
  .sn-cta-bg {
    background: linear-gradient(135deg, #5C2E0E, #8B3A0F);
    padding: 80px 24px; text-align: center;
  }
  .sn-cta-title { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); color: #fff; margin-bottom: 16px; }
  .sn-cta-sub { color: rgba(255,255,255,0.72); font-size: 17px; margin-bottom: 36px; max-width: 520px; margin-left: auto; margin-right: auto; }
  .sn-cta-btn {
    display: inline-block; padding: 16px 40px; background: #C8960C;
    color: #2C1A0E; font-family: 'Lato', sans-serif; font-weight: 700;
    font-size: 15px; letter-spacing: 0.5px; border-radius: 4px;
    text-decoration: none; transition: background 0.25s, transform 0.2s;
    margin: 0 8px 12px;
  }
  .sn-cta-btn:hover { background: #D4A420; transform: translateY(-2px); }
  .sn-cta-btn-outline {
    display: inline-block; padding: 16px 40px;
    border: 2px solid rgba(255,255,255,0.5); color: #fff;
    font-family: 'Lato', sans-serif; font-weight: 700; font-size: 15px;
    border-radius: 4px; text-decoration: none; transition: border-color 0.25s;
    margin: 0 8px 12px;
  }
  .sn-cta-btn-outline:hover { border-color: #fff; }

  /* Responsive tweaks */
  @media (max-width: 640px) {
    .sn-process-item { flex-direction: column; gap: 12px; }
    .sn-process-icon-wrap { width: 44px; height: 44px; font-size: 18px; }
    .sn-hero-stats { gap: 20px; }
  }
`;

// ─── India SVG Map with pulsing location pins ──────────────────────────────
const IndiaMap = () => (
  <svg
    viewBox="0 0 340 440"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="India map showing sourcing locations"
  >
    {/* Simplified India outline path */}
    <path
      d="M170 20 L200 30 L230 45 L255 60 L270 80 L280 100 L290 125 L295 150
         L300 170 L298 190 L290 210 L280 228 L268 242 L255 252 L242 265
         L232 278 L225 292 L220 308 L218 322 L220 336 L224 348 L226 360
         L222 370 L215 378 L205 385 L195 390 L185 392 L178 388 L172 382
         L168 375 L165 365 L163 352 L162 340 L160 328 L155 316 L148 305
         L140 295 L132 285 L122 275 L112 265 L102 255 L92 244 L84 232
         L78 218 L74 203 L72 188 L70 172 L68 155 L70 138 L75 122 L82 108
         L92 96 L104 85 L118 76 L132 66 L146 55 L158 42 L165 30 Z"
      fill="#3D2010"
      stroke="#C8960C"
      strokeWidth="1.5"
      strokeOpacity="0.4"
    />
    {/* State dividing lines — very subtle */}
    <line
      x1="100"
      y1="160"
      x2="280"
      y2="160"
      stroke="rgba(200,150,12,0.12)"
      strokeWidth="1"
    />
    <line
      x1="100"
      y1="230"
      x2="270"
      y2="230"
      stroke="rgba(200,150,12,0.12)"
      strokeWidth="1"
    />

    {/* Gujarat region highlight */}
    <ellipse cx="108" cy="148" rx="32" ry="22" fill="rgba(200,150,12,0.12)" />

    {/* South India region highlight */}
    <ellipse cx="185" cy="330" rx="35" ry="28" fill="rgba(76,175,80,0.1)" />

    {/* ── Unjha, Gujarat pin ── */}
    <circle cx="108" cy="148" r="20" fill="rgba(200,150,12,0.15)" />
    <circle
      className="pulse-north"
      cx="108"
      cy="148"
      r="8"
      fill="rgba(200,150,12,0.3)"
    />
    <circle cx="108" cy="148" r="7" fill="#C8960C" />
    <circle cx="108" cy="148" r="3" fill="#fff" />

    {/* Gujarat label */}
    <text
      x="126"
      y="140"
      fill="#C8960C"
      fontSize="9"
      fontWeight="700"
      fontFamily="Lato, sans-serif"
    >
      UNJHA
    </text>
    <text
      x="126"
      y="152"
      fill="rgba(200,150,12,0.7)"
      fontSize="8"
      fontFamily="Lato, sans-serif"
    >
      Gujarat
    </text>
    <line
      x1="115"
      y1="148"
      x2="124"
      y2="148"
      stroke="#C8960C"
      strokeWidth="1"
      strokeOpacity="0.6"
    />

    {/* ── South India pin (Andhra/Kerala/Tamil Nadu) ── */}
    <circle cx="190" cy="320" r="20" fill="rgba(76,175,80,0.12)" />
    <circle
      className="pulse-south"
      cx="190"
      cy="320"
      r="8"
      fill="rgba(76,175,80,0.3)"
    />
    <circle cx="190" cy="320" r="7" fill="#4CAF50" />
    <circle cx="190" cy="320" r="3" fill="#fff" />

    {/* South label */}
    <text
      x="140"
      y="314"
      fill="#66BB6A"
      fontSize="9"
      fontWeight="700"
      fontFamily="Lato, sans-serif"
    >
      SOUTH INDIA
    </text>
    <text
      x="145"
      y="326"
      fill="rgba(76,175,80,0.7)"
      fontSize="8"
      fontFamily="Lato, sans-serif"
    >
      AP / Kerala / TN
    </text>
    <line
      x1="182"
      y1="320"
      x2="170"
      y2="320"
      stroke="#4CAF50"
      strokeWidth="1"
      strokeOpacity="0.6"
    />

    {/* Legend */}
    <circle cx="76" cy="408" r="5" fill="#C8960C" />
    <text
      x="86"
      y="413"
      fill="rgba(255,255,255,0.6)"
      fontSize="9"
      fontFamily="Lato, sans-serif"
    >
      North Indian Spices
    </text>
    <circle cx="76" cy="424" r="5" fill="#4CAF50" />
    <text
      x="86"
      y="429"
      fill="rgba(255,255,255,0.6)"
      fontSize="9"
      fontFamily="Lato, sans-serif"
    >
      South Indian Spices
    </text>
  </svg>
);

// ─── Data ──────────────────────────────────────────────────────────────────

const sourcingSteps = [
  {
    num: "01",
    icon: "🌾",
    title: "Direct Farmer & Mandi Relationships",
    desc: "Our team physically travels to Unjha APMC Market Yard — Asia's largest spice mandi — multiple times per season. We walk the market, inspect lots visually, negotiate directly with farmers and commission agents, and select only what meets our quality threshold.",
    detail:
      "No middlemen. No blind purchasing. Every lot inspected before buying.",
  },
  {
    num: "02",
    icon: "🔍",
    title: "Inward Lot Inspection",
    desc: "When raw material arrives at our Unjha facility, it goes through a mandatory inward inspection — moisture probing, visual purity check, color and aroma verification, and foreign matter estimation before any lot is accepted into our processing line.",
    detail:
      "Lots that don't meet inward spec are returned to the supplier, not processed.",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Sortex & Machine Cleaning",
    desc: "Every accepted lot runs through our Sortex color sorter — a precision optical machine that removes discolored, shrivelled, damaged or foreign-material grains at 1–2 tons per hour. Multiple passes are done for premium export grades.",
    detail: "Rejection rate <4%. What passes is truly export-grade.",
  },
  {
    num: "04",
    icon: "🧪",
    title: "NABL Lab Testing",
    desc: "Processed lots are sampled and dispatched to NABL-accredited labs for comprehensive testing — moisture, purity, foreign matter, oil content, aflatoxin, pesticide residue, and microbiological parameters including Salmonella.",
    detail:
      "COA (Certificate of Analysis) available for every export shipment.",
  },
  {
    num: "05",
    icon: "📦",
    title: "Packing to Buyer Specification",
    desc: "Once quality is confirmed, we pack to your exact specification — 25kg or 50kg PP bags with inner liner for bulk export, vacuum-sealed options for premium products like cardamom, and custom retail packs for domestic buyers.",
    detail: "Printed bags available. Your label, our quality inside.",
  },
  {
    num: "06",
    icon: "🚢",
    title: "Fumigation & Export Documentation",
    desc: "Before shipment, lots are fumigated by licensed CITES-approved agencies. We coordinate phytosanitary certificates, certificates of origin, APEDA certificates, and complete documentation through our Customs House Agent at Mundra and Kandla ports.",
    detail: "4 hours from Mundra. Complete documentation package. Zero delays.",
  },
];

const processingSteps = [
  {
    icon: "🌡️",
    title: "Moisture Probing",
    desc: "Every inward lot is moisture-probed at multiple points using calibrated grain moisture meters. Cumin must come in below 12% to be accepted. Psyllium husk is accepted only below 13%. Lots above threshold are rejected or dried before processing.",
    tags: ["Moisture Meter", "Multi-Point Sampling", "Lot-Wise Records"],
  },
  {
    icon: "🔬",
    title: "Visual & Aroma Inspection",
    desc: "An experienced supervisor inspects every lot visually for uniformity, color consistency, pest damage, and aroma strength. For South Indian spices like turmeric, curcumin-rich lots are identified by deep orange-yellow cross-section color. Red chilli lots are assessed for ASTA color potential visually before lab confirmation.",
    tags: [
      "Color Grading",
      "Aroma Check",
      "Pest Inspection",
      "Experienced Team",
    ],
  },
  {
    icon: "⚡",
    title: "Sortex Color Sorting",
    desc: "Our Sortex optical color sorter uses high-resolution cameras and compressed air jets to reject any grain that deviates from set color parameters. Black seeds in cumin, grey seeds in coriander, lightweight shrivelled grains in fennel — all ejected automatically. We run multiple passes for premium-grade lots.",
    tags: [
      "Optical Sensors",
      "Multiple Passes",
      "99%+ Output Purity",
      "Real-Time Monitoring",
    ],
  },
  {
    icon: "🔩",
    title: "Gravity Separator & Sieving",
    desc: "After color sorting, lots pass through gravity separators that remove lightweight or hollow grains by density difference. Sieving removes oversized or undersized grains to achieve the uniform grain size required by European and Singapore market buyers.",
    tags: ["Density Grading", "Mesh Sieving", "Size Uniformity"],
  },
  {
    icon: "🧬",
    title: "NABL-Certified Lab Testing",
    desc: "Representative samples from each processed lot are sent to our partnered NABL-accredited lab. Full panel includes: moisture, purity, foreign matter, oil content, aflatoxin B1 and total, heavy metals (lead, cadmium, arsenic), pesticide residue multi-screen, and microbiological (Salmonella, E.coli, TPC). Turnaround is 24–48 hours.",
    tags: [
      "Aflatoxin",
      "Pesticide Screen",
      "Heavy Metals",
      "Microbiological",
      "NABL Accredited",
    ],
  },
  {
    icon: "🪲",
    title: "Fumigation",
    desc: "All export lots are fumigated by our licensed CITES-approved fumigation partner using Phosphine (Aluminium Phosphide). Exposure period is maintained as per ISPM-15 and destination country requirements. Fumigation certificates are issued and included in every export documentation package.",
    tags: [
      "CITES Approved Agency",
      "Phosphine Treatment",
      "ISPM-15 Compliant",
      "Certificate Issued",
    ],
  },
];

const customizations = [
  {
    icon: "📐",
    title: "Purity Grade Selection",
    desc: "Choose the exact purity level that matches your market's import standards and your buyer's end-use requirements.",
    items: [
      "98% — Commercial grade for Gulf and general trade",
      "99% — Standard export grade for Asia and Middle East",
      "99.5% — Premium grade for Europe and USA food service",
      "Double-cleaned premium for specialty buyers",
    ],
  },
  {
    icon: "💧",
    title: "Moisture Tolerance",
    desc: "We process and hold lots to different moisture levels depending on your destination's import regulations and your storage conditions.",
    items: [
      "Max 8% — European and USA compliance grade",
      "Max 9–10% — Gulf and Bangladesh commercial grade",
      "Max 10–12% — South Indian spices standard export",
      "Custom moisture band with lab-verified COA",
    ],
  },
  {
    icon: "📦",
    title: "Packaging Options",
    desc: "From bulk export bags to retail-ready packs — we configure packaging to your exact channel requirements.",
    items: [
      "25 kg PP bags with inner HDPE liner",
      "50 kg PP bags with inner HDPE liner",
      "Vacuum-sealed pouches for cardamom and pepper",
      "Retail packs: 50g, 100g, 200g, 500g, 1kg",
      "Private label / white label packing available",
    ],
  },
  {
    icon: "🏷️",
    title: "Labelling and Branding",
    desc: "We pack under your brand with full compliance labelling including country of origin, net weight, FSSAI number, lot number and best-before date.",
    items: [
      "Your artwork, our production",
      "FSSAI-compliant label format",
      "Export-compliant country of origin marking",
      "Lot traceability codes on every pack",
      "Multi-language labels on request",
    ],
  },
  {
    icon: "🧪",
    title: "Special Treatment Options",
    desc: "Beyond standard fumigation, we can arrange additional treatments to meet European and US compliance requirements.",
    items: [
      "ETO (Ethylene Oxide) treatment on request",
      "Steam sterilisation for select products",
      "Non-fumigated lots for buyers with specific restrictions",
      "Organic-certified supply chain sourcing (on discussion)",
      "Heavy metal reduced lots available for pharma buyers",
    ],
  },
  {
    icon: "📋",
    title: "Documentation Package",
    desc: "Every export shipment leaves with a complete documentation set pre-cleared through our CHA at Mundra/Kandla port.",
    items: [
      "Phytosanitary certificate (Plant Quarantine)",
      "Fumigation certificate (licensed agency)",
      "NABL lab COA for the specific lot",
      "APEDA certificate",
      "Certificate of Origin (Chamber of Commerce)",
      "Commercial invoice + packing list + Bill of Lading",
    ],
  },
];

const promises = [
  {
    emoji: "🤝",
    title: "Direct Relationships",
    desc: "We know our farmers and mandi agents by name. No anonymous procurement.",
  },
  {
    emoji: "🔎",
    title: "Lot Traceability",
    desc: "Every shipment traceable back to the source lot, inward date, and inspection record.",
  },
  {
    emoji: "⏱️",
    title: "Fast Turnaround",
    desc: "7–10 days from LC receipt to shipment from Mundra or Kandla port.",
  },
  {
    emoji: "📊",
    title: "Consistent Quality",
    desc: "Same HACCP protocol, same lab, same QC team — every lot, every season.",
  },
  {
    emoji: "🌐",
    title: "Market-Specific Grades",
    desc: "Europe, USA, Gulf, Singapore, Bangladesh — we know what each market needs.",
  },
  {
    emoji: "💬",
    title: "Responsive Communication",
    desc: "Direct WhatsApp with our export team. No call centers, no delays.",
  },
];

// ─── Page Component ────────────────────────────────────────────────────────

const SourcingNetworkPage = () => {
  return (
    <>
      <Seo
        title="Our Sourcing Network | Farm to Port | JM Masala"
        description="JM Masala sources directly from Unjha, Gujarat and South India farming regions. HACCP-aligned processing, NABL lab testing, fumigation and complete export documentation. Customised to your exact grade, packaging and documentation requirement."
        path="/sourcing-network"
      />

      <style>{styles}</style>

      <div className="sn-root">
        {/* ── HERO ── */}
        <div className="sn-hero">
          <div className="sn-hero-grain" aria-hidden="true" />
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="sn-hero-label">Sourcing &amp; Processing</div>
            <h1>
              From the Farm to Your Port —<br />
              <em>Every Step Under Our Control</em>
            </h1>
            <p>
              JM Masala doesn't buy spices from a catalogue. We travel to Unjha
              APMC Market Yard and South Indian growing regions, inspect every
              lot in person, and process through our HACCP-aligned facility
              before a single gram reaches your container.
            </p>
            <div className="sn-hero-stats">
              <div className="sn-stat">
                <div className="sn-stat-num">12+</div>
                <div className="sn-stat-label">Spice Products</div>
              </div>
              <div className="sn-stat">
                <div className="sn-stat-num">2</div>
                <div className="sn-stat-label">Sourcing Regions</div>
              </div>
              <div className="sn-stat">
                <div className="sn-stat-num">6</div>
                <div className="sn-stat-label">Processing Steps</div>
              </div>
              <div className="sn-stat">
                <div className="sn-stat-num">4hrs</div>
                <div className="sn-stat-label">From Port</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── INDIA MAP ── */}
        <div className="sn-map-section">
          <div className="sn-map-inner">
            <div className="sn-map-grid">
              <div>
                <div className="sn-section-label" style={{ color: "#C8960C" }}>
                  Dual Sourcing Network
                </div>
                <h2 className="sn-map-title">
                  Two Sourcing Hubs.
                  <br />
                  One Quality Standard.
                </h2>
                <p className="sn-map-sub">
                  Our North Indian spices come directly from Unjha, Gujarat —
                  Asia's largest spice mandi. Our South Indian range comes
                  through our formal East India sourcing partnership covering
                  Andhra Pradesh, Telangana, Kerala and Tamil Nadu. Both streams
                  converge at our Unjha facility for unified HACCP processing.
                </p>

                <div className="sn-zone">
                  <div className="sn-zone-dot sn-zone-dot-north" />
                  <div>
                    <div className="sn-zone-name">
                      Unjha, Gujarat — Primary Hub
                    </div>
                    <div className="sn-zone-desc">
                      Asia's largest spice mandi. Direct farmer and mandi agent
                      relationships. Our home base since the business began.
                    </div>
                    <div className="sn-zone-products">
                      {[
                        "Cumin",
                        "Coriander",
                        "Fennel",
                        "Fenugreek",
                        "Psyllium",
                        "Sesame",
                      ].map((p) => (
                        <span key={p} className="sn-zone-tag sn-zone-tag-north">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sn-zone">
                  <div className="sn-zone-dot sn-zone-dot-south" />
                  <div>
                    <div className="sn-zone-name">
                      South &amp; East India — Partner Sourcing
                    </div>
                    <div className="sn-zone-desc">
                      Formal sourcing partnership covering Andhra, Telangana,
                      Kerala and Tamil Nadu farming and wholesale channels.
                    </div>
                    <div className="sn-zone-products">
                      {[
                        "Red Chilli",
                        "Turmeric",
                        "Black Pepper",
                        "Cardamom",
                        "Curry Leaf",
                      ].map((p) => (
                        <span key={p} className="sn-zone-tag sn-zone-tag-south">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="sn-india-map">
                <IndiaMap />
              </div>
            </div>
          </div>
        </div>

        {/* ── SOURCING JOURNEY ── */}
        <div className="sn-journey-bg">
          <div className="sn-section">
            <div className="sn-section-label">How We Source</div>
            <h2 className="sn-section-heading">Our Sourcing Journey</h2>
            <p className="sn-section-sub">
              We don't sit in an office and place orders online. Every
              significant purchase involves our team on the ground — at the
              mandi, at the farm, or at the collection point — before a rupee is
              committed.
            </p>
            <div className="sn-journey-steps">
              {sourcingSteps.map((s) => (
                <div key={s.num} className="sn-step">
                  <div className="sn-step-num">{s.num}</div>
                  <div className="sn-step-icon">{s.icon}</div>
                  <div className="sn-step-title">{s.title}</div>
                  <div className="sn-step-desc">{s.desc}</div>
                  <div className="sn-step-detail">"{s.detail}"</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sn-divider" />

        {/* ── PROCESSING STEPS ── */}
        <div className="sn-processing-bg">
          <div className="sn-section">
            <div className="sn-section-label">Processing Protocol</div>
            <h2 className="sn-section-heading">
              Inside Our HACCP‑Aligned Processing
            </h2>
            <p className="sn-section-sub">
              Every lot — whether cumin from Unjha or black pepper from Kerala —
              goes through the same six-step quality protocol at our Unjha
              facility before it is cleared for packing.
            </p>
            <div className="sn-process-timeline">
              {processingSteps.map((step, i) => (
                <div key={i} className="sn-process-item">
                  <div className="sn-process-icon-wrap" aria-hidden="true">
                    {step.icon}
                  </div>
                  <div className="sn-process-body">
                    <div className="sn-process-title">{step.title}</div>
                    <div className="sn-process-desc">{step.desc}</div>
                    <div className="sn-process-tags">
                      {step.tags.map((t) => (
                        <span key={t} className="sn-process-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CUSTOMISATION ── */}
        <div className="sn-custom-bg">
          <div className="sn-custom-inner">
            <div className="sn-section-label" style={{ color: "#C8960C" }}>
              Buyer-Specific Supply
            </div>
            <h2 className="sn-map-title">
              We Supply to{" "}
              <em style={{ color: "#C8960C", fontStyle: "italic" }}>
                Your Exact Specification
              </em>
            </h2>
            <p className="sn-map-sub" style={{ maxWidth: 640 }}>
              No two buyers have identical requirements. European food
              manufacturers, Bangladesh bulk importers, Gulf retail traders, and
              US nutraceutical companies all need different grades, tolerances,
              packaging formats and documentation. We configure every order to
              match.
            </p>
            <div className="sn-custom-grid">
              {customizations.map((c) => (
                <div key={c.title} className="sn-custom-card">
                  <div className="sn-custom-card-icon">{c.icon}</div>
                  <div className="sn-custom-card-title">{c.title}</div>
                  <div className="sn-custom-card-desc">{c.desc}</div>
                  <ul className="sn-custom-card-list">
                    {c.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── QUALITY PROMISES ── */}
        <div className="sn-promise-bg">
          <div className="sn-section">
            <div className="sn-section-label">Our Commitments</div>
            <h2 className="sn-section-heading">
              What Every JM Masala Buyer Gets
            </h2>
            <p className="sn-section-sub">
              Beyond specifications and certifications — these are the
              operational standards we hold ourselves to on every order, every
              season.
            </p>
            <div className="sn-promise-grid">
              {promises.map((p) => (
                <div key={p.title} className="sn-promise-card">
                  <div className="sn-promise-emoji">{p.emoji}</div>
                  <div className="sn-promise-title">{p.title}</div>
                  <div className="sn-promise-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="sn-cta-bg">
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <h2 className="sn-cta-title">Ready to Discuss Your Requirement?</h2>
            <p className="sn-cta-sub">
              Share your product, grade, quantity and destination — we will
              respond with a specification sheet and CIF pricing within 24
              hours.
            </p>
            <div>
              <a href="/contact" className="sn-cta-btn">
                Send Your Requirement
              </a>
              <a
                href={`https://wa.me/919106766041?text=Hi%20JM%20Masala%2C%20I%20am%20interested%20in%20your%20sourcing%20capabilities.%20Can%20we%20discuss%20my%20requirement%3F`}
                className="sn-cta-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SourcingNetworkPage;
