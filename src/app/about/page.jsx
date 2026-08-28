import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import logoImg from "../../../public/images/logo.png";
import moringaImg from "../../../public/images/moringa-product.png";
import "@/styles/About.css";

/* ============================================================
   PAGE METADATA
   ============================================================ */
export const metadata = {
  title: "About Us – Aroma Agro Foods",
  description:
    "Learn about Aroma Agro Foods — our story, philosophy and commitment to pure, natural food products made with honest quality.",
};

/* ============================================================
   DATA
   ============================================================ */

const PHILOSOPHY_CARDS = [
  {
    icon: "🌿",
    title: "Pure Ingredients",
    text: "We carefully select natural fruits, vegetables and plants — choosing freshness and purity over convenience.",
  },
  {
    icon: "⚙️",
    title: "Thoughtful Processing",
    text: "Our process is designed to preserve natural goodness while making nutrition easy and convenient for everyday life.",
  },
  {
    icon: "💚",
    title: "Honest Quality",
    text: "Every product reflects our focus on quality, purity and freshness — no shortcuts, no compromise.",
  },
];

const AVAILABLE_PRODUCTS = [
  {
    id: "moringa",
    name: "Moringa Powder",
    desc: "A versatile green superfood powder from the Moringa Oleifera plant — rich in natural nutrients.",
    hasImage: true,
    imageSrc: moringaImg,
    placeholderClass: "product-card__placeholder--moringa",
    icon: "🌿",
  },
  {
    id: "beetroot",
    name: "Beetroot Powder",
    desc: "Pure, vibrant beetroot in convenient powder form — a naturally colourful addition to your daily routine.",
    hasImage: false,
    placeholderClass: "product-card__placeholder--beetroot",
    icon: "🍀",
  },
  {
    id: "carrot",
    name: "Carrot Powder",
    desc: "Sun-dried, naturally sweet carrot powder — an easy way to add the goodness of carrots to your food.",
    hasImage: false,
    placeholderClass: "product-card__placeholder--carrot",
    icon: "🥕",
  },
  {
    id: "amla",
    name: "Amla Powder",
    desc: "Made from Indian gooseberry — one of nature's most revered superfruits in a simple, usable form.",
    hasImage: false,
    placeholderClass: "product-card__placeholder--amla",
    icon: "🫐",
  },
];

const COMING_SOON_PRODUCTS = [
  {
    id: "juice",
    name: "Juice Powder",
    desc: "Convenient, natural fruit and vegetable juice in powder form. Coming soon.",
    placeholderClass: "product-card__placeholder--juice",
    icon: "🥤",
  },
  {
    id: "soup",
    name: "Soup Powder",
    desc: "Nourishing, natural soup powders crafted from wholesome ingredients. Coming soon.",
    placeholderClass: "product-card__placeholder--soup",
    icon: "🍵",
  },
  {
    id: "protein",
    name: "Plant Protein",
    desc: "A clean, plant-based protein powder for those who value natural nutrition. Coming soon.",
    placeholderClass: "product-card__placeholder--protein",
    icon: "💪",
  },
];

const JOURNEY_STEPS = [
  {
    icon: "🌱",
    title: "Natural Sources",
    desc: "Fruits, vegetables & plants",
  },
  {
    icon: "🔍",
    title: "Careful Selection",
    desc: "Quality-checked at source",
  },
  {
    icon: "⚙️",
    title: "Thoughtful Processing",
    desc: "Gentle, preserving methods",
  },
  {
    icon: "📦",
    title: "Quality Packaging",
    desc: "Sealed for freshness",
  },
  {
    icon: "🏡",
    title: "Your Table",
    desc: "Aroma Agro Foods products",
  },
];

