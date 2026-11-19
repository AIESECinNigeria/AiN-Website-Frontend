import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { getBlogArticles } from "@/lib/blog/sanity";

export default async function BlogPage() {
  const articles = await getBlogArticles();
  return (
    <>
      <BlogHero />
      <BlogGrid articles={articles} />
    </>
  );
}
