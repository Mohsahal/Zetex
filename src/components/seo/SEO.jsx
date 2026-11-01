import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ 
  title = "Zetex — Digital Solutions", 
  description = "Software, AI and digital solutions designed to turn ambitious ideas into powerful products.", 
  keywords = "web development, AI, mobile apps, digital agency, custom software, automation", 
  image = "/og-image.jpg", 
  url = "https://zetex.studio",
  type = "website"
}) {
  const fullTitle = title === "Zetex — Digital Solutions" ? title : `${title} | Zetex — Digital Solutions`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph tags for social media sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Zetex Digital Solutions" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
