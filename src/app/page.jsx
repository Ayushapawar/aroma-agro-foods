import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";

export default function HomePage() {
  return (
    <>
      {/* Accessibility: skip directly to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <WhyChooseUs />
      </main>

      <Footer />
      <WhatsApp />
    </>
  );
}
