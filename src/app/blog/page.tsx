import BlogHero from "@/components/blog/BlogHero";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllArticles } from "@/lib/sanity/blog";

export const revalidate = 60;

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <>
      <BlogHero />
      <BlogGrid articles={articles} />
    </>
  );
}