import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import "@/styles/Quality.css";

/* ============================================================
   PAGE METADATA
   ============================================================ */
export const metadata = {
  title: "Our Quality – Aroma Agro Foods",
  description:
    "Learn about our commitment to quality at Aroma Agro Foods — from ingredient selection to hygienic packaging. Pure, natural and honestly made.",
};

/* ============================================================
   DATA
   ============================================================ */
const PROCESS_STEPS = [
  {
    step: "01",
    icon: "🌱",
    title: "Ingredient Selection",
    desc: "We carefully source natural fruits, vegetables and plants, prioritising freshness and purity.",
  },
  {
    step: "02",
    icon: "⚙️",
    title: "Processing",
    desc: "Ingredients are cleaned, dried and milled using methods designed to preserve natural goodness.",
  },
  {
    step: "03",
    icon: "🔍",
    title: "Quality Checks",
    desc: "Each batch is reviewed to ensure it meets our internal quality standards before moving forward.",
  },
  {
    step: "04",
    icon: "📦",
    title: "Hygienic Packaging",
    desc: "Products are sealed in food-grade, airtight packaging to protect freshness from processing to delivery.",
  },
  {
    step: "05",
    icon: "🏡",
    title: "Ready for You",
    desc: "Your order is carefully packed and dispatched, ready to be part of your daily routine.",
  },
];

