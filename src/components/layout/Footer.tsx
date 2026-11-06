import Link from "next/link";
import Image from "next/image";
import CloudImage from "@/components/CloudImage";
import {
  companyLinks,
  forYouthsLinks,
  legalLinks,
  officeAddress,
  socialLinks,
} from "./footer-data";

interface GalleryPhoto {
  src: string;
  alt: string;
}

const galleryPhotos: GalleryPhoto[] = [
  { src: "gallery-1", alt: "AIESEC in Nigeria members at an event" },
  { src: "gallery-2", alt: "AIESEC in Nigeria members at an event" },
  { src: "gallery-3", alt: "AIESEC in Nigeria members at an event" },
  { src: "gallery-4", alt: "AIESEC in Nigeria members at an event" },
  { src: "gallery-5", alt: "AIESEC in Nigeria members at an event" },
];

export default function Footer() {
  return (
    <footer className="bg-aiesec-neutral-950 text-white">
      {/* Newsletter */}
      <div className="mx-auto px-4 pt-12.5 lg:bg-aiesec-heading lg:px-20 lg:pt-15">
        <div className="flex flex-col justify-between gap-5 pb-10 lg:flex-row lg:items-end lg:gap-8 lg:pb-30">
          <div className="w-full lg:max-w-[435px]">
            <h2 className="text-subheading lg:text-4xl lg:leading-[120%]">
              Sign up for our newsletter <br className="hidden lg:block" /> to stay updated
            </h2>
            <p className="mt-2 text-body text-[#898989] lg:mt-3 lg:text-xl lg:leading-7.5 lg:text-white">
              Sign up to stay updated about news on our events,<br className="hidden lg:block" /> recruitment, partnerships, and more.
            </p>
          </div>

          <form className="w-full lg:max-w-[653px]">
            <label
              htmlFor="newsletter-email"
              className="mb-2 block text-body text-white lg:mb-4 lg:text-rd-body-02"
            >
              Enter email address
            </label>
            <div className="flex items-center gap-2 lg:gap-3">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="e.g johnemmanuel@gmail.com"
                className="h-12.5 w-full min-w-0 flex-1 rounded-pill bg-aiesec-neutral-700 px-5 py-3.5 text-body text-white placeholder:text-aiesec-neutral-300 outline-none lg:h-19 lg:px-6 lg:py-5 lg:text-rd-body-02"
              />
              <button
                type="submit"
                className="flex h-11.75 w-27.25 shrink-0 self-center items-center justify-center rounded-pill bg-aiesec-neutral-300 px-5 py-3.5 text-body leading-[19px] tracking-normal text-aiesec-heading transition-colors lg:h-17 lg:w-41.25 lg:px-8 lg:py-4 lg:text-rd-body-02 lg:text-aiesec-neutral-900"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-aiesec-neutral-950 lg:bg-aiesec-heading">
        <div className="flex h-46.5 items-start justify-center gap-2 pt-3 lg:h-[417.87px] lg:justify-between lg:gap-0 lg:pt-6">
          {galleryPhotos.map((photo, index) => {
            const hiddenOnMobile = index === 0 || index > 3;
            const tilt =
              index === 1
                ? "rotate-[3.36deg]"
                : index === 2
                  ? "rotate-[12.09deg]"
                  : index === 4
                    ? "rotate-[2.96deg]"
                    : "-rotate-[3.86deg]";

            return (
              <div
                key={photo.src}
                className={`group relative h-[154.12px] w-31 shrink-0 border-[5.34599px] border-white bg-white first:-rotate-[5.37deg] nth-2:-translate-y-2 nth-4:translate-y-1 lg:h-[345.96px] lg:w-[278.34px] lg:border-12 lg:first:translate-y-1.5 lg:nth-2:-translate-y-4 lg:nth-4:translate-y-3 lg:last:translate-y-10 ${
                  hiddenOnMobile ? "hidden lg:block" : ""
                } ${tilt}`}
              >
                <div className="relative h-full w-full overflow-hidden group-last:after:pointer-events-none group-last:after:absolute group-last:after:inset-0 group-last:after:bg-aiesec-heading/20">
                  <CloudImage id={photo.src} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover group-last:origin-[50%_55%] group-last:scale-200" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 -mt-17.5 bg-aiesec-neutral-950 py-7.5 lg:-mt-[169.87px] lg:flex lg:min-h-83.75 lg:items-center">
        <div className="mx-auto w-full px-4 lg:px-15">
          <div className="flex flex-col gap-7.5 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
            <div className="lg:w-[207px] lg:shrink-0">
              <Image
                src="/svgs/logoWhite.svg"
                alt="AIESEC in Nigeria"
                width={145}
                height={30}
                className="h-7.5 w-36.25"
              />
              <address className="mt-4 text-footer-link text-white">
                {officeAddress.line1}<br className="hidden lg:block" /> {officeAddress.line2}<br className="hidden lg:block" /> {officeAddress.line3}
              </address>
            </div>

            <div className="grid grid-cols-[repeat(2,minmax(0,146px))] gap-10 lg:contents">
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="For Youths" links={forYouthsLinks} />
              <FooterColumn title="Social" links={socialLinks} />
              <FooterColumn title="Legal" links={legalLinks} />
            </div>
          </div>
        </div>

        {/* <div className="border-t border-white/10 py-6">
          <p className="text-center text-xs text-white/40">
            &copy; {new Date().getFullYear()} AIESEC in Nigeria. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="min-w-0 lg:shrink-0">
      <h3 className="text-footer-heading text-white uppercase">
        {title}
      </h3>
      <ul className="mt-2 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-footer-link text-white transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
