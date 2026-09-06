import React from "react";
import moringaImg from "../assets/images/moringa-product.png";
import beetrootImg from "../assets/images/beetroot-product.jpg";
import carrotImg from "../assets/images/carrot-product.jpg";
import amlaImg from "../assets/images/amla-product.jpg";
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




