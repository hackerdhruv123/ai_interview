import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import TrustedCompanies from "../components/landing/TrustedCompanies";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import DashboardPreview from "../components/landing/DashboardPreview";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "./Pricing";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

import background from "../assets/images/background.jpg";
// 👆 Apne project ke according path check kar lena

function Landing() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-slate-950/70"></div>

      {/* Content */}

      <div className="relative z-10">

        <Navbar />

        <Hero />

        <TrustedCompanies />

        <Features />

        <HowItWorks />

        <DashboardPreview />

        <Testimonials />

        <Pricing />

        <FAQ />

        <CTA />

        <Footer />

      </div>
    </div>
  );
}

export default Landing;