import type { Metadata } from "next";
import GmwHomePageHero from "@/components/gmw/GmwHomePageHero";
import GmwAboutPage from "@/components/gmw/GmwAboutPage";

export const metadata: Metadata = {
  title: "Global Money Week | AIESEC in Nigeria",
};

export default function GmwPage() {
  return (
    <div className="w-full">
      <GmwHomePageHero />
      <GmwAboutPage />
    </div>
  );
}
