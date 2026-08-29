"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import "@/styles/Enquiry.css";

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    product: "",
    enquiryType: "",
    quantity: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null); // null, "success", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.name ||
      !formData.mobile ||
      !formData.product ||
      !formData.enquiryType ||
      !formData.message
    ) {
      setFormStatus("error");
      return;
    }

    // Simulate form submission success since we don't have a backend yet
    setFormStatus("success");
    setFormData({
      name: "",
      mobile: "",
      email: "",
      product: "",
      enquiryType: "",
      quantity: "",
      message: "",
    });
  };

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
        <section className="enquiry-hero" aria-label="Enquiry page hero">
          <div className="enquiry-hero__inner">
            <nav className="enquiry-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="enquiry-hero__breadcrumb-link">
                Home
              </Link>
              <span className="enquiry-hero__breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span
                className="enquiry-hero__breadcrumb-current"
                aria-current="page"
              >
                Enquire Now
              </span>
            </nav>

            <p className="enquiry-eyebrow">
              <span aria-hidden="true">📝</span> Enquire
            </p>
            <h1 className="enquiry-hero__heading">
              Enquire About Our{" "}
              <span className="enquiry-hero__heading-accent">Products</span>
            </h1>
            <p className="enquiry-hero__subheading">
              Have questions about our products, availability or wholesale
              opportunities? Send us an enquiry.
            </p>
          </div>
        </section>

        {/* ================================================
            2. ENQUIRY FORM
            ================================================ */}
        <section className="enquiry-main" aria-label="Enquiry form">
          <div className="enquiry-main__inner">
            <div className="enquiry-form-wrapper">
              <h2 className="enquiry-form__heading">Submit an Enquiry</h2>

              {formStatus === "success" && (
                <div className="enquiry-form__success">
                  <span aria-hidden="true">✅</span>
                  <p>
                    Thank you for contacting Aroma Agro Foods. We have received
                    your enquiry and will get back to you soon.
                  </p>
                </div>
              )}

              {formStatus === "error" && (
                <div className="enquiry-form__error">
                  <span aria-hidden="true">⚠️</span>
                  <p>
                    Please fill in all required fields (marked with *).
                  </p>
                </div>
              )}

              <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
                {/* Personal Details */}
                <div className="enquiry-form__section">
                  <h3 className="enquiry-form__section-title">Personal Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mobile">Mobile Number *</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        placeholder="Enter your mobile number"
                      />
                    </div>

                    <div className="form-group form-group--full">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address (optional)"
                      />
                    </div>
                  </div>
                </div>

                {/* Enquiry Details */}
                <div className="enquiry-form__section">
                  <h3 className="enquiry-form__section-title">Enquiry Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="product">Select Product *</label>
                      <select
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        required
                        className="form-select"
                      >
                        <option value="" disabled>Select a product...</option>
                        <option value="Moringa Powder">Moringa Powder</option>
                        <option value="Beetroot Powder">Beetroot Powder</option>
                        <option value="Carrot Powder">Carrot Powder</option>
                        <option value="Amla Powder">Amla Powder</option>
                        <option value="Juice Powder">Juice Powder</option>
                        <option value="Soup Powder">Soup Powder</option>
                        <option value="Plant Protein">Plant Protein</option>
                        <option value="Other">Other / Multiple</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="enquiryType">Enquiry Type *</label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleChange}
                        required
                        className="form-select"
                      >
                        <option value="" disabled>Select enquiry type...</option>
                        <option value="Product Enquiry">Product Enquiry</option>
                        <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                        <option value="Distributor Enquiry">Distributor Enquiry</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>

                    <div className="form-group form-group--full">
                      <label htmlFor="quantity">Quantity / Requirement</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 10 kg, 50 packs (optional)"
                      />
                    </div>

                    <div className="form-group form-group--full">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Please provide details about your enquiry..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="form-submit">
                  <button type="submit" className="enquiry-btn enquiry-btn--primary">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ================================================
            3. WHATSAPP CTA
            ================================================ */}
        <section className="enquiry-whatsapp" aria-labelledby="whatsapp-enquiry-heading">
          <div className="enquiry-whatsapp__inner">
            <h2 className="enquiry-whatsapp__heading" id="whatsapp-enquiry-heading">
              Want a quick response?
            </h2>
            <p className="enquiry-whatsapp__subtext">
              Our team is available on WhatsApp to answer your questions immediately.
            </p>
            <a
              href="https://wa.me/917798281007?text=Hello%20Aroma%20Agro%20Foods%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="enquiry-btn enquiry-btn--whatsapp"
            >
              <span aria-hidden="true">💬</span> Enquire on WhatsApp
            </a>
          </div>
        </section>

      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}
