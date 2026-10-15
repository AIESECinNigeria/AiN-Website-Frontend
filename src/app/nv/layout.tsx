import type { ReactNode } from "react";
import NvContextProvider from "@/legacy/nv/Context/NvContext";

export default function NvLayout({ children }: { children: ReactNode }) {
  return <NvContextProvider>{children}</NvContextProvider>;
}
