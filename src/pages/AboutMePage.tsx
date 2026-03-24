import Seo from "@/components/Seo";
import teamImage from "@/assets/team.png";
import jmMasalaLogo from "@/assets/JmMasala.png";

const styles = `
  .ab-root { font-family: var(--font-body); color: var(--brand-charcoal); background: var(--brand-cream); }

  /* ── HERO ── */
  .ab-hero {
    background: linear-gradient(150deg, #10170f 0%, var(--brand-deep-green) 45%, var(--wood-dark) 100%);
    padding: 96px 24px 88px; position: relative; overflow: hidden;
  }
  .ab-hero::after {
    content: '';
    position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(to right, transparent, var(--brand-gold), transparent);
  }
  .ab-hero-bg-text {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    font-family: var(--font-display); font-size: clamp(80px, 14vw, 180px);
    font-weight: 700; color: rgba(200,150,12,0.04); white-space: nowrap;
    pointer-events: none; user-select: none; letter-spacing: -4px;
  }
  .ab-hero-inner { max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
  .ab-hero-label {
    font-size: 11px; font-weight: 700; letter-spacing: 5px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 24px; display: flex; align-items: center; gap: 14px;
  }
  .ab-hero-label::before { content: ''; width: 40px; height: 1px; background: var(--brand-gold); opacity: 0.7; }
  .ab-hero h1 {
    font-family: var(--font-display); font-size: clamp(38px, 5.5vw, 68px);
    font-weight: 700; color: #fff; line-height: 1.12; margin-bottom: 24px; max-width: 820px;
  }
  .ab-hero h1 em { font-style: italic; color: var(--brand-gold); }
  .ab-hero-quote {
    font-family: var(--font-editorial); font-size: 20px; font-style: italic;
    color: rgba(255,255,255,0.65); max-width: 560px; line-height: 1.7;
    border-left: 2px solid rgba(200,150,12,0.5); padding-left: 20px;
  }
  .ab-hero-scroll {
    display: flex; gap: 32px; margin-top: 48px; flex-wrap: wrap;
  }
  .ab-hero-pill {
    background: rgba(200,150,12,0.12); border: 1px solid rgba(200,150,12,0.3);
    color: rgba(255,255,255,0.8); padding: 8px 18px; border-radius: 24px;
    font-size: 13px; font-weight: 600; letter-spacing: 0.5px;
    display: flex; align-items: center; gap: 8px;
  }
  .ab-hero-pill span { color: var(--brand-gold); }

  /* ── SECTION COMMON ── */
  .ab-wrap { max-width: 1200px; margin: 0 auto; padding: 80px 24px; }
  .ab-wrap-sm { max-width: 1200px; margin: 0 auto; padding: 56px 24px; }
  .ab-label {
    font-size: 11px; font-weight: 700; letter-spacing: 4px; text-transform: uppercase;
    color: var(--brand-gold); margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
  }
  .ab-label::before { content: ''; width: 28px; height: 1px; background: var(--brand-gold); }
  .ab-heading {
    font-family: var(--font-display); font-size: clamp(28px, 4vw, 44px);
    font-weight: 700; color: var(--brand-charcoal); line-height: 1.2; margin-bottom: 14px;
  }
  .ab-sub { font-size: 16px; color: var(--brand-forest); line-height: 1.8; max-width: 640px; }
  .ab-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(201,168,76,0.35), transparent); }

  /* ── HERITAGE SECTION (two-col) ── */
  .ab-heritage-bg { background: var(--brand-warm-white); }
  .ab-heritage-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  @media (max-width: 768px) { .ab-heritage-grid { grid-template-columns: 1fr; } }
  .ab-heritage-img-wrap {
    position: relative; border-radius: 16px; overflow: hidden;
    aspect-ratio: 4/5; background: var(--brand-deep-green);
  }
  .ab-heritage-img-wrap img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; }
  .ab-heritage-img-badge {
    position: absolute; bottom: 24px; left: 24px;
    background: rgba(201,168,76,0.92); padding: 14px 20px; border-radius: 10px;
  }
  .ab-heritage-img-badge-num {
    font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--brand-deep-green);
  }
  .ab-heritage-img-badge-label { font-size: 11px; font-weight: 700; color: var(--brand-deep-green); letter-spacing: 1px; text-transform: uppercase; }
  .ab-heritage-body p {
    font-size: 16px; color: var(--brand-forest); line-height: 1.85; margin-bottom: 16px;
  }
  .ab-heritage-pull {
    font-family: var(--font-editorial); font-size: 22px; font-style: italic;
    color: var(--wood-dark); border-left: 3px solid var(--brand-gold); padding-left: 20px;
    margin: 28px 0; line-height: 1.6;
  }

  /* ── TIMELINE ── */
  .ab-tl-bg { background: #2C1A0E; padding: 80px 0; position: relative; overflow: hidden; }
  .ab-tl-bg::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 10% 50%, rgba(200,150,12,0.07) 0%, transparent 60%);
    pointer-events: none;
  }
  .ab-tl-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .ab-tl-header { text-align: center; margin-bottom: 72px; }
  .ab-tl-header .ab-label { justify-content: center; }
  .ab-tl-header .ab-label::before { display: none; }
  .ab-tl-heading {
    font-family: 'Playfair Display', serif; font-size: clamp(30px, 4vw, 46px);
    font-weight: 700; color: #fff; margin-bottom: 14px;
  }
  .ab-tl-heading em { font-style: italic; color: #C8960C; }
  .ab-tl-sub { font-size: 16px; color: rgba(255,255,255,0.6); max-width: 520px; margin: 0 auto; line-height: 1.75; }

  /* Zig-zag timeline */
  .ab-tl-track { position: relative; }
  .ab-tl-spine {
    position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
    background: linear-gradient(to bottom, rgba(200,150,12,0.8), rgba(200,150,12,0.1));
    transform: translateX(-50%);
  }
  @media (max-width: 768px) {
    .ab-tl-spine { left: 20px; transform: none; }
  }

  .ab-tl-item {
    display: grid; grid-template-columns: 1fr 56px 1fr;
    gap: 0; margin-bottom: 64px; position: relative; align-items: start;
  }
  @media (max-width: 768px) {
    .ab-tl-item { grid-template-columns: 56px 1fr; grid-template-rows: auto; }
    .ab-tl-item-left { display: none !important; }
    .ab-tl-item-spacer { display: none !important; }
  }

  /* Even items: content on right */
  .ab-tl-item-left { padding-right: 36px; text-align: right; }
  .ab-tl-item-right { padding-left: 36px; }
  /* Odd items flip */
  .ab-tl-item.flip .ab-tl-item-left { order: 3; padding-right: 0; padding-left: 36px; text-align: left; }
  .ab-tl-item.flip .ab-tl-item-right { order: 1; padding-left: 0; padding-right: 36px; text-align: right; }
  @media (max-width: 768px) {
    .ab-tl-item.flip .ab-tl-item-right { order: unset; padding: 0 0 0 20px; text-align: left; }
  }

  .ab-tl-dot-col { display: flex; flex-direction: column; align-items: center; z-index: 2; }
  .ab-tl-dot {
    width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0;
    background: #5C2E0E; border: 2px solid #C8960C;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; position: relative;
    box-shadow: 0 0 0 6px rgba(200,150,12,0.12), 0 0 24px rgba(200,150,12,0.2);
  }
  .ab-tl-year {
    margin-top: 8px; font-family: 'Playfair Display', serif;
    font-size: 13px; font-weight: 700; color: #C8960C; letter-spacing: 1px;
  }

  .ab-tl-card {
    background: rgba(255,255,255,0.05); border: 1px solid rgba(200,150,12,0.2);
    border-radius: 14px; padding: 28px; transition: border-color 0.3s, background 0.3s;
  }
  .ab-tl-card:hover { border-color: rgba(200,150,12,0.5); background: rgba(200,150,12,0.06); }
  .ab-tl-card-tag {
    font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
    color: #C8960C; margin-bottom: 10px;
  }
  .ab-tl-card-title {
    font-family: 'Playfair Display', serif; font-size: 20px; color: #fff;
    margin-bottom: 10px; line-height: 1.3;
  }
  .ab-tl-card-desc { font-size: 14px; color: rgba(255,255,255,0.62); line-height: 1.75; }
  .ab-tl-card-highlight {
    margin-top: 14px; display: flex; flex-wrap: wrap; gap: 6px;
  }
  .ab-tl-tag {
    font-size: 11px; padding: 3px 10px; border-radius: 20px;
    background: rgba(200,150,12,0.12); color: #C8960C;
    border: 1px solid rgba(200,150,12,0.25); font-weight: 600;
  }

  /* ── LOCATION ── */
  .ab-loc-bg { background: #F5EDD6; }
  .ab-loc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }
  @media (max-width: 768px) { .ab-loc-grid { grid-template-columns: 1fr; } }
  .ab-loc-map { border-radius: 16px; overflow: hidden; border: 2px solid rgba(200,150,12,0.25); box-shadow: 0 8px 40px rgba(92,46,14,0.12); }
  .ab-loc-map iframe { display: block; width: 100%; height: 380px; border: none; }
  .ab-loc-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
  .ab-loc-stat {
    background: #fff; border: 1px solid #EDE0C4; border-radius: 12px;
    padding: 20px; text-align: center;
    transition: border-color 0.3s;
  }
  .ab-loc-stat:hover { border-color: #C8960C; }
  .ab-loc-stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 700; color: #5C2E0E; }
  .ab-loc-stat-label { font-size: 12px; color: #8B5E3C; margin-top: 4px; letter-spacing: 0.5px; }
  .ab-loc-body p { font-size: 15px; color: #5C3D1E; line-height: 1.8; margin-bottom: 14px; }
  .ab-loc-advantage {
    display: flex; gap: 14px; margin-bottom: 16px; align-items: flex-start;
  }
  .ab-loc-adv-icon {
    width: 40px; height: 40px; border-radius: 10px; background: #5C2E0E;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .ab-loc-adv-title { font-weight: 700; font-size: 14px; color: #2C1A0E; margin-bottom: 3px; }
  .ab-loc-adv-desc { font-size: 13px; color: #5C3D1E; line-height: 1.6; }

  /* ── MISSION ── */
  .ab-mission-bg {
    background: linear-gradient(135deg, #5C2E0E 0%, #8B3A0F 100%);
    padding: 80px 24px; text-align: center; position: relative; overflow: hidden;
  }
  .ab-mission-bg::before {
    content: '"'; position: absolute; top: -20px; left: 50%; transform: translateX(-50%);
    font-family: 'Playfair Display', serif; font-size: 300px; font-weight: 700;
    color: rgba(200,150,12,0.06); line-height: 1; pointer-events: none;
  }
  .ab-mission-inner { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
  .ab-mission-quote {
    font-family: 'Cormorant Garamond', serif; font-size: clamp(24px, 4vw, 40px);
    font-style: italic; color: #fff; line-height: 1.5; margin-bottom: 24px;
  }
  .ab-mission-quote em { color: #C8960C; font-style: normal; }
  .ab-mission-attr { font-size: 13px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.5); }
  .ab-mission-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-top: 36px; }
  .ab-mission-badge {
    padding: 8px 20px; border: 1px solid rgba(200,150,12,0.4);
    border-radius: 24px; font-size: 13px; color: rgba(255,255,255,0.75); font-weight: 600;
  }

  /* ── PROCESS STRIP ── */
  .ab-process-bg { background: #fff; }
  .ab-process-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2px; margin-top: 48px; }
  .ab-process-step { background: #F5EDD6; padding: 36px 28px; position: relative; transition: background 0.3s; }
  .ab-process-step:hover { background: #EDE0C4; }
  .ab-process-step-num {
    font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 700;
    color: rgba(200,150,12,0.12); line-height: 1; position: absolute; top: 16px; right: 16px;
  }
  .ab-process-step-icon { font-size: 28px; margin-bottom: 14px; }
  .ab-process-step-title { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: #2C1A0E; margin-bottom: 8px; }
  .ab-process-step-desc { font-size: 13px; color: #5C3D1E; line-height: 1.65; }

  /* ── TEAM ── */
  .ab-team-bg { background: #F5EDD6; }
  .ab-team-photo-wrap {
    margin-top: 48px;
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid rgba(200,150,12,0.35);
    background: #fff;
    box-shadow: 0 8px 40px rgba(92,46,14,0.12);
  }
  .ab-team-photo {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
  .ab-team-caption {
    margin-top: 16px;
    font-size: 14px;
    color: #5C3D1E;
    line-height: 1.65;
    max-width: 760px;
  }

  /* ── CTA ── */
  .ab-cta-bg { background: #2C1A0E; padding: 72px 24px; text-align: center; }
  .ab-cta-title { font-family: 'Playfair Display', serif; font-size: clamp(26px, 4vw, 40px); color: #fff; margin-bottom: 14px; }
  .ab-cta-sub { color: rgba(255,255,255,0.65); font-size: 16px; margin-bottom: 32px; max-width: 480px; margin-left: auto; margin-right: auto; }
  .ab-cta-btn {
    display: inline-block; padding: 15px 38px; background: #C8960C;
    color: #2C1A0E; font-weight: 700; font-size: 14px; letter-spacing: 0.5px;
    border-radius: 4px; text-decoration: none; transition: background 0.25s, transform 0.2s;
    margin: 0 8px 10px;
  }
  .ab-cta-btn:hover { background: #D4A420; transform: translateY(-2px); }
  .ab-cta-btn-outline {
    display: inline-block; padding: 15px 38px; border: 2px solid rgba(255,255,255,0.4);
    color: #fff; font-weight: 700; font-size: 14px; border-radius: 4px;
    text-decoration: none; transition: border-color 0.25s; margin: 0 8px 10px;
  }
  .ab-cta-btn-outline:hover { border-color: #fff; }

  @media (max-width: 640px) {
    .ab-tl-item { margin-bottom: 40px; }
    .ab-loc-stats { grid-template-columns: 1fr 1fr; }
  }
`;

