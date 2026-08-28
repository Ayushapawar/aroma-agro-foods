import Image from "next/image";
import Link from "next/link";
import moringaImg from "../../public/images/moringa-product.png";
import "../styles/Hero.css";

const TRUST_BADGES = [
  { icon: "✓", label: "100% Natural" },
  { icon: "🌿", label: "Chemical Free" },
  { icon: "🇮🇳", label: "Made in India" },
  { icon: "🏅", label: "FSSAI Certified" },
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__inner">
        {/* ---- Left: Content ---- */}
        <div className="hero__content">
          <p className="hero__badge">
            <span className="hero__badge-icon" aria-hidden="true">🌿</span>
            Pure &amp; Natural Superfood
          </p>

          <h1 className="hero__heading">
            Nourish{" "}
            <span className="hero__heading-accent">Naturally,</span>
            <br />
            Live Vibrantly
          </h1>

          <p className="hero__subheading">100% Pure Moringa Powder</p>

          <p className="hero__description">
            Sourced from the finest Moringa Oleifera farms across India,
            our premium powder is gently dried and finely milled to preserve
            every nutrient — delivering nature&apos;s most powerful green superfood
            straight to your table.
          </p>

          {/* Trust badges */}
          <ul className="hero__trust" role="list" aria-label="Product certifications">
            {TRUST_BADGES.map(({ icon, label }) => (
              <li key={label} className="trust-badge">
                <span className="trust-badge__icon" aria-hidden="true">{icon}</span>
                {label}
              </li>
            ))}
          </ul>

          <div className="hero__actions">
            <Link href="/products" className="btn--primary">
              View Product
            </Link>
            <a href="#contact" className="btn--outline">
              Enquire Now
            </a>
          </div>
        </div>

        {/* ---- Right: Visual ---- */}
        <div className="hero__visual">
          <div className="hero__img-wrap">
            <div className="hero__glow" aria-hidden="true" />
            <Image
              src={moringaImg}
              alt="Aroma Agro Foods - Moringa Powder 100g and 250g pack"
              width={900}
              height={480}
              priority
              className="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
