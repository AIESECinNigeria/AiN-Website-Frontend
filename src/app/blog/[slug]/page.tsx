import BlogArticle from "@/components/blog/BlogArticle";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogArticleBySlug, getRelatedBlogArticles } from "@/lib/blog/sanity";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  if (!article) notFound();
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.postedDate ?? undefined,
      images: article.coverImage ? [{ url: article.coverImage.url, alt: article.title }] : [],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getBlogArticleBySlug(slug);
  if (!article) notFound();
  const related = await getRelatedBlogArticles(slug);
  return <BlogArticle article={article} related={related} />;
}
