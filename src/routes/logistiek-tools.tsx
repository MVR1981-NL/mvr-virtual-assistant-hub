import { createFileRoute, Link } from "@tanstack/react-router";
import { Warehouse, ClipboardCheck, RotateCcw, ArrowRight, Check } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/logistiek-tools")({
  head: () => pageHead(
    "Gratis Logistiek Tools | MVR",
    "Opslagkosten Calculator, Orderpick Checklist en Retourkosten Calculator. Gratis voor logistieke bedrijven.",
  ),
  component: LogistiekTools,
});

const TOOLS = [
  { icon: Warehouse, title: "Opslagkosten Calculator", text: "Wat kost je palletplek per maand echt? Bereken je totale opslagkosten, per pallet en per jaar.", href: "/opslagkosten-calculator", cta: "Bereken opslagkosten", points: ["Kosten per palletplaats", "Totale kosten per maand", "Kosten per jaar"] },
  { icon: ClipboardCheck, title: "Orderpick Checklist", text: "Staat je order compleet voor verzending? Vink af en voorkom fouten en retouren.", href: "/orderpick-checklist", cta: "Check mijn order", points: ["8 controlepunten", "Direct % compleet", "Voorkom retouren"] },
  { icon: RotateCcw, title: "Retourkosten Calculator", text: "Wat kost die retour je echt? Verzendkosten, arbeid, inspectie en herverpakking in 1 overzicht.", href: "/retourkosten-calculator", cta: "Bereken retourkosten", points: ["Kosten per retour", "Arbeid + verzending", "Kosten per jaar"] },
];

function LogistiekTools() {
  return (
    <SiteLayout>
      <Section>
        <Eyebrow>Gratis tools - Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Gratis Logistiek Tools</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Drie gratis tools voor magazijn, orderpickers en logistieke bedrijven. Direct te gebruiken, zonder account.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((t) => (
            <div key={t.title} className="rounded-xl border bg-card p-7 shadow-card">
              <t.icon className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-xl font-semibold">{t.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.points.map((p) => (<li key={p} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>))}
              </ul>
              <Button asChild className="mt-5"><Link to={t.href}>{t.cta} <ArrowRight /></Link></Button>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
