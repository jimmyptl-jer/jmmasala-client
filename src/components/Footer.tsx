import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { COMPANY, NAV_LINKS, TRUST_BADGES } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
        <section>
          <h2 className="font-serif text-2xl font-bold">JM Masala Exports</h2>
          <p className="mt-4 flex items-start gap-2 text-sm text-stone-300">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            {COMPANY.addressLine}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-stone-300">
            <Phone className="h-4 w-4 text-amber-400" />
            {COMPANY.phones.join(" | ")}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-stone-300">
            <Mail className="h-4 w-4 text-amber-400" />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-stone-300">{COMPANY.website}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-amber-300">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-stone-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/blog" className="text-stone-300 hover:text-white">
                Blog
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-amber-300">Connect</h3>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-stone-700 p-2 text-stone-200 hover:border-amber-300 hover:text-amber-300"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full border border-stone-700 p-2 text-stone-200 hover:border-amber-300 hover:text-amber-300"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-stone-700 p-2 text-stone-200 hover:border-amber-300 hover:text-amber-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wide text-stone-200">
            Certifications
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-stone-700 bg-stone-800 px-3 py-1 text-xs text-stone-200"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>
      </div>
      <div className="border-t border-stone-800 py-3 text-center text-xs text-stone-400">
        {new Date().getFullYear()} JM Masala Exports. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
