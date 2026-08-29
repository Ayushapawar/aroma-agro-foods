"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import "@/styles/Contact.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
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
    if (!formData.name || !formData.mobile || !formData.message) {
      setFormStatus("error");
      return;
    }
    
    // Simulate form submission success since we don't have a backend yet
    setFormStatus("success");
    setFormData({
      name: "",
      mobile: "",
      email: "",
      subject: "",
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
        <section className="contact-hero" aria-label="Contact page hero">
          <div className="contact-hero__inner">
            <nav className="contact-hero__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="contact-hero__breadcrumb-link">
                Home
              </Link>
              <span className="contact-hero__breadcrumb-sep" aria-hidden="true">
                /
              </span>
              <span className="contact-hero__breadcrumb-current" aria-current="page">
                Contact
              </span>
            </nav>

            <p className="contact-eyebrow">
              <span aria-hidden="true">✉️</span> Get in Touch
            </p>
            <h1 className="contact-hero__heading">
              Have a question about our{" "}
              <span className="contact-hero__heading-accent">products?</span>
            </h1>
            <p className="contact-hero__subheading">
              We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* ================================================
            2. CONTACT CONTENT (Info + Form)
            ================================================ */}
        <section className="contact-main" aria-label="Contact information and form">
          <div className="contact-main__inner">
            {/* ---- Left: Contact Info ---- */}
            <div className="contact-info">
              <h2 className="contact-info__heading">Contact Information</h2>
              
              <ul className="contact-info__list">
                <li className="contact-info__card">
                  <span className="contact-info__icon" aria-hidden="true">📞</span>
                  <div>
                    <h3 className="contact-info__title">Phone</h3>
                    <p className="contact-info__text">
                      <a href="tel:+917798281007">+91 77982 81007</a>
                    </p>
                  </div>
                </li>
                
                <li className="contact-info__card">
                  <span className="contact-info__icon" aria-hidden="true">💬</span>
                  <div>
                    <h3 className="contact-info__title">WhatsApp</h3>
                    <p className="contact-info__text">
                      <a 
                        href="https://wa.me/917798281007" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </p>
                  </div>
                </li>
                
                <li className="contact-info__card">
                  <span className="contact-info__icon" aria-hidden="true">✉️</span>
                  <div>
                    <h3 className="contact-info__title">Email</h3>
                    <p className="contact-info__text">
                      <a href="mailto:aromaagrofoods@gmail.com">aromaagrofoods@gmail.com</a>
                    </p>
                  </div>
                </li>
                
                <li className="contact-info__card">
                  <span className="contact-info__icon" aria-hidden="true">📍</span>
                  <div>
                    <h3 className="contact-info__title">Address</h3>
                    <p className="contact-info__text">
                      Sangli, Maharashtra, India<br/>
                      <span className="contact-info__placeholder-text">(Detailed address will be updated soon)</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* ---- Right: Contact Form ---- */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form__heading">Send us a message</h2>
              
              {formStatus === "success" && (
                <div className="contact-form__success">
                  <span aria-hidden="true">✅</span>
                  <p>Thank you for contacting Aroma Agro Foods. We have received your message and will get back to you soon.</p>
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="contact-form__error">
                  <span aria-hidden="true">⚠️</span>
                  <p>Please fill in all required fields (Name, Mobile, and Message).</p>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
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
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <div className="form-submit">
                  <button type="submit" className="contact-btn contact-btn--primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* ================================================
            3. WHATSAPP CTA
            ================================================ */}
        <section className="contact-whatsapp" aria-labelledby="whatsapp-cta-heading">
          <div className="contact-whatsapp__inner">
            <h2 className="contact-whatsapp__heading" id="whatsapp-cta-heading">
              Prefer WhatsApp?
            </h2>
            <p className="contact-whatsapp__subtext">
              Send us your enquiry directly on WhatsApp for a quicker response.
            </p>
            <a 
              href="https://wa.me/917798281007?text=Hello%20Aroma%20Agro%20Foods%2C%20I%20have%20an%20enquiry." 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-btn contact-btn--whatsapp"
            >
              <span aria-hidden="true">💬</span> Chat on WhatsApp
            </a>
          </div>
        </section>

        {/* ================================================
            4. MAP PLACEHOLDER
            ================================================ */}
        <section className="contact-map" aria-label="Our Location Map">
           <div className="contact-map__placeholder">
              <span className="contact-map__icon" aria-hidden="true">🗺️</span>
              <h3>Our Location</h3>
              <p>Map view will be updated soon with our exact location in Sangli, Maharashtra.</p>
           </div>
        </section>

      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}
