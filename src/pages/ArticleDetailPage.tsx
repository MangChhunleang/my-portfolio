import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { ArrowLeft, Loader2, Calendar } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Section } from "@/components/layout/Section";
import { portfolio } from "@/data/portfolio";

export function ArticleDetailPage() {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const post = portfolio.writing.find((p) => p.slug === slug);

  useEffect(() => {
    async function fetchArticle() {
      if (!slug) return;
      try {
        const response = await fetch(`/articles/${slug}.md`);
        if (!response.ok) throw new Error("Article not found");
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error(err);
        setContent("Failed to load article.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchArticle();
  }, [slug]);

  if (!post) {
    return (
      <Section title="Article not found" className="py-24 text-center">
        <Link to="/writing" className="mt-4 text-primary hover:underline">
          Return to Writing
        </Link>
      </Section>
    );
  }

  return (
    <Section title={post.title} description={post.excerpt} className="pb-24 pt-12" id="article-detail">
      <div className="mb-12">
        <Link
          to="/writing"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to writing
        </Link>

        {/* Not rendering the title here since it's already in the markdown, 
            but we will render the metadata */}
        <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 uppercase tracking-wide">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-medium prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:border prose-img:border-border">
        {isLoading ? (
          <div className="flex h-32 items-center justify-center text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span className="ml-2">Loading article...</span>
          </div>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        )}
      </div>
    </Section>
  );
}
