import CloudImage from "@/components/CloudImage";

/** Shows a Sanity-hosted image, or the default blog hero when there is none.
 *  Sanity's CDN resizes on request, so `width` keeps the download small. */
export default function BlogImage({
  src,
  alt,
  className,
  loading,
  width = 1200,
}: {
  src: string | null;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  width?: number;
}) {
  if (!src) {
    return <CloudImage id="blogHero" alt={alt} className={className} loading={loading} />;
  }

  const sized = `${src}${src.includes("?") ? "&" : "?"}w=${width}&auto=format&fit=max`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={sized} alt={alt} loading={loading ?? "lazy"} className={className} />
  );
}