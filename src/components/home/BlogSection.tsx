import Link from "next/link";
import CloudImage from "@/components/CloudImage";

interface Post {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageId: string;
  href: string;
}

const posts: Post[] = [
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "ain/home/blog-1",
    href: "/blog",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "ain/home/blog-2",
    href: "/blog",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "ain/home/blog-3",
    href: "/blog",
  },
];

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

      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.imageId} href={post.href} className="group block">
            <div className="overflow-hidden rounded-xl">
              <CloudImage
                id={post.imageId}
                alt={post.title}
                className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
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

      <div className="mt-10 flex justify-center lg:hidden">
        <ReadMoreButton />
      </div>
    </section>
  );
}
