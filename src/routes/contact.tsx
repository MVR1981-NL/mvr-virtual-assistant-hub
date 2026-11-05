import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import { LeadForm } from "@/components/site/forms";
import { pageHead, SITE } from "@/lib/site";

const search = z.object({ type: z.enum(["check", "capaciteit", "vraag"]).optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: search,
  head: () => pageHead(
    "Contact & gratis check | MVR Logistiek & Douane",
    "Vraag de gratis check aan of vertel welke logistieke of douane-werkzaamheden blijven liggen. Reactie van Marcel persoonlijk, ook via WhatsApp.", "/contact"),
  component: Contact,
});

function Contact() {
  const { type } = Route.useSearch();
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Waar kan ik je mee helpen?" intro="Kies wat het beste bij je situatie past. Na je aanvraag neem ik persoonlijk contact met je op om te kijken of er een match is." />
      <Section className="-mt-12 pt-0 md:pt-0">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2"><LeadForm key={type} initialType={type ?? "check"} /></div>
          <aside className="space-y-4">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-xl bg-whatsapp p-5 text-whatsapp-foreground shadow-card">
              <MessageCircle className="h-7 w-7" /><span><span className="block font-semibold">WhatsApp</span><span className="text-sm opacity-90">Snel even schakelen</span></span>
            </a>
            <div className="space-y-4 rounded-xl border bg-card p-6 text-sm">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary"><Mail className="h-5 w-5 text-primary" />{SITE.email}</a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 hover:text-primary"><Phone className="h-5 w-5 text-primary" />{SITE.phoneDisplay}</a>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary"><Linkedin className="h-5 w-5 text-primary" />LinkedIn</a>
              <p className="border-t pt-4 text-muted-foreground">Telefonisch contact bij voorkeur op afspraak. Werkzaamheden worden op afgesproken momenten uitgevoerd.</p>
            </div>
          </aside>
        </div>
      </Section>
    </SiteLayout>
  );
}
