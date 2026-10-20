import Link from "next/link";

export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";
  const subColor = variant === "light" ? "text-white/70" : "text-gray-500";

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="AIESEC in Nigeria home">
      <span className={`text-2xl font-black tracking-tight ${textColor}`}>
        AIESEC
      </span>
      <span className={`text-xs font-bold uppercase leading-tight ${subColor}`}>
        in
        <br />
        Nigeria
      </span>
    </Link>
  );
}
