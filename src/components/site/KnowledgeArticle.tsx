import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/SiteLayout";
import type { KnowledgeArticle as Article } from "@/lib/articles";
import { BASE_URL, pageHead, SITE } from "@/lib/site";

export function articleHead(article: Article) {
  const head = pageHead(`${article.title} | MVR`, article.description, article.path);
  return {
    ...head,
    meta: head.meta.map((meta) => meta.property === "og:type" ? { ...meta, content: "article" } : meta),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article",
      headline: article.title, description: article.description,
      mainEntityOfPage: BASE_URL + article.path, inLanguage: "nl-NL",
      author: { "@type": "Person", name: "Marcel van Roosendaal", url: SITE.linkedin },
      publisher: { "@type": "Organization", name: "MVR Virtual Assistant", url: BASE_URL },
    }) }],
  };
}

export function KnowledgeArticle({ article }: { article: Article }) {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
        <Button asChild variant="link" className="mb-8 h-auto px-0"><Link to="/actueel"><ArrowLeft />Alle inzichten</Link></Button>
        <header className="border-b pb-10">
          <p className="text-sm font-semibold text-primary">{article.category}</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{article.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>Door Marcel van Roosendaal · MVR</span><span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readTime} leestijd</span>
          </div>
        </header>
        <div className="space-y-10 py-10">
          {article.sections.map((section) => <section key={section.title}>
            <h2 className="text-2xl font-bold leading-snug">{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 leading-relaxed text-muted-foreground">{paragraph}</p>)}
            {section.checklist && <ul className="mt-5 space-y-3">{section.checklist.map((item) => <li key={item} className="flex gap-3 leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{item}</span></li>)}</ul>}
          </section>)}
        </div>
        <aside className="border-y py-8">
          <h2 className="text-2xl font-bold">Welke werkzaamheden blijven bij jou liggen?</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{article.takeaway}</p>
          <Button asChild className="mt-6 h-auto whitespace-normal py-3"><Link to="/contact" search={{ type: "check" }}>Bespreek mijn situatie<ArrowRight /></Link></Button>
          <p className="mt-3 text-sm text-muted-foreground">Vrijblijvend, met Marcel persoonlijk.</p>
        </aside>
        <Button asChild variant="link" className="mt-6 h-auto whitespace-normal px-0"><Link to="/douane-administratie">Meer over douane-ondersteuning<ArrowRight /></Link></Button>
      </article>
    </SiteLayout>
  );
}