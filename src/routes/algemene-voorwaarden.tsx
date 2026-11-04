import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { LEGAL } from "@/content/legal";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => pageHead("Algemene voorwaarden | MVR Logistiek & Douane", "De algemene voorwaarden voor samenwerking met MVR Logistiek & Douane Ondersteuning."),
  component: () => <LegalPage title="Algemene voorwaarden" blocks={LEGAL.voorwaarden} />,
});
