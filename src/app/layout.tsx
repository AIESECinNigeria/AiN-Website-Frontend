import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "AIESEC in Nigeria",
  description:
    "AIESEC in Nigeria develops youth leadership through global volunteer, talent, and teacher exchange programs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans overflow-x-hidden">
        <SiteChrome navbar={<Navbar />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
