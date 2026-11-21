import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Fuel, ClipboardCheck, Scale, Clock, Timer, ArrowRight, Check } from "lucide-react";
import { SiteLayout, Section, Eyebrow } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/transport-tools")({
  head: () => pageHead(
    "Gratis Transport & Logistiek Tools | MVR",
    "Pallet Calculator, Transportkosten Calculator, CMR Checklist, Incoterms Kiezer, Rij- en Rusttijden Check en Wachttijd Calculator. Gratis voor transporteurs en logistieke bedrijven.",
    "/transport-tools",
  ),
  component: TransportTools,
});

const TOOLS = [
  { icon: Package, title: "Pallet Calculator", text: "Hoeveel euro-pallets passen in je trailer? En hoeveel laadmeters is dat?", href: "/pallet-calculator", cta: "Bereken pallets", points: ["Euro-pallet 120 x 80 cm", "Blokpallet 100 x 120 cm", "Laadmeters direct erbij"] },
  { icon: Fuel, title: "Transportkosten Calculator", text: "Wat kost deze rit echt? Diesel, tol, chauffeur en afschrijving.", href: "/transportkosten-calculator", cta: "Bereken ritkosten", points: ["Kostprijs per km", "Per pallet / per rit", "Marge check"] },
  { icon: ClipboardCheck, title: "CMR Checklist", text: "Staat alles op je CMR wat er op moet staan voor vertrek?", href: "/cmr-checklist", cta: "Check mijn CMR", points: ["Verplichte velden", "Foto + handtekening", "Wachttijd log"] },
  { icon: Scale, title: "Incoterms Kiezer", text: "EXW, FOB, DAP of DDP? Wie betaalt, wie regelt, waar gaat risico over?", href: "/incoterms-kiezer", cta: "Kies mijn Incoterm", points: ["Wie betaalt transport?", "Wie doet douane?", "Waar gaat risico over?"] },
  { icon: Clock, title: "Rij- en Rusttijden Check", text: "Mag je chauffeur nog doorrijden? Check rijtijd en verplichte rust.", href: "/rij-rusttijden-check", cta: "Check rijtijd", points: ["9u / 10u regel", "56u weekmax", "11u rust"] },
  { icon: Timer, title: "Wachttijd Calculator", text: "Hoeveel wachttijd kan je factureren? Log aankomst en vertrek.", href: "/wachttijd-calculator", cta: "Bereken wachttijd", points: ["Vrije wachttijd instelbaar", "Uurtarief instelbaar", "Direct bedrag voor factuur"] },
];

function TransportTools() {
  return (
    <SiteLayout>
      <Section>
        <img src="/site-assets/transport-truck.jpg" alt="Truck op snelweg bij zonsondergang" className="w-full h-64 object-cover rounded-2xl mb-8" />
        <Eyebrow>Gratis tools - Transport &amp; Logistiek</Eyebrow>
        <h1 className="mt-3 max-w-2xl text-3xl font-bold md:text-4xl">Handige tools voor transporteurs en logistieke bedrijven</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">Zes gratis tools voor planners, chauffeurs en logistieke bedrijven. Direct te gebruiken, zonder account. Gemaakt vanuit de praktijk.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
              <Button asChild className="mt-5"><Link to={t.href}>{t.cta} <ArrowRight /></Link></Button>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
