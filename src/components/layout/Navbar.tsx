"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks, programLinks } from "./nav-data";

export interface NavLink {
  label: string;
  href: string;
}

export interface ProgramLink {
  label: string;
  href: string;
  description: string;
}

function NavbarContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);

  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const programsTriggerRef = useRef<HTMLButtonElement>(null);
  const programsMenuRef = useRef<HTMLDivElement>(null);

  // Throttle scroll state updates to one per animation frame.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      setIsScrolled(window.scrollY > 8);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const closePrograms = useCallback(() => {
    setIsProgramsOpen(false);
  }, []);

  // Close the desktop dropdown on outside click and Escape.
  useEffect(() => {
    if (!isProgramsOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        programsMenuRef.current?.contains(target) ||
        programsTriggerRef.current?.contains(target)
      ) {
        return;
      }
      closePrograms();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePrograms();
        programsTriggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProgramsOpen, closePrograms]);

  // Close the mobile menu on outside click and Escape.
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        mobileMenuRef.current?.contains(target) ||
        mobileTriggerRef.current?.contains(target)
      ) {
        return;
      }
      closeMobileMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMobileMenu();
        mobileTriggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur transition-shadow ${
        isScrolled ? "border-gray-200 shadow-sm" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 items-center justify-between px-6 py-3 lg:px-20">
        <Link href="/" aria-label="Home" onClick={closeMobileMenu}>
          <Image
            src="/svgs/logoBlack.svg"
            alt="AIESEC in Nigeria"
            width={78}
            height={16}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-[#5C5C5C] transition-colors hover:text-aiesec-blue leading-[150%]"
            >
              {link.label}
            </Link>
          ))}

          <button
            ref={programsTriggerRef}
            type="button"
            onClick={() => setIsProgramsOpen((open) => !open)}
            aria-haspopup="true"
            aria-expanded={isProgramsOpen}
            aria-controls="programs-menu"
            className="flex items-center gap-1 text-lg font-medium text-[#5C5C5C] transition-colors cursor-pointer hover:text-aiesec-blue"
          >
            Programs
            <ChevronIcon
              className={`size-4 transition-transform duration-200 cursor-pointer ${
                isProgramsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <Link
            href="/become-a-partner"
            className="rounded-full border border-gray-900 px-5 py-2.5 text-base font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white leading-[150%] tracking-[-1%]"
          >
            Become a Partner
          </Link>
        </div>

        {/* Mobile menu trigger — same button toggles hamburger/close */}
        <button
          ref={mobileTriggerRef}
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-lg lg:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <CloseIcon className="size-6 cursor-pointer text-aiesec-blue" />
          ) : (
            <span className="flex flex-col items-center justify-center gap-1.5">
              <span className="block h-0.5 w-6 rounded-full bg-aiesec-blue" />
              <span className="block h-0.5 w-6 rounded-full bg-aiesec-blue" />
              <span className="block h-0.5 w-6 rounded-full bg-aiesec-blue" />
            </span>
          )}
        </button>
      </nav>

      {isProgramsOpen && (
        <div
          id="programs-menu"
          ref={programsMenuRef}
          role="menu"
          aria-label="Programs"
          className="absolute inset-x-0 top-full hidden border-t border-gray-100 bg-white shadow-xl lg:block"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-6 py-6 lg:px-20">
            {programLinks.map((program: ProgramLink) => (
              <Link
                key={program.href}
                href={program.href}
                role="menuitem"
                onClick={closePrograms}
                className="rounded-xl p-3 transition-colors hover:bg-gray-50"
              >
                <p className="text-lg font-medium text-gray-900">{program.label}</p>
                <p className="mt-1 text-xs leading-snug text-gray-500">
                  {program.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className="absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-gray-100 bg-white lg:hidden"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link: NavLink) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50"
              >
                {link.label}
              </Link>
            ))}

            <button
              type="button"
              onClick={() => setIsMobileProgramsOpen((open) => !open)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 cursor-pointer"
              aria-expanded={isMobileProgramsOpen}
              aria-controls="mobile-programs-menu"
            >
              Programs
              <ChevronIcon
                className={`size-4 transition-transform duration-200 cursor-pointer ${
                  isMobileProgramsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              id="mobile-programs-menu"
              className={`grid transition-all duration-200 ${
                isMobileProgramsOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="flex flex-col gap-1 overflow-hidden pl-3">
                {programLinks.map((program: ProgramLink) => (
                  <Link
                    key={program.href}
                    href={program.href}
                    onClick={closeMobileMenu}
                    className="rounded-lg px-3 py-2.5 text-lg font-medium text-gray-600 hover:bg-gray-50"
                  >
                    {program.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/become-a-partner"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center rounded-full border border-gray-900 px-5 py-2.5 text-base font-medium text-gray-900 transition-colors hover:bg-gray-900 hover:text-white leading-[150%] tracking-[-1%]"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  // Remount the stateful nav when navigation changes instead of updating
  // menu state synchronously inside an effect.
  return <NavbarContent key={pathname} />;
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}