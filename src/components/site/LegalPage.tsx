import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import type { Block } from "@/content/legal";

export function LegalPage({ title, blocks }: { title: string; blocks: Block[] }) {
  return (
    <SiteLayout>
      <PageHero eyebrow="Juridisch" title={title} />
      <Section>
        <article className="mx-auto max-w-3xl space-y-4 text-muted-foreground">
          {blocks.map(([kind, text], i) =>
            kind === "h" ? <h2 key={i} className="pt-6 text-2xl font-bold text-foreground">{text}</h2>
            : kind === "li" ? <p key={i} className="pl-5 before:mr-2 before:content-['•']">{text}</p>
            : <p key={i} className={text.endsWith(":") ? "pt-2 font-semibold text-foreground" : ""}>{text}</p>,
          )}
        </article>
      </Section>
    </SiteLayout>
  );
}
