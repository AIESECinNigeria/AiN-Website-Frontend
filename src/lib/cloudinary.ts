/**
 * Cloudinary URL helper for the ported program pages (gmw / nv / ysf / iyd / ls).
 * These legacy pages originally imported local image files; during the port the
 * images were migrated to Cloudinary. `cld("ain/<page>/<name>")` returns the
 * delivery URL so the original <img>/background markup stays identical except
 * for the source. Upload the images listed in CLOUDINARY-IMAGE-MANIFEST.md under
 * these public IDs.
 */
export const CLOUDINARY_CLOUD =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "njljiov2";

export function cld(id: string, transform = "f_auto,q_auto"): string {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload/${transform}/${id}`;
}
