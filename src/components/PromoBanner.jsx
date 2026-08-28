"use client";

import "../styles/PromoBanner.css";

const PROMO_MESSAGES = [
  { icon: "🌿", text: "Nature's Goodness, Made Simple" },
  { icon: "🍃", text: "From Nature to Your Everyday Routine" },
  { icon: "✨", text: "Pure Ingredients. Thoughtful Processing. Honest Quality." },
  { icon: "🌱", text: "New Natural Products Coming Soon" },
];

export default function PromoBanner() {
  /* Duplicate the messages for seamless infinite scroll */
  const items = [...PROMO_MESSAGES, ...PROMO_MESSAGES];

  return (
    <section className="promo-banner" aria-label="Promotional messages">
      <div className="promo-banner__track">
        {items.map((item, i) => (
          <span key={i} className="promo-banner__item">
            <span className="promo-banner__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="promo-banner__text">{item.text}</span>
            <span className="promo-banner__sep" aria-hidden="true">
              ★
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}
