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

export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
