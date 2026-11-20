import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, FileText, Map, Leaf, ArrowRight, Check } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/douane-tools")({
  head: () => pageHead(
    "Gratis Douane Tools | MVR",
    "Importkosten Calculator, DMS 4.1 & ICS2 Checklist, Persoonlijke Import Roadmap en CBAM Check. Gratis voor importeurs en transportbedrijven.",
  ),
  component: DouaneTools,
});

const TOOLS = [
  { icon: Calculator, title: "Importkosten Calculator", text: "Bereken in 1 minuut je invoerrechten, BTW bij import en totale landed cost. Inclusief artikel 23 verlegging.", href: "/importkosten-calculator", cta: "Bereken je importkosten", points: ["Invoerrechten + BTW", "Artikel 23 verlegging", "Totale landed cost"], isPdf: false },
  { icon: FileText, title: "DMS 4.1 & ICS2 Checklist", text: "Vink in 1 minuut af of je aangifte klopt. EORI, HS-code, douanewaarde, ENS-deadline en Portbase-melding.", href: "/dms-ics2-checklist.pdf", cta: "Download gratis checklist", points: ["EORI + HS-code", "ENS-deadline", "Portbase-melding"], isPdf: true },
  { icon: Map, title: "Persoonlijke Import Roadmap", text: "Beantwoord 5 vragen en krijg je eigen importplan: HS-code, tarief, EUDR, EORI en artikel 23 in 1 overzicht.", href: "/import-roadmap", cta: "Maak mijn roadmap", points: ["Persoonlijk voor jouw product en land", "In 2 minuten klaar", "Deel hem met je collega"], isPdf: false },
  { icon: Leaf, title: "CBAM Check", text: "Importeer je staal, aluminium of cement? Check in 2 minuten of CBAM voor jou geldt of je vrijgesteld bent.", href: "/cbam-check", cta: "Check mijn CBAM status", points: ["50 ton drempel check", "Direct weten of je moet aanmelden", "Deadlines tot 30 september 2027"], isPdf: false },
];

function DouaneTools() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tools - Douane</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Gratis Douane Tools</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Vier gratis tools voor importeurs en transportbedrijven. Direct te gebruiken, zonder account. Bereken, check, plan en controleer je import.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {TOOLS.map((t) => (
            <div key={t.title} className="rounded-xl border bg-card p-7 shadow-card">
              <t.icon className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-xl font-semibold">{t.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>
                ))}
              </ul>
              {t.isPdf ? (
                <Button asChild className="mt-5"><a href={t.href} target="_blank" rel="noreferrer">{t.cta} <ArrowRight /></a></Button>
              ) : (
                <Button asChild className="mt-5"><Link to={t.href}>{t.cta} <ArrowRight /></Link></Button>
              )}
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
