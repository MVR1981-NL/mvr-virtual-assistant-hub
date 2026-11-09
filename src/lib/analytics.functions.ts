import { createServerFn } from "@tanstack/react-start";

// GA4 Measurement IDs are public; only the ID is returned.
export const getAnalyticsId = createServerFn({ method: "GET" }).handler(async () => {
  const id = process.env["GOOGLE_ANALYTICS_MEASUREMENT_ID"] ?? "";
  return { id: /^G-[A-Z0-9]+$/i.test(id.trim()) ? id.trim() : null };
});