// ── Location Advantages ─────────────────────────────────────────────────────
const advantages = [
  {
    icon: "🏪",
    title: "Asia's Largest Spice Mandi — Walking Distance",
    desc: "Unjha APMC Market Yard is the world's reference point for cumin, fennel and coriander pricing. Our proximity gives us daily market intelligence and sourcing speed unmatched by off-site processors.",
  },
  {
    icon: "🚢",
    title: "4 Hours to Mundra and Kandla Ports",
    desc: "Direct road access to two of India's busiest export ports. Fast inland logistics reduces pre-shipment lead time and keeps your CIF pricing competitive.",
  },
  {
    icon: "🌾",
    title: "Direct Farmer Access in Gujarat Belt",
    desc: "Gujarat's spice farming belt — from Patan to Mehsana — is our backyard. We engage directly with farmer producer groups for cumin, coriander and psyllium to secure the best-quality early-season lots.",
  },
  {
    icon: "🔬",
    title: "NABL Lab Within 30 Minutes",
    desc: "Our partner NABL-accredited testing laboratory is within 30 minutes of our facility — enabling same-day sample dispatch and 24–48 hour COA turnaround for every export lot.",
  },
];

// ── Process Steps ───────────────────────────────────────────────────────────
const processSteps = [
  {
    num: "01",
    icon: "🔍",
    title: "Lot Inspection",
    desc: "Every inward lot inspected for moisture, color, aroma and foreign matter before acceptance.",
  },
  {
    num: "02",
    icon: "⚙️",
    title: "Sortex Cleaning",
    desc: "Optical color sorting removes damaged, discoloured and foreign grains to achieve export purity.",
  },
  {
    num: "03",
    icon: "🧪",
    title: "NABL Lab Testing",
    desc: "Full panel COA — moisture, purity, aflatoxin, pesticide residue, microbiological tests.",
  },
  {
    num: "04",
    icon: "📦",
    title: "Custom Packing",
    desc: "Packed to your specification — 25kg, 50kg bulk or retail packs with your branding.",
  },
  {
    num: "05",
    icon: "🪲",
    title: "Fumigation",
    desc: "CITES-approved phosphine fumigation with certificate. ISPM-15 and destination-compliant.",
  },
  {
    num: "06",
    icon: "🚢",
    title: "Port Dispatch",
    desc: "CHA handles complete documentation from Mundra/Kandla. Full docs package with every shipment.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────
const AboutPage = () => {
  return (
    <>
      <Seo
        title="About JM Masala | Heritage, Unjha Location, and Global Spice Expansion"
        description="Learn JM Masala's family heritage spanning generations in Unjha, Gujarat's spice trade. HACCP certified exporter of cumin, turmeric, pepper, cardamom and 12 more Indian spices."
        path="/about-jm-masala"
      />

      <style>{styles}</style>

      <div className="ab-root">
        {/* ── HERO ── */}
        <div className="ab-hero">
          <div className="ab-hero-bg-text" aria-hidden="true">
            JM MASALA
          </div>
          <div className="ab-hero-inner">
            <div className="ab-hero-label">Our Story</div>
            <h1>
              Rooted in Unjha.
              <br />
              <em>Trusted Across the World.</em>
            </h1>
            <p className="ab-hero-quote">
              "Three generations in the spice trade. One consistent standard —
              quality that a buyer can stake their business on."
            </p>
            <div className="ab-hero-scroll">
              {[
                "HACCP Certified",
                "APEDA Registered",
                "Spice Board RCMC",
                "12+ Products",
                "Near APMC Market Yard, Unjha",
              ].map((p) => (
                <div key={p} className="ab-hero-pill">
                  <span>✓</span> {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── HERITAGE ── */}
        <div className="ab-heritage-bg">
          <div className="ab-wrap">
            <div className="ab-heritage-grid">
              <div className="ab-heritage-img-wrap">
                <img
                  src={jmMasalaLogo}
                  alt="Cumin seeds — the heart of JM Masala's heritage"
                />
                <div className="ab-heritage-img-badge">
                  <div className="ab-heritage-img-badge-num">3</div>
                  <div className="ab-heritage-img-badge-label">Generations</div>
                </div>
              </div>
              <div className="ab-heritage-body">
                <div className="ab-label">Our Heritage</div>
                <h2 className="ab-heading">
                  A Family Built on the Spice Trade
                </h2>
                <p>
                  JM Masala did not start in a boardroom. It started on the
                  trading floor of Unjha APMC Market Yard — Asia's largest spice
                  mandi — where our grandparents learned to tell the quality of
                  cumin by its aroma, its moisture by touch, and its grade by
                  sight.
                </p>
                <div className="ab-heritage-pull">
                  "When you spend three generations at Unjha mandi, quality
                  becomes instinct, not just a checklist."
                </div>
                <p>
                  That knowledge passed through our family across generations —
                  from reading the mandi floor to now running a HACCP-certified,
                  APEDA-registered export unit that supplies buyers in
                  Bangladesh, Gulf, Singapore and Europe.
                </p>
                <p>
                  We added modern infrastructure — Sortex machines, NABL lab
                  testing, ISO 22000 certification — but the foundation remains
                  unchanged: know your product better than anyone, and never
                  ship something you would not put your name on.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── LOCATION ── */}
        <div className="ab-loc-bg">
          <div className="ab-wrap">
            <div className="ab-loc-grid">
              <div>
                <div className="ab-label">Our Location</div>
                <h2 className="ab-heading">Near APMC Market Yard, Unjha</h2>
                <div className="ab-loc-body">
                  <p>
                    Our facility sits near APMC Market Yard, Unjha — Mehsana
                    District, Gujarat. This is not just a postal address. It is
                    the most strategically valuable location a spice processor
                    in India can have.
                  </p>
                  <p>
                    Unjha is where Indian cumin, fennel, coriander and psyllium
                    prices are discovered every single morning. Being here gives
                    us access to every lot that enters the market, direct farmer
                    relationships and the fastest possible sourcing-to-shipment
                    cycle.
                  </p>
                </div>
                <div style={{ marginTop: 28 }}>
                  {advantages.map((a) => (
                    <div key={a.title} className="ab-loc-advantage">
                      <div className="ab-loc-adv-icon">{a.icon}</div>
                      <div>
                        <div className="ab-loc-adv-title">{a.title}</div>
                        <div className="ab-loc-adv-desc">{a.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="ab-loc-map">
                  <iframe
                    title="Unjha location map"
                    src="https://www.google.com/maps?q=Unjha+APMC+Market+Yard,+Unjha,+Gujarat&output=embed"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="ab-loc-stats">
                  {[
                    { num: "Asia's #1", label: "Spice Mandi — Unjha" },
                    { num: "4 hrs", label: "To Mundra & Kandla Port" },
                    { num: "12+", label: "Products Processed" },
                    { num: "24–48hr", label: "Lab Test Turnaround" },
                  ].map((s) => (
                    <div key={s.label} className="ab-loc-stat">
                      <div className="ab-loc-stat-num">{s.num}</div>
                      <div className="ab-loc-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MISSION ── */}
        <div className="ab-mission-bg">
          <div className="ab-mission-inner">
            <p className="ab-mission-quote">
              "To be India's most trusted complete spice sourcing partner —
              where every buyer gets <em>consistent quality</em>, complete
              documentation, and a supplier who answers their messages."
            </p>
            <div className="ab-mission-attr">— JM Masala Mission</div>
            <div className="ab-mission-badges">
              {[
                "Quality. Purity. Compliance.",
                "On-Time Delivery",
                "LC Basis",
                "Complete Documentation",
                "HACCP Certified",
              ].map((b) => (
                <div key={b} className="ab-mission-badge">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PROCESS ── */}
        <div className="ab-process-bg">
          <div className="ab-wrap-sm">
            <div className="ab-label">How We Work</div>
            <h2 className="ab-heading">From Inward Lot to Your Port</h2>
            <p className="ab-sub">
              The same six-step process — applied to every product, every lot,
              every season.
            </p>
            <div className="ab-process-grid">
              {processSteps.map((s) => (
                <div key={s.num} className="ab-process-step">
                  <div className="ab-process-step-num">{s.num}</div>
                  <div className="ab-process-step-icon">{s.icon}</div>
                  <div className="ab-process-step-title">{s.title}</div>
                  <div className="ab-process-step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TEAM ── */}
        <div className="ab-team-bg">
          <div className="ab-wrap-sm">
            <div className="ab-label">Our Team</div>
            <h2 className="ab-heading">The People Behind JM Masala</h2>
            <div className="ab-team-photo-wrap">
              <img
                src={teamImage}
                alt="JM Masala sourcing and operations team"
                className="ab-team-photo"
                loading="lazy"
              />
            </div>
            <p className="ab-team-caption">
              Our sourcing, quality, and dispatch teams work together to ensure
              every lot is processed and shipped to buyer requirements.
            </p>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="ab-cta-bg">
          <h2 className="ab-cta-title">Ready to Source with JM Masala?</h2>
          <p className="ab-cta-sub">
            Share your product, grade and quantity — we will respond with
            specifications and pricing within 24 hours.
          </p>
          <div>
            <a href="/contact" className="ab-cta-btn">
              Send Your Requirement
            </a>
            <a
              href="https://wa.me/919106766041?text=Hi%20JM%20Masala%2C%20I%20read%20about%20your%20company%20and%20would%20like%20to%20discuss%20a%20sourcing%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="ab-cta-btn-outline"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
