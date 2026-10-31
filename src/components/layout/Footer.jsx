import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { footerLinks } from "../../data/navigation";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        navigate("/" + href);
        return;
      }
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href && href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#EDE6DC] text-[#631B27] w-full py-12 md:py-16 border-t border-[#DFD7CA]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 px-4 sm:px-6 md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-4 mb-6 md:mb-0 flex flex-col justify-between">
          <div>
            <button
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex items-center mb-4 inline-flex text-left cursor-pointer hover:opacity-85 transition-opacity"
              aria-label="Zetex Home"
            >
              <div className="h-8 sm:h-10 flex items-center">
                <img 
                  src="/images/zetex-dark.png" 
                  alt="Zetex Logo" 
                  className="h-full w-auto max-w-[120px] sm:max-w-[150px] object-contain drop-shadow-xs" 
                />
              </div>
            </button>
            <p className="font-body-md text-sm text-[#7E2535] max-w-xs mb-6 leading-relaxed">
              Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="font-body-md text-xs text-[#8C3042]">
              © {new Date().getFullYear()} Zetex Digital Solutions. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#8C3042] font-body-md">
              <Link to="/terms" className="hover:text-[#4A0E18] transition-colors hover:underline">
                Terms of Service
              </Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-[#4A0E18] transition-colors hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
          {/* Navigation */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#4A0E18] mb-1 uppercase tracking-wider font-bold">Navigation</span>
            {footerLinks.navigation.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-[#631B27] hover:text-[#4A0E18] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#4A0E18] mb-1 uppercase tracking-wider font-bold">Company</span>
            {footerLinks.company.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-left text-[#631B27] hover:text-[#4A0E18] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Connect / Contact */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#4A0E18] mb-1 uppercase tracking-wider font-bold">Direct</span>
            <button
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-left text-[#631B27] hover:text-[#4A0E18] transition-all duration-300 hover:translate-x-1 cursor-pointer text-sm font-medium"
            >
              Contact Us
            </button>
            <a
              href="tel:+918714196266"
              className="text-[#631B27] hover:text-[#4A0E18] transition-all duration-300 hover:translate-x-1 text-sm inline-flex items-center gap-1.5 font-medium"
            >
              +91 87141 96266
            </a>
            <a
              href="mailto:hello@zetex.studio"
              className="text-[#631B27] hover:text-[#4A0E18] transition-all duration-300 hover:translate-x-1 text-sm break-all font-medium"
            >
              hello@zetex.studio
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-2.5 font-body-md text-sm">
            <span className="font-mono text-xs text-[#4A0E18] mb-1 uppercase tracking-wider font-bold">Social</span>
            {footerLinks.social.map((item) => {
              const isLinkedIn = item.name.toLowerCase().includes("linkedin");
              const isInstagram = item.name.toLowerCase().includes("instagram");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#631B27] hover:text-[#4A0E18] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 text-sm font-medium"
                >
                  {isLinkedIn && <Linkedin className="w-4 h-4 shrink-0" />}
                  {isInstagram && <Instagram className="w-4 h-4 shrink-0" />}
                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}