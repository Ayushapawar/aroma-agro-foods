"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/images/logo.png";
import "../styles/Header.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  /* Scroll listener — add solid bg + shadow after 40px */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`header${scrolled ? " header--scrolled" : ""}${menuOpen ? " header--menu-open" : ""}`}
      role="banner"
    >
      <div className="header__inner">
        {/* ---- Logo ---- */}
        <Link href="/" className="header__logo" aria-label="Aroma Agro Foods – Home">
          <Image
            src={logoImg}
            alt="Aroma Agro Foods logo"
            width={180}
            height={56}
            priority
            className="header__logo-img"
          />
        </Link>

        {/* ---- Desktop Nav ---- */}
        <nav className="header__nav" aria-label="Primary navigation">
          <ul className="nav__list" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className="nav__link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/enquiry" className="btn--enquire" aria-label="Enquire about our products">
            Enquire Now
          </Link>
        </nav>

        {/* ---- Hamburger (mobile) ---- */}
        <button
          className={`header__hamburger${menuOpen ? " is-active" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
        >
          <span className="hamburger__bar" aria-hidden="true" />
          <span className="hamburger__bar" aria-hidden="true" />
          <span className="hamburger__bar" aria-hidden="true" />
        </button>
      </div>

      {/* ---- Mobile Fullscreen Overlay ---- */}
      <nav
        id="mobile-menu"
        className={`header__mobile-overlay${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-overlay__inner">
          <ul className="mobile-nav__list" role="list">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li key={label} style={{ animationDelay: `${0.05 + i * 0.06}s` }}>
                <Link
                  href={href}
                  className="mobile-nav__link"
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-nav__cta" style={{ animationDelay: "0.45s" }}>
            <Link
              href="/enquiry"
              className="btn--enquire"
              onClick={closeMenu}
              aria-label="Enquire about our products"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
