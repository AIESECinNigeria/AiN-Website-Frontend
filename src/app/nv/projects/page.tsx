import type { Metadata } from "next";
import NvProjects from "@/legacy/nv/Pages/NvProjects/NvProjects";

export const metadata: Metadata = {
  title: "Projects — National Volunteer | AIESEC in Nigeria",
};

export default function Page() {
  return <NvProjects />;
}
