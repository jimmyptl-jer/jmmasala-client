import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, TRUST_BADGES } from "@/data/siteData";
import logo from "@/assets/JmMasala.png";

const Footer = () => {
  return (
    <footer className="bg-[var(--brand-deep-green)] text-[var(--brand-cream)]">
      <div className="h-[3px] w-full bg-[var(--brand-gold)]" />
      <div className="jm-container grid gap-10 py-10 md:grid-cols-3 md:py-12">
        <section>
          <div className="flex items-center gap-3">
            <img src={logo} alt="JM Masala logo" className="h-9 w-auto md:h-12" loading="lazy" />
            <div>
              <h2 className="text-xs font-semibold tracking-[0.16em] text-[var(--brand-gold)] sm:text-sm sm:tracking-[0.2em]">
                JM MASALA
              </h2>
              <p className="text-[10px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.7)] sm:text-xs sm:tracking-[0.18em]">
                Premium Indian Spices
              </p>
            </div>
          </div>

          <p className="mt-4 font-[var(--font-accent)] text-[16px] italic text-[rgba(250,246,238,0.72)]">
            Quality. Purity. Compliance. On-time Delivery.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-[rgba(250,246,238,0.82)]">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
            {COMPANY.addressLine}
          </p>
          <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-[rgba(250,246,238,0.82)]">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
            <span className="break-words">{COMPANY.phones.join(" | ")}</span>
          </p>
          <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-[rgba(250,246,238,0.82)]">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-gold)]" />
            <a href={`mailto:${COMPANY.email}`} className="break-all transition-colors hover:text-white">
              {COMPANY.email}
            </a>
          </p>
          <p className="mt-2 break-all text-sm text-[rgba(255,255,255,0.75)]">{COMPANY.website}</p>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-[rgba(255,255,255,0.75)] transition-all duration-150 hover:pl-1 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="text-[rgba(255,255,255,0.75)] transition-all duration-150 hover:pl-1 hover:text-white"
              >
                Blog
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
            Connect
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white transition-colors hover:bg-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white transition-colors hover:bg-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(255,255,255,0.08)] text-white transition-colors hover:bg-[var(--brand-gold)] hover:text-[var(--brand-deep-green)]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(255,255,255,0.7)]">
            Certifications
          </h4>
          <div className="mt-3 jm-cert-badges">
            {TRUST_BADGES.map((badge) => (
              <div key={badge} className="jm-cert-badge">
                <div className="jm-cert-badge__title">{badge}</div>
                <div>Export-grade food safety documentation available.</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.1)] bg-[rgba(0,0,0,0.2)] py-3 text-center text-xs text-[rgba(255,255,255,0.5)]">
        {"\u00A9"} {new Date().getFullYear()} JM Masala Products. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
