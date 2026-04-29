 import HeroSection from "./HeroSection";
import Services from "./service";
import WhyChooseUs from "./whychooseus";
import AppPreview from "./AppPreview";
import FAQ from "./faqsection";

export default function Home() {
  return (
    <div>

      {/* HERO */}
      <HeroSection />

      {/* SERVICES */}
      <Services />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* APP PREVIEW */}
      <AppPreview />
      {/* FAQ */}
      <FAQ />

    </div>
  );
}