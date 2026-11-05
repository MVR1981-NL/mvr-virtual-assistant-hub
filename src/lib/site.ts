export const SITE = {
  name: "MVR | Logistiek & Douane Ondersteuning",
  phone: "+31648401985",
  phoneDisplay: "+31 6 48 40 19 85",
  email: "info@mvrvirtualassistant.nl",
  linkedin: "https://linkedin.com/in/marcel-van-roosendaal",
  whatsapp: "https://wa.me/31648401985?text=" + encodeURIComponent("Hallo Marcel, ik heb een vraag over logistieke/douane ondersteuning."),
  checklistUrl: "https://www.mvrvirtualassistant.nl/_downloads/1f57ff45f7ca00134fcb16c03dcb804a",
  kvk: "42001713",
  place: "Roosendaal, West-Brabant",
  logo: "/site-assets/7678788219ad1506.webp",
};

export const NAV = [
  { to: "/diensten", label: "Diensten" },
  { to: "/tarieven", label: "Tarieven" },
  { to: "/over-mij", label: "Over mij" },
  { to: "/actueel", label: "Actueel" },
  { to: "/faq", label: "FAQ" },
] as const;

export const BASE_URL = "https://mvr-virtual-assistant-hub.lovable.app";

export const BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MVR Logistiek & Douane Ondersteuning",
  description: "Logistieke en douane-administratie, documenten, dossiers en data-entry op afstand voor importeurs, handelsbedrijven en expediteurs.",
  url: BASE_URL,
  telephone: "+31648401985",
  email: "info@mvrvirtualassistant.nl",
  founder: { "@type": "Person", name: "Marcel van Roosendaal", sameAs: "https://linkedin.com/in/marcel-van-roosendaal" },
  address: { "@type": "PostalAddress", addressLocality: "Roosendaal", addressRegion: "Noord-Brabant", addressCountry: "NL" },
  areaServed: { "@type": "Country", name: "Nederland" },
  sameAs: ["https://linkedin.com/in/marcel-van-roosendaal"],
  knowsAbout: ["Douane-administratie", "Import en export", "CMR", "AWB", "Incoterms", "HS-codes", "Logistieke administratie", "Data-entry"],
};

export function pageHead(title: string, description: string, path = "/") {
  const url = BASE_URL + path;
  return {
    links: [{ rel: "canonical", href: url }],
    meta: [
      { property: "og:url", content: url },
      { property: "og:locale", content: "nl_NL" },
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
