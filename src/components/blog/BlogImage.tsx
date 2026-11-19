import Image from "next/image";
import type { BlogImageData } from "@/lib/blog/types";

export default function BlogImage({
  image,
  alt,
  className,
  sizes = "(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) 50vw, 33vw",
  loading = "lazy",
}: {
  image: BlogImageData | null | undefined;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: "eager" | "lazy";
}) {
  if (!image?.url) return null;
  return (
    <Image
      src={image.url}
      alt={image.alt || alt}
      width={image.width || 1352}
      height={image.height || 900}
      sizes={sizes}
      loading={loading}
      className={className}
    />
  );
}
