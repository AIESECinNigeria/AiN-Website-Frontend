/** Full-bleed blue announcement bar that scrolls the recruitment notice.
 *  Sits at the very top of the Membership page. */
export default function RecruitmentTicker() {
  const message = (
    <span className="mx-2 inline-flex items-center gap-4 text-base font-bold leading-normal tracking-[-0.01em] lg:text-fluid-20 lg:leading-[1.5]">
      <span>
        Recruitment does not start till{" "}
        <span className="italic text-aiesec-yellow">December</span>. Join the
        waitlist and you will be contacted when recruitment starts.
      </span>
      <span aria-hidden="true" className="text-white">
        •
      </span>
    </span>
  );

  return (
    <div className="relative left-1/2 flex h-12 w-screen -translate-x-1/2 items-center overflow-hidden border-b-[1.5px] border-[#FFC800] bg-aiesec-blue px-2.5 py-3 text-white lg:h-[62px] lg:py-4">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {/* Two identical runs so the -50% translate loops seamlessly */}
        <div className="flex shrink-0">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`a-${i}`}>{message}</span>
          ))}
        </div>
        <div className="flex shrink-0" aria-hidden="true">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={`b-${i}`}>{message}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
