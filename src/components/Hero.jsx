import Link from "next/link";
import "../styles/Hero.css";

const TRUST_POINTS = [
  { icon: "🌿", label: "Natural Ingredients" },
  { icon: "✓", label: "Quality Focused" },
  { icon: "🇮🇳", label: "Made in India" },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section" id="home">
      <div className="hero__inner">
        {/* ---- Left Column: Content ---- */}
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            PURE &bull; NATURAL &bull; EVERYDAY WELLNESS
          </p>

          <h1 className="hero__heading">
            Nourish{" "}
            <span className="hero__heading-accent">Naturally,</span>
            <br />
            Live <span className="hero__heading-accent">Vibrantly.</span>
          </h1>

          <p className="hero__description">
            Discover natural goodness from Aroma Agro Foods, thoughtfully
            created for your everyday lifestyle.
          </p>

          <div className="hero__actions">
            <Link href="#products" className="btn--primary">
              Explore Products
            </Link>
            <Link href="#enquiry" className="btn--outline">
              Enquire Now
            </Link>
          </div>

          {/* Trust points */}
          <ul className="hero__trust" role="list" aria-label="Our values">
            {TRUST_POINTS.map(({ icon, label }) => (
              <li key={label} className="trust-point">
                <span className="trust-point__icon" aria-hidden="true">
                  {icon}
                </span>
                <span className="trust-point__label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
