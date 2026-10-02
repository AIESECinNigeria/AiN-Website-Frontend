/** Cloudinary image by public ID. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and
 * replace the IDs in each page with the IDs uploaded to your Cloudinary account.
 */
export default function CloudImage({
  id,
  alt,
  className = "",
  format = "auto",
}: {
  id: string;
  alt: string;
  className?: string;
  format?: "auto" | "webp";
}) {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const optimization = format === "webp" ? "f_webp,q_auto" : "f_auto,q_auto";
  if (!cloud) {
    return <div role="img" aria-label={alt} className={`bg-gradient-to-br from-slate-200 to-slate-400 ${className}`} />;
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://res.cloudinary.com/${cloud}/image/upload/${optimization}/${id}`}
      alt={alt}
      loading="lazy"
      className={className}
    />
  );
}
