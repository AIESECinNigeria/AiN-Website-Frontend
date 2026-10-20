import type { Metadata } from "next";
import NvStatesForm from "@/legacy/nv/Containers/NvStatesForm/NvStatesForm";

export const metadata: Metadata = {
  title: "National Volunteer Sign Up | AIESEC in Nigeria",
};

export default function Page() {
  return <NvStatesForm />;
}
