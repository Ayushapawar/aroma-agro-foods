"use client";

import { useState } from "react";
import Link from "next/link";
import "@/styles/FAQ.css";

/* ============================================================
   DATA
   ============================================================ */
const FAQ_CATEGORIES = [
  {
    id: "general",
    label: "General",
    icon: "🏢",
    questions: [
      {
        q: "What is Aroma Agro Foods?",
        a: "Aroma Agro Foods is a natural food products brand based in Sangli, Maharashtra, India. We focus on creating pure, high-quality food powders made from carefully selected natural ingredients — helping you bring the goodness of nature into your everyday routine.",
      },
      {
        q: "What type of products do you offer?",
        a: "We offer a range of 100% natural food powders, including Moringa Powder, Beetroot Powder, Carrot Powder and Amla Powder. All products are made from natural ingredients with no artificial additives or preservatives.",
      },
      {
        q: "Where are your products made?",
        a: "All Aroma Agro Foods products are sourced and processed in India. We are proud to support Indian agriculture and make quality natural products available to customers across India.",
      },
    ],
  },
  {
    id: "products",
    label: "Products",
    icon: "🌿",
    questions: [
      {
        q: "What is Moringa Powder?",
        a: "Moringa Powder is made from 100% pure dried Moringa Oleifera leaves. It is a natural, versatile green powder that can be easily added to smoothies, juices, soups, and everyday food.",
      },
      {
        q: "What ingredients are used in your products?",
        a: "Our products contain 100% natural ingredients — the named fruit, vegetable or plant. We do not add artificial colours, flavours, preservatives or fillers. Specific ingredient information for each product is available on the respective product page and packaging.",
      },
      {
        q: "What pack sizes are available?",
        a: "Currently, our products are available in 100g packs. For bulk or wholesale enquiries, please contact us directly and we will be happy to assist.",
      },
      {
        q: "Where can I find detailed product information?",
        a: "Detailed product information including ingredients, net weight and storage instructions is available on our Products page and on the product packaging. You can also contact us directly if you have a specific question.",
      },
    ],
  },
  {
    id: "usage",
    label: "Usage & Storage",
    icon: "📋",
    questions: [
      {
        q: "How should Moringa Powder be used?",
        a: "Moringa Powder can be added to smoothies, juices, soups, dals, chapati dough, or any everyday food and drink. A small amount goes a long way. We recommend starting with a small quantity and adjusting to your personal preference. Please refer to the product packaging for suggested usage guidance.",
      },
      {
        q: "How should the product be stored?",
        a: "Store in a cool, dry place away from direct sunlight and moisture. Always keep the pack sealed tightly after use. Refer to the product packaging for specific storage instructions.",
      },
      {
        q: "What is the shelf life?",
        a: "The best-before date is printed on the product packaging. For best results, we recommend consuming the product before this date and storing it as directed.",
      },
    ],
  },
  {
    id: "orders",
    label: "Orders & Enquiries",
    icon: "📞",
    questions: [
      {
        q: "How can I order Aroma Agro Foods products?",
        a: "You can enquire about ordering through our website using the Enquire Now button, by contacting us via WhatsApp at +91 77982 81007, or by emailing us at aromaagrofoods@gmail.com. We will be happy to guide you through the process.",
      },
      {
        q: "Do you offer wholesale or bulk enquiries?",
        a: "Yes, we welcome wholesale and bulk enquiries. Please get in touch with us directly via phone, WhatsApp or email and we will respond with the relevant details.",
      },
      {
        q: "How can I contact Aroma Agro Foods?",
        a: "You can reach us in the following ways: Phone/WhatsApp: +91 77982 81007 | Email: aromaagrofoods@gmail.com | Instagram: @aromaagrofoods | We are based in Sangli, Maharashtra, India.",
      },
      {
        q: "How can I enquire about upcoming products?",
        a: "We are always working on new natural products. To stay updated or to express interest in future products, please follow us on Instagram @aromaagrofoods or send us an enquiry and we will keep you informed.",
      },
    ],
  },
];

/* ============================================================
   ACCORDION ITEM COMPONENT
   ============================================================ */
function AccordionItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <button
        id={`faq-btn-${id}`}
        className="faq-item__btn"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
      >
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className="faq-item__panel"
        hidden={!isOpen}
      >
        <p className="faq-item__answer">{answer}</p>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE COMPONENT
   ============================================================ */
export default function FaqPage() {
  /* Track which items are open: key = "catIndex-qIndex" */
  const [openItems, setOpenItems] = useState({});

  const toggle = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section id="faq">

        {/* ================================================
            1. HERO
            ================================================ */}
        <section className="faq-hero" aria-label="FAQ page hero">
          <div className="faq-hero__inner">
            <nav className="faq-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="faq-hero__breadcrumb-link">Home</Link>
              <span className="faq-hero__breadcrumb-sep" aria-hidden="true">/</span>
              <span className="faq-hero__breadcrumb-current" aria-current="page">FAQ</span>
            </nav>

            <p className="faq-eyebrow">
              <span aria-hidden="true">💬</span> Got Questions?
            </p>
            <h1 className="faq-hero__heading">
              Frequently Asked{" "}
              <span className="faq-hero__heading-accent">Questions</span>
            </h1>
            <p className="faq-hero__subheading">
              Everything you need to know about Aroma Agro Foods and our products.
            </p>
          </div>
        </section>

        {/* ================================================
            2. FAQ ACCORDION
            ================================================ */}
        <section className="faq-main" aria-label="Frequently asked questions">
          <div className="faq-main__inner">

            {FAQ_CATEGORIES.map((cat, catIdx) => (
              <div key={cat.id} className="faq-category" id={cat.id}>
                <div className="faq-category__header">
                  <span className="faq-category__icon" aria-hidden="true">
                    {cat.icon}
                  </span>
                  <h2 className="faq-category__title">{cat.label}</h2>
                </div>

                <div
                  className="faq-list"
                  role="list"
                  aria-label={`${cat.label} questions`}
                >
                  {cat.questions.map((item, qIdx) => {
                    const key = `${catIdx}-${qIdx}`;
                    return (
                      <div key={key} role="listitem">
                        <AccordionItem
                          id={key}
                          question={item.q}
                          answer={item.a}
                          isOpen={!!openItems[key]}
                          onToggle={() => toggle(key)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* ================================================
            3. CTA
            ================================================ */}
        <section className="faq-cta" aria-labelledby="faq-cta-heading">
          <div className="faq-cta__inner">
            <p className="faq-cta__icon" aria-hidden="true">🌿</p>
            <h2 className="faq-cta__heading" id="faq-cta-heading">
              Still have a question?
            </h2>
            <p className="faq-cta__subtext">
              We are always happy to help. Reach out to us directly and we
              will get back to you as soon as possible.
            </p>
            <div className="faq-cta__actions">
              <Link href="#enquiry" className="faq-btn faq-btn--white">
                Enquire Now
              </Link>
              <Link href="#contact" className="faq-btn faq-btn--outline-white">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </section>
  );
}
