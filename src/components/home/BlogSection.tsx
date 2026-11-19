import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import { getAllArticles } from "@/lib/sanity/blog";

function ReadMoreButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/blog"
      className={`inline-flex h-11.75 items-center justify-center rounded-pill bg-aiesec-blue px-5 py-3.5 text-base font-medium leading-4.75 text-white transition-colors hover:bg-aiesec-blue/90 lg:h-17 lg:w-44.5 lg:px-8 lg:py-4 lg:text-rd-body-02 ${className}`}
    >
      Read More
    </Link>
  );
}

/** Home page blog teaser: the three most recent posts from Sanity. */
export default async function BlogSection() {
  const posts = (await getAllArticles()).slice(0, 3);

  // Nothing to show yet, so skip the whole section instead of rendering an empty one.
  if (posts.length === 0) return null;

  return (
    <section className="bg-white px-4 pb-10 lg:pb-18.25 lg:px-20">
      <div className="flex items-center justify-between gap-4 [&>a]:hidden lg:[&>a]:inline-flex">
        <h2 className="w-full text-left text-subheading text-aiesec-blue lg:w-auto lg:text-rd-heading-02">
          Blog
        </h2>
        <ReadMoreButton />
      </div>

      <div className="mt-6 grid gap-x-6 gap-y-7.5 lg:mt-12 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <div className="overflow-hidden rounded-20">
              <BlogImage
                src={post.coverImage}
                alt={post.title}
                width={900}
                className="h-57.5 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-70.25"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-1.5 text-body text-aiesec-gray [&>span:first-child]:font-normal [&>span:first-child]:italic [&>span:last-child]:shrink-0">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold leading-6 text-aiesec-heading lg:text-2xl lg:font-bold lg:leading-8 lg:tracking-[-0.01em]">{post.title}</h3>
            <p className="mt-2 line-clamp-3 text-body text-aiesec-gray">{post.excerpt}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6 flex justify-center lg:hidden">
        <ReadMoreButton />
      </div>
    </section>
  );
}