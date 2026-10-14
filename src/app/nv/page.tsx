import type { Metadata } from "next";
import NvHome from "@/legacy/nv/Pages/NvHome/NvHome";

export const metadata: Metadata = {
  title: "National Volunteer | AIESEC in Nigeria",
};

export default function Page() {
  return <NvHome />;
}
