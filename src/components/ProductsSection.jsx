import Image from "next/image";
import Link from "next/link";
import moringaImg from "../../public/images/moringa-product.png";
import beetrootImg from "../../public/images/beetroot-product.jpg";
import carrotImg from "../../public/images/carrot-product.jpg";
import amlaImg from "../../public/images/amla-product.jpg";
import "@/styles/Products.css";

/* ============================================================
   PAGE METADATA
   ============================================================ */

/* ============================================================
   DATA
   ============================================================ */

const AVAILABLE_PRODUCTS = [
  {
    id: "moringa",
    name: "Moringa Powder",
    tagline: "The Miracle Tree for a Healthy You",
    desc:
      "Made from 100% pure Moringa Oleifera leaves, this versatile green powder is gently dried and finely milled to preserve its natural nutrients. Easy to add to smoothies, juices, soups and everyday food.",
    tags: ["100% Natural", "No Additives", "Vegan", "Gluten Free"],
    features: [
      "Rich in natural vitamins & minerals",
      "No additives or preservatives",
      "Vegan & gluten free",
      "FSSAI licensed",
      "Packed in food-grade packaging",
    ],
    hasImage: true,
    imageSrc: moringaImg,
    phClass: "prod-card__ph--moringa",
    phIcon: "🌿",
    featured: true,
  },
  {
    id: "beetroot",
    name: "Beetroot Powder",
    tagline: "Naturally Vibrant, Naturally Pure",
    desc:
      "Pure beetroot in convenient powder form — a naturally vibrant addition to your smoothies, juices and recipes. Made from carefully selected beetroots with no artificial colour or additives.",
    tags: ["100% Natural", "No Artificial Colour", "Vegan"],
    features: [
      "Made from selected beetroots",
      "Natural deep-red colour",
      "No artificial additives",
      "Vegan & plant-based",
    ],
    hasImage: true,
    imageSrc: beetrootImg,
    phClass: "prod-card__ph--beetroot",
    phIcon: "🍀",
    featured: false,
  },
  {
    id: "carrot",
    name: "Carrot Powder",
    tagline: "Sun-Dried, Naturally Sweet",
    desc:
      "Sun-dried carrot powder that brings the natural goodness of fresh carrots into a convenient, easy-to-use form. Perfect for adding to soups, smoothies and baked goods.",
    tags: ["100% Natural", "Sun-Dried", "Vegan"],
    features: [
      "Naturally sweet flavour",
      "Rich in beta-carotene",
      "No added sugar",
      "Versatile cooking ingredient",
    ],
    hasImage: true,
    imageSrc: carrotImg,
    phClass: "prod-card__ph--carrot",
    phIcon: "🥕",
    featured: false,
  },
  {
    id: "amla",
    name: "Amla Powder",
    tagline: "The Immunity Superfruit",
    desc:
      "Made from Indian gooseberry — one of nature's most revered superfruits. Packed with natural Vitamin C, it's a powerful addition to your daily wellness routine.",
    tags: ["100% Natural", "Immunity", "Vitamin C"],
    features: [
      "High natural Vitamin C",
      "Traditional superfruit",
      "Immunity boosting properties",
      "Pure and unsweetened",
    ],
    hasImage: true,
    imageSrc: amlaImg,
    phClass: "prod-card__ph--amla",
    phIcon: "🫐",
    featured: false,
  },
];

const USP_ITEMS = [
  {
    icon: "🌿",
    title: "100% Natural",
    text: "No artificial additives, colours or preservatives in any of our products.",
  },
  {
    icon: "🏅",
    title: "Quality Focused",
    text: "Every batch is quality-checked to ensure safety and consistency.",
  },
  {
    icon: "📦",
    title: "Carefully Packed",
    text: "Sealed in food-grade packaging to lock in freshness.",
  },
  {
    icon: "🇮🇳",
    title: "Made in India",
    text: "Proudly sourced and processed in India, supporting local farmers.",
  },
];

/* ============================================================
   PAGE COMPONENT
   ============================================================ */

