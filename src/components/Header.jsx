"use client";

import { useState, useCallback } from "react";
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

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className="header" role="banner">
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

          <a href="#contact" className="btn--enquire" aria-label="Enquire about our products">
            Enquire Now
          </a>
        </nav>

        {/* ---- Hamburger (mobile) ---- */}
        <button
          className="header__hamburger"
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

      {/* ---- Mobile Menu ---- */}
      <nav
        id="mobile-menu"
        className={`header__mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav__list" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
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
        <div className="mobile-nav__cta">
          <a
            href="#contact"
            className="btn--enquire"
            onClick={closeMenu}
            aria-label="Enquire about our products"
          >
            Enquire Now
          </a>
        </div>
      </nav>
    </header>
  );
}

