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
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="mx-auto px-6 pt-16 lg:px-20">
        <div className="flex flex-col justify-between gap-8 pb-14 lg:flex-row lg:items-end">
          <div>
            <h2 className="text-3xl font-bold leading-[120%] tracking-[-1%]">
              Sign up for our newsletter <br /> to stay updated
            </h2>
            <p className="mt-3 text-lg text-white leading-[150%] tracking-[-1%]">
              Sign up to stay updated about news on our events,<br /> recruitment,
              partnerships, and more.
            </p>
          </div>

          <form className="w-full max-w-md">
            <label
              htmlFor="newsletter-email"
              className="mb-2 block text-xl font-medium text-white leading-[150%] tracking-[-1%]"
            >
              Enter email address
            </label>
            <div className="flex flex-col items-start md:flex-row md:items-center gap-2">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="e.g johnemmanuel@gmail.com"
                className="w-full min-w-0 flex-1 rounded-full px-6 py-4 text-lg text-white bg-[#3A3A3A] placeholder-[#C0C0C0] outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-[#C0C0C0] px-6 py-4 text-lg font-medium text-[#222222] transition-colors leading-[150%] tracking-[-1%]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden">
        <div className="flex h-56 sm:h-72 lg:h-96">
          {galleryPhotos.map((photo) => (
            <div key={photo.src} className="relative flex-1">
              <CloudImage id={photo.src} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 -mt-20 bg-black pt-4 sm:-mt-28 lg:-mt-32">
        <div className="mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-3 lg:grid-cols-5">
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <Image src="/svgs/logoWhite.svg" alt="AIESEC in Nigeria" width={100} height={40} />
              <address className="mt-4 text-sm italic leading-relaxed text-white/60">
                {officeAddress.line1}
                <br />
                {officeAddress.line2}
                <br />
                {officeAddress.line3}
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
      <ul className="mt-4 flex flex-col gap-3">
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
