import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";
import InitialLoader from "./components/ui/InitialLoader";

import Home from "./pages/Home";
import CaseStudy from "./pages/CaseStudy";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <HelmetProvider>
      {/* Initial Page Load Logo Splash Screen */}
      <AnimatePresence>
        {isLoading && (
          <InitialLoader key="initial-loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col bg-[#F5F1EA] text-[#631B27] selection:bg-[#631B27] selection:text-[#F5F1EA] w-full relative">
        <ScrollToTop />
        <Navbar />
        <WhatsAppFloat />
        
        <div className="flex-grow">
          <Routes>
            {/* Unified Home Page with all sections */}
            <Route path="/" element={<Home />} />
            
            {/* Project Case Study Page when clicked */}
            <Route path="/work/:projectId" element={<CaseStudy />} />

            {/* Legal Pages */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* Other routes scroll smoothly to home sections */}
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            <Route path="/services/:serviceId" element={<Navigate to="/#services" replace />} />
            <Route path="/work" element={<Navigate to="/#work" replace />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/process" element={<Navigate to="/#process" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />
            
            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
}