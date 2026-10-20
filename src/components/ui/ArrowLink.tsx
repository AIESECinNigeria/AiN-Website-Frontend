import Link from "next/link";

/** Text link with a trailing up-right arrow. Used for "Find Out More",
 *  "Learn More", "Apply Now" etc. Colour is inherited via currentColor,
 *  so set the text colour on the element via className. */
export default function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-semibold ${className}`}
    >
      <span>{children}</span>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-[1em] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <path
          d="M7 17L17 7M17 7H8M17 7V16"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
