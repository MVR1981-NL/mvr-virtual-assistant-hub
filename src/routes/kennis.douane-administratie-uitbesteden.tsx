import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeArticle, articleHead } from "@/components/site/KnowledgeArticle";
import { ARTICLES } from "@/lib/articles";

const article = ARTICLES[0];
export const Route = createFileRoute("/kennis/douane-administratie-uitbesteden")({
  head: () => articleHead(article),
  component: () => <KnowledgeArticle article={article} />,
});