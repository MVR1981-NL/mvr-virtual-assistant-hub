import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { LEGAL } from "@/content/legal";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy-verklaring")({
  head: () => pageHead("Privacyverklaring | MVR Logistiek & Douane", "Hoe MVR omgaat met persoonsgegevens, cookies en jouw rechten."),
  component: () => <LegalPage title="Privacyverklaring" blocks={LEGAL.privacy} />,
});
