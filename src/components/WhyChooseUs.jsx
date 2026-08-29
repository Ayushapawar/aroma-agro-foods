import Link from "next/link";
import "../styles/WhyChooseUs.css";

const FEATURES = [
  {
    icon: "🌿",
    title: "100% Natural",
    description:
      "No additives, no preservatives, no artificial colours. Just pure Moringa goodness harvested directly from nature.",
  },
  {
    icon: "🏅",
    title: "Quality Focused",
    description:
      "Every batch undergoes rigorous quality checks and meets FSSAI standards to guarantee safety and nutritional integrity.",
  },
  {
    icon: "📦",
    title: "Carefully Packed",
    description:
      "Sealed in premium, airtight, food-grade packaging designed to lock in freshness, colour, and potency from farm to shelf.",
  },
  {
    icon: "🇮🇳",
    title: "Made in India",
    description:
      "Proudly sourced and processed in India, supporting local farmers and celebrating the richness of Indian agriculture.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose" aria-labelledby="why-choose-heading">
      <div className="why-choose__inner">
        {/* ---- Section Header ---- */}
        <header className="section-header">
          <p className="section-header__eyebrow" aria-hidden="true">
            Our Promise
          </p>
          <h2 className="section-header__title" id="why-choose-heading">
            Why Choose Aroma Agro Foods?
          </h2>
          <p className="section-header__subtitle">
            We believe what goes into your body matters. Every decision we make —
            from sourcing to sealing — is guided by one principle: your wellbeing.
          </p>
        </header>

        {/* ---- Feature Cards ---- */}
        <ul
          className="why-choose__grid"
          role="list"
          aria-label="Our key commitments"
        >
          {FEATURES.map(({ icon, title, description }) => (
            <li key={title} className="feature-card">
              <div
                className="feature-card__icon-wrap"
                aria-hidden="true"
                role="img"
                aria-label={title}
              >
                <span aria-hidden="true">{icon}</span>
              </div>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__description">{description}</p>
            </li>
          ))}
        </ul>

        {/* ---- CTA Strip ---- */}
        <div
          className="why-choose__cta"
          role="complementary"
          aria-label="Call to action"
        >
          <h3 className="why-choose__cta-title">
            Ready to experience the Aroma difference?
          </h3>
          <p className="why-choose__cta-text">
            Join hundreds of health-conscious customers who trust Aroma Agro
            Foods for their daily nutrition.
          </p>
          <Link
            href="/contact"
            className="btn--cta-light"
            aria-label="Get in touch with us"
          >
            🌱 Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
