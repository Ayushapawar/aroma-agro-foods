import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import AboutSection from "@/components/AboutSection";
import QualitySection from "@/components/QualitySection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import EnquirySection from "@/components/EnquirySection";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      
      {/* Main content can be hidden or rendered underneath, we'll keep it rendered so it preloads, but splash is on top */}
      <div style={{ display: showSplash ? 'none' : 'block' }}>
        {/* Accessibility: skip directly to main content */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <ProductsSection />
        <QualitySection />
        <FaqSection />
        <ContactSection />
        <EnquirySection />
      </main>

      <Footer />
      <WhatsApp />
      </div>
    </>
  );
}
