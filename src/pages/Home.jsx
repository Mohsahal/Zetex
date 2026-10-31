
import React from "react";
import SEO from "../components/seo/SEO";
import HeroSection from "../components/home/HeroSection";
import ServicesTeaser from "../components/home/ServicesTeaser";
import FeaturedWork from "../components/home/FeaturedWork";
import ProcessSection from "../components/home/ProcessSection";
import WhyZetex from "../components/home/WhyZetex";
import ContactSection from "../components/home/ContactSection";

export default function Home() {
  return (
    <main className="flex-grow">
      <SEO 
        title="Zetex - Digital Solutions" 
        description="Software, AI and digital solutions designed to turn ambitious ideas into powerful products. We build digital experiences that move businesses forward." 
      />
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Premium Services Section with 3D Visuals & Hover Effects */}
      <ServicesTeaser />

      {/* 3. Portfolio & Work Section */}
      <FeaturedWork />

      {/* 4. Methodology & Engineering Process */}
      <ProcessSection />

      {/* 5. About & Core Principles */}
      <WhyZetex />

      {/* 6. Contact & Consultation Section */}
      <ContactSection />
    </main>
  );
}
