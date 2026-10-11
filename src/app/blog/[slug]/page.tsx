import BlogArticle from "@/components/blog/BlogArticle";

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  await params;
  return <BlogArticle />;
}
