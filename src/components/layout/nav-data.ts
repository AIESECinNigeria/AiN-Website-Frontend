export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Membership", href: "/membership" },
];

export const programLinks = [
  {
    label: "Global Exchange",
    href: "/ogx",
    description:
      "Volunteer, intern, or teach abroad through our outgoing global exchange programs.",
  },
  {
    label: "National Volunteer",
    href: "/nv",
    description: "Volunteer on social-impact projects across Nigeria.",
  },
  {
    label: "Leadership Summit",
    href: "/leadership-summit",
    description: "Grow as a leader at our flagship leadership gathering.",
  },
  {
    label: "YouthSpeak Forum",
    href: "/ysf",
    description: "Where young people shape the conversation on global issues.",
  },
  {
    label: "Global Money Week",
    href: "/gmw",
    description: "Our youth campaign for financial literacy and smart money habits.",
  },
  {
    label: "International Youth Day",
    href: "/iyd",
    description: "Celebrating young changemakers and the impact they create.",
  },
];

export const transparentNavRoutes: string[] = ["/blog"];


export function isNavHiddenRoute(pathname: string): boolean {
  return pathname.startsWith("/blog/") && pathname !== "/blog/";
}