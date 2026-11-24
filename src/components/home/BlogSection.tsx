import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import { getBlogArticles } from "@/lib/blog/sanity";

function ReadMoreButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/blog"
      className={`inline-flex h-11.75 w-29.25 items-center justify-center whitespace-nowrap rounded-pill bg-aiesec-blue px-5 py-3.5 text-base font-medium leading-4.75 text-white transition-colors hover:bg-aiesec-blue/90 lg:h-17 lg:w-44.5 lg:px-8 lg:py-4 lg:text-rd-body-02 lg:text-adaptive-24! lg:leading-[1.5] ${className}`}
    >
      Read More
    </Link>
  );
}

export default async function BlogSection() {
  const posts = await getBlogArticles(3);
  return (
    <section className="bg-white px-4 py-10 lg:px-20 lg:py-21">
      <div className="flex items-center justify-between gap-4 [&>a]:hidden lg:[&>a]:inline-flex">
        <h2 className="w-full text-left text-subheading text-aiesec-blue lg:w-auto lg:text-rd-heading-02 lg:text-adaptive-48! lg:leading-[1.2]">
          Blog
        </h2>
        <ReadMoreButton />
      </div>

      <div className="mt-6 grid gap-x-6 gap-y-7.5 lg:mt-12 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
            <div className="overflow-hidden rounded-20">
              <BlogImage
                image={post.coverImage}
                alt={post.title}
                className="h-57.5 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-70.25"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-1.5 text-body text-aiesec-gray [&>span:first-child]:font-normal [&>span:first-child]:italic [&>span:last-child]:shrink-0 lg:text-adaptive-16 lg:leading-[1.5]">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold leading-6 text-aiesec-heading lg:font-bold lg:tracking-[-0.01em] lg:text-adaptive-24 lg:leading-[1.3333333]">{post.title}</h3>
            <p className="mt-2 line-clamp-3 text-body text-aiesec-gray lg:text-adaptive-16 lg:leading-[1.5]">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center lg:hidden">
        <ReadMoreButton />
      </div>
    </section>
  );
}
