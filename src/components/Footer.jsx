import Link from "next/link";
import Image from "next/image";
import logoImg from "../../public/images/logo.png";
import "../styles/Footer.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
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
          <Link href="/" aria-label="Aroma Agro Foods – Home">
            <Image
              src={logoImg}
              alt="Aroma Agro Foods logo"
              width={160}
              height={50}
              className="footer__logo"
            />
          </Link>
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
              📷
            </a>
            <a
              href="https://wa.me/917798281007"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Chat on WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* ---- Quick Links ---- */}
        <nav className="footer__section" aria-label="Footer navigation">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="footer__link">
                  {label}
                </Link>
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
                <Link href="#products" className="footer__link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ---- Contact ---- */}
        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <address className="footer__contact">
            <p>
              <span aria-hidden="true">📍</span>
              Sangli, Maharashtra, India
            </p>
            <p>
              <a href="tel:+917798281007" className="footer__link">
                <span aria-hidden="true">📞</span>
                +91 77982 81007
              </a>
            </p>
            <p>
              <a
                href="mailto:aromaagrofoods@gmail.com"
                className="footer__link"
              >
                <span aria-hidden="true">✉️</span>
                aromaagrofoods@gmail.com
              </a>
            </p>
            <p>
              <span aria-hidden="true">📸</span>
              @aromaagrofoods
            </p>
          </address>
          <div className="footer__badges" aria-label="Certifications">
            <span className="footer__badge">FSSAI Licensed</span>
            <span className="footer__badge">🇮🇳 Made in India</span>
          </div>
        </div>
      </div>

      {/* ---- Bottom bar ---- */}
      <div className="footer__bottom">
        <p>© {year} Aroma Agro Foods. All rights reserved.</p>
        <p className="footer__bottom-tagline">
          Pure Ingredients. Thoughtful Processing. Honest Quality.
        </p>
      </div>
    </footer>
  );
}

