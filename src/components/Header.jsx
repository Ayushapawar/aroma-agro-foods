"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/images/logo.png";
import "../styles/Header.css";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Quality", href: "#quality" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Close drawer on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && drawerRef.current && !drawerRef.current.contains(e.target)) {
        if (!e.target.closest(".header__hamburger")) {
          closeMenu();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, closeMenu]);

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      closeMenu();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      } else if (href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
      }
    } else {
      closeMenu();
    }
  };

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
    <>
      <header
        className={`header${scrolled ? " header--scrolled" : ""}${menuOpen ? " header--menu-open" : ""}`}
        role="banner"
      >
        <div className="header__inner">
          {/* ---- Hamburger (mobile) - On Left ---- */}
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

          {/* ---- Logo ---- */}
          <Link 
            href="#home" 
            className="header__logo" 
            aria-label="Aroma Agro Foods – Home"
            onClick={(e) => handleScroll(e, "#home")}
          >
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
                  <a 
                    href={href} 
                    className="nav__link"
                    onClick={(e) => handleScroll(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#enquiry" 
                  className="nav__link"
                  onClick={(e) => handleScroll(e, "#enquiry")}
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ---- Left Side Mobile Drawer & Backdrop ---- */}
      <div 
        className={`drawer-backdrop${menuOpen ? " is-visible" : ""}`} 
        onClick={closeMenu} 
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        ref={drawerRef}
        className={`drawer-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="drawer-menu__header">
          <span className="drawer-menu__title">Menu</span>
          <button 
            className="drawer-menu__close" 
            aria-label="Close menu" 
            onClick={closeMenu}
          >
            &times;
          </button>
        </div>
        <div className="drawer-menu__inner">
          <ul className="drawer-nav__list" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="drawer-nav__link"
                  onClick={(e) => handleScroll(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#enquiry"
                className="drawer-nav__link drawer-nav__link--cta"
                onClick={(e) => handleScroll(e, "#enquiry")}
              >
                Enquire Now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
