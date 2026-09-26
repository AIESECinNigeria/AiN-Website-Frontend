export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Membership", href: "/membership" },
];

export const programLinks = [
  {
    label: "Global Volunteer",
    href: "/ogx",
  },
  {
    label: "Global Talent",
    href: "/ogx",
  },
  {
    label: "Global Teacher",
    href: "/ogx",
  },
  {
    label: "National Volunteer",
    href: "/nv",
  },
   {
    label: "Youth Speak Forum",
    href: "/ysf",
  },
   {
    label: "Global Money Week",
    href: "/gmw",
  },
   {
    label: "International Youth Day",
    href: "/iyd",
  },
   {
    label: "Leadership Summit",
    href: "/leadership-summit",
  },
];

export const transparentNavRoutes: string[] = ["/blog"];


export function isNavHiddenRoute(pathname: string): boolean {
  return pathname.startsWith("/blog/") && pathname !== "/blog/";
}