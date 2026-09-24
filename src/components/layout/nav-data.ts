export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Membership", href: "/membership" },
];

export const programLinks = [
  {
    label: "Global Volunteer",
    href: "/programs/global-volunteer",
    description: "Short-term volunteer projects tackling the SDGs abroad.",
  },
  {
    label: "Global Talent",
    href: "/programs/global-talent",
    description: "Paid professional internships with international companies.",
  },
  {
    label: "Global Teacher",
    href: "/programs/global-teacher",
    description: "Teaching internships that build cross-cultural classrooms.",
  },
  {
    label: "National Volunteer",
    href: "/programs/national-volunteer",
    description: "Volunteer projects with organizations here in Nigeria.",
  },
];

export const transparentNavRoutes: string[] = ["/blog"];


export function isNavHiddenRoute(pathname: string): boolean {
  return pathname.startsWith("/blog/") && pathname !== "/blog/";
}