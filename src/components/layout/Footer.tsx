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
  { src: "ain/footer/gallery-1", alt: "AIESEC in Nigeria members at an event" },
  { src: "ain/footer/gallery-2", alt: "AIESEC in Nigeria members at an event" },
  { src: "ain/footer/gallery-3", alt: "AIESEC in Nigeria members at an event" },
  { src: "ain/footer/gallery-4", alt: "AIESEC in Nigeria members at an event" },
  { src: "ain/footer/gallery-5", alt: "AIESEC in Nigeria members at an event" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      {/* Newsletter */}
      <div className="mx-auto bg-[#111111] px-4 pt-14 sm:px-6 sm:pt-16 lg:bg-[#030312] lg:px-20">
        <div className="flex flex-col justify-between gap-8 pb-14 lg:flex-row lg:items-end lg:pb-28">
          <div className="max-w-[360px] sm:max-w-[430px]">
            <h2 className="text-[28px] font-bold leading-[125%] tracking-[-1%] sm:text-3xl lg:text-4xl">
              Sign up for our newsletter <br className="hidden lg:block" /> to stay updated
            </h2>
            <p className="mt-3 text-sm leading-6 tracking-[-1%] text-white sm:text-base lg:text-lg">
              Sign up to stay updated about news on our events,<br className="hidden sm:block" /> recruitment, partnerships, and more.
            </p>
          </div>

          <form className="w-full max-w-md lg:max-w-[653px]">
            <label
              htmlFor="newsletter-email"
              className="mb-2 block text-base font-medium leading-[150%] tracking-[-1%] text-white sm:text-xl lg:text-2xl"
            >
              Enter email address
            </label>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-2 lg:gap-3">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="e.g johnemmanuel@gmail.com"
                className="w-full min-w-0 flex-1 rounded-full bg-[#3A3A3A] px-6 py-4 text-base text-white placeholder-[#C0C0C0] outline-none sm:text-lg lg:px-6 lg:py-5 lg:text-2xl"
              />
              <button
                type="submit"
                className="shrink-0 self-center rounded-full bg-[#C0C0C0] px-6 py-4 text-base font-medium leading-[150%] tracking-[-1%] text-[#222222] transition-colors sm:self-auto sm:text-lg lg:px-8 lg:py-[18px] lg:text-2xl"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden bg-[#111111] lg:bg-[#030312]">
        <div className="flex h-32 items-center justify-center gap-1 sm:h-72 sm:justify-normal sm:gap-0 lg:h-96">
          {galleryPhotos.map((photo, index) => {
            const hiddenOnMobile = index === 0 || index > 3;
            const tilt =
              index === 1
                ? "-rotate-3 sm:rotate-[4deg]"
                : index === 2
                  ? "rotate-[10deg]"
                  : index === 4
                    ? "rotate-[3deg]"
                    : "-rotate-3";

            return (
              <div
                key={photo.src}
                className={`relative h-[118px] w-[32vw] max-w-[140px] shrink-0 bg-white p-1.5 shadow-sm sm:h-full sm:w-auto sm:max-w-none sm:flex-1 sm:p-2.5 sm:shadow-sm lg:h-[300px] lg:self-center ${
                  hiddenOnMobile ? "hidden sm:block" : ""
                } ${tilt}`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <CloudImage id={photo.src} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 -mt-3 bg-[#111111] pt-2 sm:-mt-28 sm:pt-4 lg:-mt-32 lg:pt-7">
        <div className="mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-8 pb-8 sm:grid-cols-3 sm:gap-10 sm:py-14 lg:grid-cols-[1.35fr_0.95fr_0.95fr_1fr_0.75fr]">
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <Image
                src="/svgs/logoWhite.svg"
                alt="AIESEC in Nigeria"
                width={145}
                height={30}
                className="h-[30px] w-[145px]"
              />
              <address className="mt-3 text-sm italic leading-relaxed text-white/60 sm:mt-4">
                {officeAddress.line1}<br className="hidden lg:block" /> {officeAddress.line2}<br className="hidden lg:block" /> {officeAddress.line3}
              </address>
            </div>

            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="For Youths" links={forYouthsLinks} />
            <FooterColumn title="Social" links={socialLinks} />
            <FooterColumn title="Legal" links={legalLinks} />
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
    <div>
      <h3 className="text-[13px] font-bold uppercase text-white leading-[150%] tracking-[-1%]">
        {title}
      </h3>
      <ul className="mt-2 flex flex-col gap-2 sm:mt-4 sm:gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-base text-white/70 transition-colors italic hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
