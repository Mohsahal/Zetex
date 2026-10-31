import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 overflow-hidden select-none">
      
      {/* ======================================================== */}
      {/* 1. ARCHITECTURAL BONE CANVAS WITH POSTER BURGUNDY PLINTH */}
      {/* ======================================================== */}
      <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
        {/* Soft Diagonal Window Beam */}
        <div 
          className="absolute -top-24 -left-20 w-[70vw] h-[80vh] opacity-60 blur-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(245, 241, 234, 0.2) 60%, transparent 100%)"
          }}
        />

        {/* Architectural Burgundy Wedge / Monolith from the ZETEX Poster */}
        <div 
          className="absolute -bottom-16 -left-16 sm:-bottom-24 sm:-left-20 w-[320px] sm:w-[500px] md:w-[650px] h-[220px] sm:h-[320px] md:h-[400px] rounded-tr-[100px] sm:rounded-tr-[160px] border-t-2 border-[#8A253A]/80 -rotate-3 opacity-95 shadow-[0_25px_60px_rgba(53,10,19,0.3)]"
          style={{
            background: "linear-gradient(145deg, #631B27 0%, #430E18 60%, #2A060E 100%)"
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF4D6A]/70 to-transparent" />
        </div>

        {/* Ambient Warm Burgundy Bloom in bottom right */}
        <div 
          className="absolute -bottom-24 right-0 w-[450px] h-[350px] rounded-full blur-[140px] opacity-25"
          style={{
            background: "radial-gradient(circle, #631B27 0%, transparent 70%)"
          }}
        />
      </div>

      {/* ======================================================== */}
      {/* 2. HERO CONTENT WITH BALANCED BONE + BURGUNDY THEME      */}
      {/* ======================================================== */}
      <motion.div 
        className="w-full max-w-4xl flex flex-col items-center justify-center text-center z-10 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Architectural Pill Badge */}
        <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDE6DC] border border-[#631B27]/30 text-[#631B27] font-mono text-[11px] uppercase tracking-widest font-bold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#631B27] animate-pulse" />
            Digital Engineering & AI Solutions
          </span>
        </motion.div>

        {/* Centered Main Headline in Deep Burgundy */}
        <motion.h1 
          variants={itemVariants} 
          className="font-hero-mobile text-3xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[1.12] sm:leading-[1.08] text-[#4A0E18] mb-5 sm:mb-7 tracking-tight font-extrabold max-w-4xl text-balance px-2"
        >
          We build <span className="text-[#631B27] underline decoration-[#631B27]/40 decoration-wavy decoration-1 underline-offset-8">digital experiences</span> that move businesses forward.
        </motion.h1>
        
        {/* Centered Subtitle in Burgundy */}
        <motion.p 
          variants={itemVariants} 
          className="font-body-lg text-base sm:text-xl md:text-2xl text-[#7E2535] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance px-2 font-medium"
        >
          Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
        </motion.p>
        
        {/* Centered Action Buttons with Burgundy Duality */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-4"
        >
          <Button 
            href="#contact" 
            variant="primary" 
            className="w-full sm:w-auto justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full shadow-[0_10px_30px_rgba(99,27,39,0.3)] hover:shadow-[0_15px_40px_rgba(99,27,39,0.45)] font-semibold border border-[#7E2535]"
          >
            Start a Project  
          </Button>
          <Button 
            href="#work" 
            variant="burgundyOutline" 
            className="w-full sm:w-auto justify-center px-8 sm:px-9 py-3.5 sm:py-4 rounded-full"
          >
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}