const FOCUS_CARDS = [
  {
    icon: "🌿",
    title: "Ingredient Quality",
    desc: "We start with carefully selected, natural ingredients — no shortcuts, no compromise on what goes into our products.",
  },
  {
    icon: "✨",
    title: "Clean Processing",
    desc: "Our processing focuses on maintaining cleanliness and minimising unnecessary handling to protect product integrity.",
  },
  {
    icon: "🍃",
    title: "Freshness",
    desc: "From sourcing to packaging, we focus on preserving the natural freshness and colour of every ingredient.",
  },
  {
    icon: "🔒",
    title: "Hygienic Packaging",
    desc: "Food-grade, airtight packaging protects our products from moisture, light and contamination throughout storage.",
  },
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function QualityPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>

        {/* ================================================
            1. HERO
            ================================================ */}
        <section className="q-hero" aria-label="Quality page hero">
          <div className="q-hero__inner">
            <nav className="q-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="q-hero__breadcrumb-link">Home</Link>
              <span className="q-hero__breadcrumb-sep" aria-hidden="true">/</span>
              <span className="q-hero__breadcrumb-current" aria-current="page">Quality</span>
            </nav>

            <p className="q-eyebrow">
              <span aria-hidden="true">🌿</span> Our Commitment
            </p>
            <h1 className="q-hero__heading">
              Quality You Can{" "}
              <span className="q-hero__heading-accent">Trust</span>
            </h1>
            <p className="q-hero__subheading">
              Pure ingredients. Thoughtful processing. Honest quality.
            </p>
          </div>
        </section>

        {/* ================================================
            2. OUR QUALITY COMMITMENT
            ================================================ */}
        <section className="q-commitment" aria-labelledby="q-commitment-heading">
          <div className="q-section-inner">
            <header className="q-section-header">
              <p className="q-eyebrow">Our Promise</p>
              <h2 className="q-section-title" id="q-commitment-heading">
                Our Quality Commitment
              </h2>
            </header>

            <div className="q-commitment__content">
              <p className="q-commitment__lead">
                At Aroma Agro Foods, quality is not a step in our process — it
                is the foundation of everything we do.
              </p>
              <p className="q-commitment__body">
                We believe that the products you bring into your home deserve
                careful attention at every stage. From selecting the right
                natural ingredients to ensuring they reach you in the freshest
                possible condition, we focus on doing things right.
              </p>
              <p className="q-commitment__body">
                Our approach is straightforward: carefully chosen ingredients,
                clean and thoughtful processing, consistent quality checks, and
                proper food-grade packaging. No shortcuts, no unnecessary
                additives — just honest natural products.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================
            3. FROM NATURE TO YOU — PROCESS
            ================================================ */}
        <section className="q-process" aria-labelledby="q-process-heading">
          <div className="q-section-inner">
            <header className="q-section-header">
              <p className="q-eyebrow">Our Process</p>
              <h2 className="q-section-title" id="q-process-heading">
                From Nature to You
              </h2>
              <p className="q-section-subtitle">
                Every product travels a careful, considered path before it
                reaches your hands.
              </p>
            </header>

            <ol className="q-process__steps" aria-label="Our quality process steps">
              {PROCESS_STEPS.map((item) => (
                <li key={item.step} className="q-process__step">
                  <div className="q-process__step-number" aria-hidden="true">
                    {item.step}
                  </div>
                  <div className="q-process__connector" aria-hidden="true" />
                  <div className="q-process__step-card">
                    <span className="q-process__step-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <h3 className="q-process__step-title">{item.title}</h3>
                    <p className="q-process__step-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================================================
            4. WHAT WE FOCUS ON — CARDS
            ================================================ */}
        <section className="q-focus" aria-labelledby="q-focus-heading">
          <div className="q-section-inner">
            <header className="q-section-header">
              <p className="q-eyebrow">What Matters to Us</p>
              <h2 className="q-section-title" id="q-focus-heading">
                What We Focus On
              </h2>
              <p className="q-section-subtitle">
                Four pillars that guide every product we make.
              </p>
            </header>

            <ul className="q-focus__grid" role="list" aria-label="Quality focus areas">
              {FOCUS_CARDS.map(({ icon, title, desc }) => (
                <li key={title} className="q-focus__card">
                  <div className="q-focus__card-icon" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="q-focus__card-title">{title}</h3>
                  <p className="q-focus__card-desc">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================================================
            5. PRODUCT TRANSPARENCY
            ================================================ */}
        <section className="q-transparency" aria-labelledby="q-transparency-heading">
          <div className="q-section-inner">
            <div className="q-transparency__card">
              <div className="q-transparency__icon" aria-hidden="true">📋</div>
              <h2 className="q-transparency__title" id="q-transparency-heading">
                Product Transparency
              </h2>
              <p className="q-transparency__body">
                We believe you deserve to know exactly what is in the products
                you buy. Product-specific information — including ingredients,
                net weight and storage instructions — is provided clearly on our
                product pages and on the product packaging.
              </p>
              <p className="q-transparency__body">
                If you have a specific question about any of our products, we
                are happy to help. Visit our Products page or reach out to us
                directly.
              </p>
              <Link href="/products" className="q-btn q-btn--outline">
                View Our Products
              </Link>
            </div>
          </div>
        </section>

        {/* ================================================
            6. CERTIFICATIONS & COMPLIANCE
            ================================================ */}
        <section className="q-certs" aria-labelledby="q-certs-heading">
          <div className="q-section-inner">
            <header className="q-section-header">
              <p className="q-eyebrow">Licences &amp; Compliance</p>
              <h2 className="q-section-title" id="q-certs-heading">
                Certifications &amp; Compliance
              </h2>
              <p className="q-section-subtitle">
                We operate in compliance with applicable food safety regulations
                and licencing requirements.
              </p>
            </header>

            <ul className="q-certs__grid" role="list" aria-label="Certifications">
              <li className="q-certs__card">
                <div className="q-certs__card-icon" aria-hidden="true">🏅</div>
                <h3 className="q-certs__card-title">FSSAI Licence</h3>
                <p className="q-certs__card-body">
                  Aroma Agro Foods holds a valid FSSAI licence, confirming
                  compliance with Indian food safety and standards regulations.
                </p>
                <p className="q-certs__card-note">
                  FSSAI Lic. No. 11523038000350
                </p>
              </li>

              <li className="q-certs__card q-certs__card--placeholder">
                <div className="q-certs__card-icon" aria-hidden="true">📄</div>
                <h3 className="q-certs__card-title">Additional Certifications</h3>
                <p className="q-certs__card-body">
                  Certification details will be updated here as applicable.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* ================================================
            7. CTA
            ================================================ */}
        <section className="q-cta" aria-labelledby="q-cta-heading">
          <div className="q-section-inner">
            <div className="q-cta__inner">
              <h2 className="q-cta__heading" id="q-cta-heading">
                Have questions about our products?
              </h2>
              <p className="q-cta__subtext">
                We are happy to answer any questions about our quality process,
                ingredients or products.
              </p>
              <div className="q-cta__actions">
                <Link href="/enquiry" className="q-btn q-btn--white">
                  Enquire Now
                </Link>
                <Link href="/contact" className="q-btn q-btn--outline-white">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}
