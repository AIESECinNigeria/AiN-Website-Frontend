import type { Metadata } from "next";
import NvSignUp from "@/legacy/nv/Containers/NvSignUp/NvSignUp";

export const metadata: Metadata = {
  title: "Sign Up — National Volunteer | AIESEC in Nigeria",
};

export default function Page() {
  return <NvSignUp />;
}
