import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/articles";
import { SiteLayout, PageHero, Section, CtaBand } from "@/components/site/SiteLayout";
import { pageHead } from "@/lib/site";

export const Route = createFileRoute("/actueel")({
  head: () => pageHead(
    "Actueel in logistiek & douane | MVR",
    "Praktische artikelen over douane-administratie uitbesteden, logistieke achterstanden en data-entry. Van dagelijkse knelpunten naar een duidelijk werkpakket.", "/actueel"),
  component: Actueel,
});

function Actueel() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Kennis" title="Actueel in logistiek & douane" intro="Praktische inzichten over import/export, documenten en douane, geschreven vanuit de dagelijkse praktijk." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6">
          {ARTICLES.map((p) => (
            <article key={p.path} className="rounded-lg border bg-card p-6 md:p-8">
              <p className="text-sm font-semibold text-primary">{p.category}</p>
              <h2 className="mt-3 text-2xl font-bold leading-snug"><Link to={p.path} className="hover:text-primary">{p.title}</Link></h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground"><Clock className="h-4 w-4" />{p.readTime} leestijd</span>
                <Button asChild variant="link" className="px-0"><Link to={p.path}>Lees het artikel<ArrowRight /></Link></Button>
              </div>
            </article>
          ))}
          <p className="rounded-lg bg-accent p-4 text-sm text-accent-foreground"><strong>Let op:</strong> regelgeving en systemen veranderen regelmatig. Controleer bij actuele douane- en importvraagstukken altijd de meest recente officiële informatie.</p>
        </div>
      </Section>
      <CtaBand title="Blijft het werk liggen terwijl de regels doorgaan?" text="Nieuwe regelgeving is één ding. Documenten, dossiers en opvolging op tijd geregeld krijgen is vaak de grotere uitdaging. MVR helpt met specialistische extra capaciteit." />
    </SiteLayout>
  );
}
