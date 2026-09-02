"use client";
import { useState } from "react";
import "../styles/Contact.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.message) {
      setFormStatus("error");
      return;
    }
    
    // Send message via WhatsApp
    const text = `Hello, I have an enquiry.%0A%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AEmail: ${formData.email || 'N/A'}%0ASubject: ${formData.subject || 'N/A'}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917798281007?text=${text}`, '_blank');

    setFormStatus("success");
    setFormData({ name: "", mobile: "", email: "", subject: "", message: "" });
    setTimeout(() => {
      setFormStatus("");
    }, 5000);
  };

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      
      {/* 1. HERO */}
      <section className="contact-hero">
        <div className="contact-hero__inner">
          <h1 className="contact-hero__heading" id="contact-heading">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true" style={{marginRight: '12px', verticalAlign: 'middle'}}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
            </svg>
            We'd Love to Hear From You
          </h1>
          <p className="contact-hero__subheading">
            Have a question about our products, an order or a bulk enquiry?<br/>
            We're here to help.
          </p>
        </div>
      </section>

      {/* 2. CONTACT CONTENT */}
      <section className="contact-main" aria-label="Contact information and form">
        <div className="contact-main__inner">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h2 className="contact-info__heading">Contact Information</h2>
            
            <ul className="contact-info__list">
              <li className="contact-info__card">
                <span className="contact-info__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </span>
                <div>
                  <h3 className="contact-info__title">Address</h3>
                  <p className="contact-info__text">
                    [Business Address]
                  </p>
                </div>
              </li>
              
              <li className="contact-info__card">
                <span className="contact-info__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </span>
                <div>
                  <h3 className="contact-info__title">Phone/WhatsApp</h3>
                  <p className="contact-info__text">
                    [Phone Number]
                  </p>
                </div>
              </li>
              
              <li className="contact-info__card">
                <span className="contact-info__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/>
                  </svg>
                </span>
                <div>
                  <h3 className="contact-info__title">Email</h3>
                  <p className="contact-info__text">
                    <a href="mailto:[Email Address]">[Email Address]</a>
                  </p>
                </div>
              </li>

              <li className="contact-info__card">
                <span className="contact-info__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                  </svg>
                </span>
                <div>
                  <h3 className="contact-info__title">Instagram</h3>
                  <p className="contact-info__text">
                    [Instagram Handle]
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="contact-form__heading">Send us a message</h2>
            
            {formStatus === "success" && (
              <div className="contact-form__success">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <p>Thank you for contacting Aroma Agro Foods. We have received your message and will get back to you soon.</p>
              </div>
            )}
            
            {formStatus === "error" && (
              <div className="contact-form__error">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{flexShrink:0}}>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
                <p>Please fill in all required fields (Name, Mobile, and Message).</p>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Enter your mobile number" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" />
              </div>
              
              <div className="form-group form-group--full">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="How can we help you?"></textarea>
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

      {/* 3. WHATSAPP CTA */}
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
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" style={{marginRight: '8px', verticalAlign: 'middle'}}>
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.83 3.1 1.27 4.79 1.27 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.46 14.1c-.2.57-1.15 1.1-1.6 1.15-.42.04-.97.12-2.77-.63-2.18-.91-3.58-3.15-3.69-3.3-.11-.15-1.38-1.84-1.38-3.5 0-1.67.87-2.48 1.18-2.82.31-.34.67-.42.9-.42.22 0 .44 0 .63.01.2.01.46-.07.72.55.27.64.91 2.24 1 2.42.08.19.14.41.02.66-.11.24-.18.39-.36.6-.18.21-.38.46-.54.61-.18.17-.38.35-.17.71.21.36.94 1.54 2.01 2.5 1.37 1.23 2.51 1.62 2.87 1.78.36.16.57.14.78-.1.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.8-.18.32.12 2.05.97 2.41 1.15.36.18.59.27.68.42.09.15.09.87-.11 1.44z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </section>
  );
}
