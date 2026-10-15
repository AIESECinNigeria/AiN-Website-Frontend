import type { Metadata } from "next";
import FormPage from "@/legacy/ogx/Pages/ExchangeForm/FormPage";

export const metadata: Metadata = { title: "Apply — Global Exchange | AIESEC in Nigeria" };

export default function Page() {
  return <FormPage />;
}
