"use client";
import { useRouter } from 'next/navigation';
import Button from '../../Components/Button/Button';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import { scrollToTheTop } from '@/lib/scrollToTop';
import { cld } from '@/lib/cloudinary';

const NvHomePageHero = () => {
  // Navigate
  const router = useRouter();
  return (
    <div
      className="min-h-[calc(100vh-10vh)] bg-center bg-no-repeat bg-cover pt-[40px] pr-[119px] pb-[80px] pl-[119px] flex items-center justify-center min-[767px]:max-[1023px]:min-h-[auto] min-[767px]:max-[1023px]:py-5 min-[767px]:max-[1023px]:px-[67px] max-[767px]:min-h-[auto] max-[767px]:py-5 max-[767px]:px-[67px]"
      style={{ backgroundImage: `url(${cld('ain/nv/vector2bg')})` }}
    >
      <div className="flex flex-col items-center justify-center mb-0 w-full min-[767px]:max-[1023px]:gap-8 min-[767px]:max-[1023px]:mb-8 max-[767px]:gap-8 max-[767px]:mb-8">
        <div className="text-center">
          <h4 className="font-['Kunire_Grotesk',sans-serif] text-[96px] font-bold leading-[115.2px] text-center text-white mt-[18px] uppercase min-[767px]:max-[1023px]:text-[60px] min-[767px]:max-[1023px]:leading-[130.5%] min-[767px]:max-[1023px]:mt-[12px] max-[767px]:text-[40px] max-[767px]:leading-[130.5%] max-[767px]:mt-[10px]">
            IT BEGINS <br className="hidden max-[767px]:block" />
            <HalfHighlight color="#F15A29">HERE</HalfHighlight>
          </h4>
          <p className="font-['Kind_Sans',sans-serif] text-[24px] font-bold leading-[28.18px] text-center text-[#ebebeb] normal-case mt-[-18px] min-[767px]:max-[1023px]:text-[20px] min-[767px]:max-[1023px]:font-extralight min-[767px]:max-[1023px]:leading-[140%] min-[767px]:max-[1023px]:mt-[-14px] max-[767px]:text-[15px] max-[767px]:font-bold max-[767px]:leading-[1.2] max-[767px]:whitespace-nowrap max-[767px]:normal-case max-[767px]:mt-[4px]">
            Travel, volunteer, and change lives.
          </p>
        </div>

        <div className="flex gap-5 mt-[50px] justify-center min-[767px]:max-[1023px]:mt-0 max-[767px]:flex max-[767px]:flex-col max-[767px]:mt-[10px] [&>button]:font-['Kind_Sans_Regular','Kind_Sans',sans-serif] [&>button]:w-[320px] [&>button]:py-[10px] [&>button]:px-[40px] [&>button]:rounded-[32px] [&>button]:text-[#f4faf5] min-[767px]:max-[1023px]:[&>button]:w-[220px] max-[767px]:[&>button]:w-[220px] [&>button_*:hover]:opacity-70 [&>*:nth-child(2)]:w-[320px] [&>*:nth-child(2)]:bg-transparent [&>*:nth-child(2)]:border-2 [&>*:nth-child(2)]:border-[#f4faf5] [&>*:nth-child(2)]:text-[#f4faf5] min-[767px]:max-[1023px]:[&>*:nth-child(2)]:w-[200px] max-[767px]:[&>*:nth-child(2)]:w-[220px] w-full items-center justify-center">
          <Button
            onClick={() => {
              router.push('/nv/sign-up');
              scrollToTheTop();
            }}
            subClass="nv"
            className="bg-[#08841B] text-[14px]"
          >
            <span>Become a volunteer</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, width: '16px', height: '16px' }}
            >
              <path
                d="M1.01385 13.884C0.585031 14.4095 0.663395 15.1831 1.18888 15.612C1.71437 16.0408 2.48799 15.9624 2.91681 15.4369L1.01385 13.884ZM14.0575 1.21576C13.9891 0.540944 13.3867 0.0493134 12.7119 0.117667L1.7154 1.23154C1.0406 1.29989 0.548979 1.90235 0.617332 2.57716C0.685687 3.25197 1.28813 3.7436 1.96293 3.67524L11.7376 2.68513L12.7277 12.46C12.7961 13.1348 13.3985 13.6264 14.0733 13.558C14.7481 13.4897 15.2397 12.8872 15.1714 12.2124L14.0575 1.21576ZM2.91681 15.4369L13.7871 2.11598L11.8842 0.563053L1.01385 13.884L2.91681 15.4369Z"
                fill="#F4FAF5"
              />
            </svg>
          </Button>
          <Button
            onClick={() => {
              router.push('/nv/projects');
              scrollToTheTop();
            }}
            subClass="nv"
          >
            <span>View projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0, width: '16px', height: '16px' }}
            >
              <path
                d="M1.01385 13.884C0.585031 14.4095 0.663395 15.1831 1.18888 15.612C1.71437 16.0408 2.48799 15.9624 2.91681 15.4369L1.01385 13.884ZM14.0575 1.21576C13.9891 0.540944 13.3867 0.0493134 12.7119 0.117667L1.7154 1.23154C1.0406 1.29989 0.548979 1.90235 0.617332 2.57716C0.685687 3.25197 1.28813 3.7436 1.96293 3.67524L11.7376 2.68513L12.7277 12.46C12.7961 13.1348 13.3985 13.6264 14.0733 13.558C14.7481 13.4897 15.2397 12.8872 15.1714 12.2124L14.0575 1.21576ZM2.91681 15.4369L13.7871 2.11598L11.8842 0.563053L1.01385 13.884L2.91681 15.4369Z"
                fill="#00C16E"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NvHomePageHero;
