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
    description: "Explore global volunteer, talent, and teacher exchanges.",
  },
  {
    label: "Global Talent",
    href: "/ogx",
    description: "Paid professional internships with international companies.",
  },
  {
    label: "Global Teacher",
    href: "/ogx",
    description: "Teaching internships that build cross-cultural classrooms.",
  },
  {
    label: "National Volunteer",
    href: "/ogx",
    description: "Volunteer projects with organizations here in Nigeria.",
  },
];

export const transparentNavRoutes: string[] = ["/blog"];


export function isNavHiddenRoute(pathname: string): boolean {
  return pathname.startsWith("/blog/") && pathname !== "/blog/";
}