import Link from "next/link";
// import CloudImage from "@/components/CloudImage";
import BlogGrid from "@/components/blog/BlogGrid"; 

// interface Post {
//   title: string;
//   author: string;
//   date: string;
//   excerpt: string;
//   imageId: string;
//   href: string;
// }

// const posts: Post[] = [ ...the three posts... ];

function ReadMoreButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/blog"
      className={`inline-flex items-center justify-center rounded-full bg-aiesec-blue px-7 py-3 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90 ${className}`}
    >
      Read More
    </Link>
  );
}

export default function BlogSection() {
  return (
    <section className="px-6 py-14 lg:px-20 lg:py-20">
      <div className="flex items-center justify-between">
        <h2 className="w-full text-center text-3xl font-bold text-aiesec-blue lg:w-auto lg:text-left lg:text-4xl">
          Blog
        </h2>
        <ReadMoreButton className="hidden lg:inline-flex" />
      </div>

      <div className="mt-8">
        <BlogGrid embedded limit={3} />
      </div>

      {/* Colleague's original grid, replaced by BlogGrid
      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Link key={`${post.title}-${index}`} href={post.href} className="group block">
            <div className="overflow-hidden rounded-xl">
              <CloudImage
                id={post.imageId}
                alt={post.title}
                className="aspect-[434/278] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm italic text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <h3 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{post.excerpt}</p>
          </Link>
        ))}
      </div>
      */}

      <div className="mt-10 flex justify-center lg:hidden">
        <ReadMoreButton />
      </div>
    </section>
  );
}