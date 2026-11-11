import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeArticle, articleHead } from "@/components/site/KnowledgeArticle";
import { ARTICLES } from "@/lib/articles";

const article = ARTICLES[1];
export const Route = createFileRoute("/kennis/logistieke-administratie-achterstand")({
  head: () => articleHead(article),
  component: () => <KnowledgeArticle article={article} />,
});