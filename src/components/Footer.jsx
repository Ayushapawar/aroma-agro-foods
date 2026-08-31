"use client";

import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo.png";
import "../styles/Footer.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const AVAILABLE_PRODUCTS = [
  "Moringa Powder",
  "Beetroot Powder",
  "Carrot Powder",
  "Amla Powder",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer__inner">
        {/* ---- Brand ---- */}
        <div className="footer__brand">
          <a 
            href="#home" 
            aria-label="Aroma Agro Foods — Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }}
          >
            <Image
              src={logoImg}
              alt="Aroma Agro Foods logo"
              width={160}
              height={50}
              className="footer__logo"
            />
          </a>
          <p className="footer__tagline">Nourish Naturally. Live Vibrantly.</p>
          <p className="footer__desc">
            Pure, natural food products crafted with care — from farm to your
            table.
          </p>
          <div className="footer__social" aria-label="Social media links">
            <a
              href="https://instagram.com/aromaagrofoods"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Follow us on Instagram"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
            </a>
            <a
              href="https://wa.me/917798281007"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Chat on WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.83 3.1 1.27 4.79 1.27 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.1c-.2.57-1.15 1.1-1.6 1.15-.42.04-.97.12-2.77-.63-2.18-.91-3.58-3.15-3.69-3.3-.11-.15-1.38-1.84-1.38-3.5 0-1.67.87-2.48 1.18-2.82.31-.34.67-.42.9-.42.22 0 .44 0 .63.01.2.01.46-.07.72.55.27.64.91 2.24 1 2.42.08.19.14.41.02.66-.11.24-.18.39-.36.6-.18.21-.38.46-.54.61-.18.17-.38.35-.17.71.21.36.94 1.54 2.01 2.5 1.37 1.23 2.51 1.62 2.87 1.78.36.16.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.32.12 2.05.97 2.41 1.15.36.18.59.27.68.42.09.15.09.87-.11 1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* ---- Quick Links ---- */}
        <nav className="footer__section" aria-label="Footer navigation">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a 
                  href={href} 
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const elem = document.getElementById(targetId);
                    if (elem) {
                      elem.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", href);
                    } else if (href === "#home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      window.history.pushState(null, "", "/");
                    }
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ---- Products ---- */}
        <div className="footer__section">
          <h3 className="footer__heading">Our Products</h3>
          <ul className="footer__links" role="list">
            {AVAILABLE_PRODUCTS.map((name) => (
              <li key={name}>
                <a 
                  href="#products" 
                  className="footer__link"
                  onClick={(e) => {
                    e.preventDefault();
                    const elem = document.getElementById("products");
                    if (elem) {
                      elem.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", "#products");
                    }
                  }}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Contact ---- */}
        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <address className="footer__contact">
            <p>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{flexShrink:0, marginTop:'3px'}}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              Sangli, Maharashtra, India
            </p>
            <p>
              <a href="tel:+917798281007" className="footer__link">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                +91 77982 81007
              </a>
            </p>
            <p>
              <a
                href="mailto:aromaagrofoods@gmail.com"
                className="footer__link"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>
                aromaagrofoods@gmail.com
              </a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true" style={{flexShrink:0, marginTop:'3px'}}><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
              @aromaagrofoods
            </p>
          </address>
          <div className="footer__badges" aria-label="Certifications">
            <span className="footer__badge">FSSAI Licensed</span>
            <span className="footer__badge">Made in India</span>
          </div>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="footer__bottom">
        <p>&copy; {year} Aroma Agro Foods. All Rights Reserved.</p>
        <p className="footer__bottom-tagline">
          Pure Ingredients. Thoughtful Processing. Honest Quality.
        </p>
      </div>
    </footer>
  );
}
