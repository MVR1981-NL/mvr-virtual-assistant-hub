import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Mail, Phone, Linkedin, MessageCircle, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-navy-foreground/10 bg-navy text-navy-foreground">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Link to="/" className="flex items-center" aria-label="MVR home">
            <img src={SITE.logo} alt="MVR Logistiek & Douane Ondersteuning" className="h-9 w-auto" />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="text-sm font-medium text-navy-muted transition-colors hover:text-navy-foreground" activeProps={{ className: "text-navy-foreground" }}>
                {n.label}
              </Link>
            ))}
            <Link to="/contact" search={{ type: "check" }} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
              Gratis check
            </Link>
          </nav>
          <button className="md:hidden" aria-label="Menu openen of sluiten" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-navy-foreground/10 px-5 pb-5 md:hidden">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="block border-b border-navy-foreground/10 py-3 text-base font-medium">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="block border-b border-navy-foreground/10 py-3 text-base font-medium">Contact</Link>
            <Link to="/contact" search={{ type: "check" }} onClick={() => setOpen(false)} className="mt-4 block rounded-md bg-primary px-4 py-3 text-center font-semibold text-primary-foreground">
              Doe de gratis check
            </Link>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={SITE.logo} alt="MVR" className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-navy-muted">
              Specialistische extra capaciteit voor importeurs, handelsbedrijven en logistieke ondernemingen. Flexibel, op afstand en op afgesproken momenten.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Navigatie</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy-muted">
              {NAV.map((n) => (<li key={n.to}><Link to={n.to} className="hover:text-navy-foreground">{n.label}</Link></li>))}
              <li><Link to="/douane-administratie" className="hover:text-navy-foreground">Douane-administratie</Link></li>
              <li><Link to="/contact" className="hover:text-navy-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-muted">
              <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-navy-foreground"><Mail className="h-4 w-4" />{SITE.email}</a></li>
              <li><a href={`tel:${SITE.phone}`} className="flex items-center gap-2 hover:text-navy-foreground"><Phone className="h-4 w-4" />{SITE.phoneDisplay}</a></li>
              <li><a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-navy-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-navy-foreground"><Linkedin className="h-4 w-4" />LinkedIn</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" />{SITE.place}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-foreground/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-navy-muted md:flex-row md:justify-between">
            <span>© {new Date().getFullYear()} {SITE.name} · KvK {SITE.kvk}</span>
            <span className="flex gap-4">
              <Link to="/privacy-verklaring" className="hover:text-navy-foreground">Privacyverklaring</Link>
              <Link to="/algemene-voorwaarden" className="hover:text-navy-foreground">Algemene voorwaarden</Link>
            </span>
          </div>
        </div>
      </footer>

      <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="Stuur een WhatsApp-bericht" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 font-semibold text-whatsapp-foreground shadow-card transition hover:scale-105">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-5 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{children}</p>;
}

export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="bg-navy px-5 pb-20 pt-16 text-navy-foreground md:pt-24">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-navy-muted">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link to="/contact" search={{ type: "check" }} className="rounded-md bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-card transition hover:brightness-110">
        Doe de gratis check
      </Link>
      <Link to="/contact" search={{ type: "capaciteit" }} className={`rounded-md border px-6 py-3.5 font-semibold transition ${dark ? "border-navy-foreground/30 text-navy-foreground hover:bg-navy-foreground/10" : "border-foreground/20 text-foreground hover:bg-secondary"}`}>
        Ik heb capaciteit nodig
      </Link>
    </div>
  );
}

export function CtaBand({ title = "Waar verlies jij nu capaciteit?", text = "Laat MVR eerst meekijken. We bepalen samen welke werkzaamheden logisch overdraagbaar zijn en hoeveel capaciteit daarbij past. Vrijblijvend en zonder verplichtingen." }: { title?: string; text?: string }) {
  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-navy px-8 py-14 text-navy-foreground md:px-14">
        <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-navy-muted">{text}</p>
        <CtaButtons dark />
      </div>
    </section>
  );
}
