/** Cloudinary image by public ID. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and
 * replace the IDs in each page with the IDs uploaded to your Cloudinary account.
 *
 * Pass `crop` + `ar` to have Cloudinary deliver the image already cropped to the
 * exact aspect ratio of its slot (so uploads of any size match the design with
 * no distortion). `gravity` controls what the crop keeps (defaults to smart
 * `auto`); `grayscale` applies the black-and-white treatment server-side.
 *
 * SVG ids (ending in ".svg") are delivered untouched, since the photo
 * transforms below can break vector files.
 */
export default function CloudImage({
  id,
  alt,
  className = "",
  format = "auto",
  crop,
  ar,
  gravity = "auto",
  grayscale = false,
  width = 1000,
  priority = false,
}: {
  id: string;
  alt: string;
  className?: string;
  format?: "auto" | "webp";
  /** Cloudinary crop mode. Omit to deliver the image untouched. */
  crop?: "fill" | "lfill" | "fit" | "pad" | "thumb" | "scale";
  /** Target aspect ratio, e.g. "3:4", "1:1", "3:2". Used with `crop`. */
  ar?: string;
  /** What a `fill`/`thumb` crop should keep. */
  gravity?: "auto" | "face" | "faces" | "center";
  /** Deliver the image in black and white. */
  grayscale?: boolean;
  /** Source width Cloudinary renders at when cropping. */
  width?: number;
  /** Load immediately instead of lazily. Use for above-the-fold images. */
  priority?: boolean;
}) {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const isSvg = id.toLowerCase().endsWith(".svg");

  const parts: string[] = [format === "webp" ? "f_webp" : "f_auto", "q_auto"];
  if (crop) {
    parts.push(`c_${crop}`, `w_${width}`);
    if (ar) parts.push(`ar_${ar}`);
    parts.push(`g_${gravity}`);
  }
  if (grayscale) parts.push("e_grayscale");
  const transform = isSvg ? "" : parts.join(",");

  if (!cloud) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-slate-200 to-slate-400 ${className}`}
      />
    );
  }

  const path = transform ? `${transform}/${id}` : id;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://res.cloudinary.com/${cloud}/image/upload/${path}`}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}