const VISION_CHIPS = [
  "🌿 Simple & Natural",
  "✅ Accessible Wellness",
  "🇮🇳 Made in India",
  "💚 Everyday Nutrition",
  "📦 Thoughtfully Packed",
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function AboutPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        {/* ================================================
            1. ABOUT HERO
            ================================================ */}
        <section className="about-hero" aria-label="About Aroma Agro Foods">
          <div className="about-hero__inner">
            {/* Content */}
            <div className="about-hero__content">
              {/* Breadcrumb */}
              <nav
                className="about-hero__breadcrumb"
                aria-label="Breadcrumb navigation"
              >
                <Link href="/">Home</Link>
                <span className="about-hero__breadcrumb-sep" aria-hidden="true">
                  /
                </span>
                <span
                  className="about-hero__breadcrumb-current"
                  aria-current="page"
                >
                  About Us
                </span>
              </nav>

              <p className="about-hero__badge">
                <span aria-hidden="true">🌿</span>
                Our Story
              </p>

              <h1 className="about-hero__heading">
                About{" "}
                <span className="about-hero__heading-accent">
                  Aroma Agro Foods
                </span>
              </h1>

              <p className="about-hero__subheading">
                Nourish Naturally. Live Vibrantly.
              </p>
            </div>

            {/* Visual — spinning border logo circle */}
            <div className="about-hero__visual" aria-hidden="true">
              <div className="about-hero__img-frame">
                <div className="about-hero__img-inner">
                  <Image
                    src={logoImg}
                    alt="Aroma Agro Foods logo"
                    width={240}
                    height={240}
                    priority
                    className="about-hero__logo-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
            2. OUR STORY
            ================================================ */}
        <section
          className="about-story"
          aria-labelledby="story-heading"
        >
          <div className="about-story__inner">
            {/* Text */}
            <div className="about-story__content">
              <header className="about-section-header" style={{ textAlign: "left", marginBottom: "32px" }}>
                <p className="about-eyebrow">Our Story</p>
                <h2 className="about-section-title" id="story-heading">
                  Rooted in Nature,<br />Driven by Wellness
                </h2>
              </header>

              <blockquote className="about-story__lead">
                At Aroma Agro Foods, we believe that good health begins with
                simple, natural choices.
              </blockquote>

              <div className="about-story__body">
                <p>
                  Our journey is inspired by a passion for wellness and a desire
                  to make nutritious, natural ingredients a convenient part of
                  everyday life. We bring carefully selected fruits, vegetables
                  and plants into easy-to-use powdered forms while focusing on
                  quality, purity and freshness.
                </p>
                <p>
                  From Beetroot and Carrot to Moringa and Amla, our products are
                  created for people who value natural nutrition and a healthier
                  lifestyle.
                </p>
              </div>

              <div className="about-story__promise">
                <span className="about-story__promise-label">Our Promise</span>
                <p className="about-story__promise-text">
                  Pure ingredients. Thoughtful processing. Honest quality.
                  <br />
                  We aim to make everyday wellness simple, natural and
                  accessible — one spoonful at a time.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="about-story__visual">
              <div className="about-story__img-wrapper">
                <div className="about-story__img-bg" aria-hidden="true" />
                <Image
                  src={moringaImg}
                  alt="Aroma Agro Foods – Moringa Powder product packaging"
                  width={900}
                  height={480}
                  className="about-story__img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================
            3. OUR PHILOSOPHY
            ================================================ */}
        <section
          className="about-philosophy"
          aria-labelledby="philosophy-heading"
        >
          <div className="about-philosophy__inner">
            <header className="about-section-header">
              <p className="about-eyebrow">Our Philosophy</p>
              <h2 className="about-section-title" id="philosophy-heading">
                What Guides Everything We Do
              </h2>
              <p className="about-section-subtitle">
                Three principles shape every decision we make — from how we
                source ingredients to how we seal each pack.
              </p>
            </header>

            <ul
              className="about-philosophy__grid"
              role="list"
              aria-label="Our philosophy pillars"
            >
              {PHILOSOPHY_CARDS.map(({ icon, title, text }) => (
                <li key={title} className="philosophy-card">
                  <div
                    className="philosophy-card__icon"
                    aria-hidden="true"
                    role="img"
                    aria-label={title}
                  >
                    {icon}
                  </div>
                  <h3 className="philosophy-card__title">{title}</h3>
                  <p className="philosophy-card__text">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================================================
            4. PRODUCT RANGE
            ================================================ */}
        <section
          className="about-products"
          aria-labelledby="products-heading"
        >
          <div className="about-products__inner">
            <header className="about-section-header">
              <p className="about-eyebrow">Product Range</p>
              <h2 className="about-section-title" id="products-heading">
                Natural Goodness in Every Product
              </h2>
              <p className="about-section-subtitle">
                Pure, natural powders crafted from carefully selected
                ingredients. Simple to use, honest in quality.
              </p>
            </header>

            {/* Available now */}
            <p className="about-products__group-label" aria-label="Available products">
              ✅ Available Now
            </p>
            <ul
              className="about-products__grid"
              role="list"
              aria-label="Currently available products"
            >
              {AVAILABLE_PRODUCTS.map((product) => (
                <li key={product.id} className="product-card">
                  <span
                    className="product-card__badge product-card__badge--available"
                    aria-label="Available now"
                  >
                    Available Now
                  </span>

                  <div className="product-card__img-wrap">
                    {product.hasImage ? (
                      <Image
                        src={product.imageSrc}
                        alt={`${product.name} – Aroma Agro Foods`}
                        width={400}
                        height={400}
                        className="product-card__img"
                      />
                    ) : (
                      <div
                        className={`product-card__placeholder ${product.placeholderClass}`}
                        aria-hidden="true"
                      >
                        <span className="product-card__placeholder-icon">
                          {product.icon}
                        </span>
                        <span className="product-card__placeholder-name">
                          {product.name}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="product-card__body">
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__desc">{product.desc}</p>
                    <div className="product-card__actions">
                      <Link
                        href="/products"
                        className="product-card__btn product-card__btn--primary"
                        aria-label={`View ${product.name}`}
                      >
                        View Product
                      </Link>
                      <a
                        href="https://wa.me/917798281007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="product-card__btn product-card__btn--outline"
                        aria-label={`Enquire about ${product.name}`}
                      >
                        Enquire
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Coming soon */}
            <p
              className="about-products__group-label"
              style={{ marginTop: "48px" }}
              aria-label="Coming soon products"
            >
              🔜 Coming Soon
            </p>
            <ul
              className="about-products__grid about-products__grid--coming"
              role="list"
              aria-label="Products coming soon"
            >
              {COMING_SOON_PRODUCTS.map((product) => (
                <li
                  key={product.id}
                  className="product-card product-card--coming"
                >
                  <span
                    className="product-card__badge product-card__badge--soon"
                    aria-label="Coming soon"
                  >
                    Coming Soon
                  </span>

                  <div className="product-card__img-wrap">
                    <div
                      className={`product-card__placeholder ${product.placeholderClass}`}
                      aria-hidden="true"
                    >
                      <span className="product-card__placeholder-icon">
                        {product.icon}
                      </span>
                      <span className="product-card__placeholder-name">
                        {product.name}
                      </span>
                    </div>
                  </div>

                  <div className="product-card__body">
                    <h3 className="product-card__name">{product.name}</h3>
                    <p className="product-card__desc">{product.desc}</p>
                    <p className="product-card__coming-note">
                      🔔 Stay tuned — launching soon!
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================================================
            5. PRODUCT JOURNEY
            ================================================ */}
        <section
          className="about-journey"
          aria-labelledby="journey-heading"
        >
          <div className="about-journey__inner">
            <header className="about-section-header">
              <p className="about-eyebrow">From Farm to Table</p>
              <h2 className="about-section-title" id="journey-heading">
                Our Product Journey
              </h2>
              <p className="about-section-subtitle">
                Every Aroma Agro Foods product travels a careful, considered
                path before it reaches you.
              </p>
            </header>

            <ol
              className="about-journey__steps"
              aria-label="Product journey steps"
            >
              {JOURNEY_STEPS.map((step, index) => (
                <React.Fragment key={step.title}>
                  <li className="journey-step">
                    <div
                      className="journey-step__icon"
                      aria-hidden="true"
                    >
                      {step.icon}
                    </div>
                    <span
                      className="journey-step__number"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <div className="journey-step__content">
                      <h3 className="journey-step__title">{step.title}</h3>
                      <p className="journey-step__desc">{step.desc}</p>
                    </div>
                  </li>
                  {index < JOURNEY_STEPS.length - 1 && (
                    <li
                      className="journey-arrow"
                      aria-hidden="true"
                      role="presentation"
                    >
                      ▶
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ol>
          </div>
        </section>

        {/* ================================================
            6. OUR PROMISE
            ================================================ */}
        <section
          className="about-promise"
          aria-labelledby="promise-heading"
        >
          <div className="about-promise__inner">
            <p className="about-promise__eyebrow">Our Promise</p>
            <div className="about-promise__lines" aria-label="Our promise">
              <p
                id="promise-heading"
                className="about-promise__line"
              >
                Pure ingredients.
              </p>
              <p className="about-promise__line about-promise__line--accent">
                Thoughtful processing.
              </p>
              <p className="about-promise__line about-promise__line--muted">
                Honest quality.
              </p>
            </div>
            <p className="about-promise__sub">
              These aren&apos;t just words — they guide every decision we make,
              from how we source our raw materials to how we seal each pack.
            </p>
          </div>
        </section>

        {/* ================================================
            7. OUR VISION
            ================================================ */}
        <section
          className="about-vision"
          aria-labelledby="vision-heading"
        >
          <div className="about-vision__inner">
            <header className="about-section-header">
              <p className="about-eyebrow">Our Vision</p>
              <h2
                className="about-section-title"
                id="vision-heading"
              >
                Where We Are Headed
              </h2>
            </header>

            <span className="about-vision__quote-mark" aria-hidden="true">
              &ldquo;
            </span>

            <p className="about-vision__text">
              To make everyday wellness simple, natural and accessible through
              thoughtfully created food products.
            </p>

            <ul
              className="about-vision__chips"
              role="list"
              aria-label="Our values"
            >
              {VISION_CHIPS.map((chip) => (
                <li key={chip} className="vision-chip">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================================================
            8. CTA
            ================================================ */}
        <section
          className="about-cta"
          aria-label="Call to action"
          id="contact"
        >
          <div className="about-cta__inner">
            <h2 className="about-cta__title">
              Discover Natural Goodness
            </h2>
            <p className="about-cta__subtitle">
              Explore our range of pure, natural powders — or get in touch
              to learn more about what we&apos;re creating for you.
            </p>
            <div className="about-cta__actions">
              <Link
                href="/products"
                className="about-btn--light"
                aria-label="Explore our products"
              >
                🌿 Explore Products
              </Link>
              <a
                href="https://wa.me/917798281007?text=Hello%20Aroma%20Agro%20Foods%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn--outline"
                style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
                aria-label="Enquire via WhatsApp"
              >
                ✉️ Enquire Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}
