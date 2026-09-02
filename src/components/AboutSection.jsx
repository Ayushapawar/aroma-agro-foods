import React from "react";
import Image from "next/image";
import Link from "next/link";
import moringaImg from "../../public/images/moringa-product.png";
import beetrootImg from "../../public/images/beetroot-product.jpg";
import carrotImg from "../../public/images/carrot-product.jpg";
import amlaImg from "../../public/images/amla-product.jpg";
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
    hasImage: true,
    imageSrc: beetrootImg,
    placeholderClass: "product-card__placeholder--beetroot",
    icon: "🍀",
  },
  {
    id: "carrot",
    name: "Carrot Powder",
    desc: "Sun-dried, naturally sweet carrot powder — an easy way to add the goodness of carrots to your food.",
    hasImage: true,
    imageSrc: carrotImg,
    placeholderClass: "product-card__placeholder--carrot",
    icon: "🥕",
  },
  {
    id: "amla",
    name: "Amla Powder",
    desc: "Made from Indian gooseberry — one of nature's most revered superfruits in a simple, usable form.",
    hasImage: true,
    imageSrc: amlaImg,
    placeholderClass: "product-card__placeholder--amla",
    icon: "🫐",
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
    <section id="about">

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

    </section>
  );
}




