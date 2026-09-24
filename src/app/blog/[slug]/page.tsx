import { notFound } from "next/navigation";
import BlogDetail from "@/components/blog/BlogDetail";
import { blogPosts } from "@/components/blog/blog-data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
}