export default function ProductsPage() {
  return (
    <section id="products">

        {/* ================================================
            1. HERO
            ================================================ */}
        <section className="prod-hero" aria-label="Products hero">
          <div className="prod-hero__inner">
            {/* Content */}
            <div className="prod-hero__content">
              {/* Breadcrumb */}
              <nav className="prod-hero__breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className="prod-hero__breadcrumb-sep" aria-hidden="true">/</span>
                <span className="prod-hero__breadcrumb-current" aria-current="page">
                  Products
                </span>
              </nav>

              <p className="prod-hero__badge">
                <span aria-hidden="true">🌱</span>
                Natural Food Products
              </p>

              <h1 className="prod-hero__heading">
                Pure.{" "}
                <span className="prod-hero__heading-accent">Natural.</span>
                <br />
                Thoughtfully Made.
              </h1>

              <p className="prod-hero__subheading">
                Carefully selected ingredients in convenient everyday forms.
              </p>

              <ul className="prod-hero__chips" role="list" aria-label="Product highlights">
                {["✅ 4 Natural Products", "🌿 100% Natural", "📦 No Additives", "🇮🇳 Made in India"].map(
                  (chip) => (
                    <li key={chip} className="prod-hero__chip">
                      {chip}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================
            2. STICKY FILTER TABS
            ================================================ */}
        <nav
          className="prod-filter"
          aria-label="Product category navigation"
          role="navigation"
        >
          <div className="prod-filter__inner">
            <a href="#available" className="prod-filter__tab prod-filter__tab--active">
              Our Products
              <span className="prod-filter__count" aria-label="4 products">4</span>
            </a>
            <a href="#enquire" className="prod-filter__tab">
              Enquire
            </a>
          </div>
        </nav>

        {/* ================================================
            3. AVAILABLE PRODUCTS
            ================================================ */}
        <section
          id="available"
          className="prod-available"
          aria-labelledby="available-heading"
        >
          <div className="prod-available__inner">
            <header className="prod-section-header">
              <p className="prod-eyebrow">Available Now</p>
              <h2 className="prod-section-title" id="available-heading">
                Our Current Product Range
              </h2>
              <p className="prod-section-subtitle">
                Four pure, natural powders crafted from carefully selected
                ingredients — ready to order today.
              </p>
            </header>

            <ul className="prod-grid" role="list" aria-label="Available products">
              {AVAILABLE_PRODUCTS.map((product) => (
                <li
                  key={product.id}
                  className={`prod-card${product.featured ? " prod-card--featured" : ""}`}
                >
                  {/* Status badge */}
                  <span
                    className="prod-card__badge prod-card__badge--available"
                    aria-label="Available now"
                  >
                    ✅ Available Now
                  </span>

                  {/* Image / Placeholder */}
                  <div className="prod-card__img-wrap">
                    {product.hasImage ? (
                      <Image
                        src={product.imageSrc}
                        alt={`${product.name} – Aroma Agro Foods`}
                        width={product.featured ? 900 : 400}
                        height={product.featured ? 480 : 300}
                        className="prod-card__img"
                      />
                    ) : (
                      <div
                        className={`prod-card__placeholder ${product.phClass}`}
                        aria-hidden="true"
                      >
                        <span className="prod-card__ph-icon">{product.phIcon}</span>
                        <span className="prod-card__ph-name">{product.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Body */}
                  <div className="prod-card__body">
                    {/* Tags */}
                    <ul className="prod-card__tags" role="list" aria-label="Product tags">
                      {product.tags.map((tag) => (
                        <li key={tag} className="prod-card__tag">
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <h3 className="prod-card__name">{product.name}</h3>
                    <p className="prod-card__tagline">{product.tagline}</p>
                    <p className="prod-card__desc">{product.desc}</p>

                    {/* Features — only on featured card */}
                    {product.featured && (
                      <ul
                        className="prod-card__features"
                        role="list"
                        aria-label="Product features"
                      >
                        {product.features.map((f) => (
                          <li key={f} className="prod-card__feature">
                            <span className="prod-card__feature-icon" aria-hidden="true">
                              ✓
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Actions */}
                    <div className="prod-card__actions">
                      <a
                        href={`https://wa.me/917798281007?text=Hello%20Aroma%20Agro%20Foods%2C%20I%20would%20like%20to%20buy%20${encodeURIComponent(product.name)}%20(100g).%20Please%20share%20the%20order%20details%20and%20payment%20information.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="prod-btn--primary"
                        aria-label={`Buy ${product.name}`}
                      >
                        🛒 Buy Now
                      </a>
                      <Link
                        href="#contact"
                        className="prod-btn--outline"
                        aria-label={`Contact us about ${product.name}`}
                      >
                        📞 Contact Us
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* ================================================
            4. WHY AROMA AGRO — USP ROW
            ================================================ */}
        <section className="prod-usp" aria-labelledby="usp-heading">
          <div className="prod-usp__inner">
            <header className="prod-section-header">
              <p className="prod-eyebrow">Why Choose Us</p>
              <h2 className="prod-section-title" id="usp-heading">
                The Aroma Agro Difference
              </h2>
            </header>

            <ul className="prod-usp__grid" role="list" aria-label="Why choose Aroma Agro Foods">
              {USP_ITEMS.map(({ icon, title, text }) => (
                <li key={title} className="usp-card">
                  <div className="usp-card__icon" aria-hidden="true">
                    {icon}
                  </div>
                  <h3 className="usp-card__title">{title}</h3>
                  <p className="usp-card__text">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================================================
            6. CTA
            ================================================ */}
        <section
          id="enquire"
          className="prod-cta"
          aria-label="Enquire about products"
        >
          <div className="prod-cta__inner">
            <h2 className="prod-cta__title">
              Interested in Our Products?
            </h2>
            <p className="prod-cta__subtitle">
              Reach out to us for bulk orders, trade enquiries or product
              information. We&apos;d love to hear from you.
            </p>
            <div className="prod-cta__actions">
              <a
                href="https://wa.me/917798281007?text=Hello%20Aroma%20Agro%20Foods%2C%20I%20am%20interested%20in%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="prod-btn--light"
                aria-label="Chat with us on WhatsApp"
              >
                💬 WhatsApp Us
              </a>
              <Link
                href="#contact"
                className="prod-btn--outline"
                style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
                aria-label="Go to the contact page"
              >
                📩 Contact Page
              </Link>
            </div>
          </div>
        </section>

      </section>
  );
}
