"use client";
import { useRouter } from 'next/navigation';
import Button from '../../Components/Button/Button';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import HeaderText from '../../Components/HeaderText/HeaderText';
import { scrollToTheTop } from '@/lib/scrollToTop';
import CloudImage from '@/components/CloudImage';

const NvBecomeAVolunteer = () => {
  // Router
  const router = useRouter();

  return (
    <div className="py-[72px] px-[120px] bg-white relative min-[767px]:max-[1023px]:py-8 min-[767px]:max-[1023px]:px-6 max-[767px]:py-7 max-[767px]:px-4">
      <div className="flex items-start justify-between gap-8 min-[767px]:max-[1023px]:gap-4 max-[767px]:gap-3">
        <HeaderText
          title={
            <>
              <HalfHighlight color="#F4BE60">LEAD</HalfHighlight> THE CHANGE
            </>
          }
          caption="Become a volunteer"
          captionFirst
        />
        <CloudImage
          id="vector1"
          alt=""
          className="absolute top-[202px] right-[42px] w-[180px] h-auto shrink-0 z-0 min-[767px]:max-[1023px]:w-[120px] min-[767px]:max-[1023px]:top-[122px] min-[767px]:max-[1023px]:right-[20px] max-[767px]:w-[72px] max-[767px]:top-[96px] max-[767px]:right-[12px]"
        />
      </div>

      <div className="mt-[72px] relative flex items-stretch h-[605px] bg-transparent rounded-[32px_0px_0px_32px] overflow-hidden z-[1] min-[767px]:max-[1023px]:mt-8 min-[767px]:max-[1023px]:flex min-[767px]:max-[1023px]:flex-col min-[767px]:max-[1023px]:h-auto min-[767px]:max-[1023px]:gap-3 min-[767px]:max-[1023px]:p-0 max-[767px]:mt-8 max-[767px]:flex max-[767px]:flex-col max-[767px]:items-stretch max-[767px]:h-auto max-[767px]:gap-3">
        <div className="w-[42%] min-[767px]:max-[1023px]:w-full max-[767px]:w-full max-[767px]:basis-full">
          <CloudImage
            id="member1"
            alt="AIESEC Member"
            className="w-full h-full object-cover rounded-[32px_0px_0px_32px] min-[767px]:max-[1023px]:w-full min-[767px]:max-[1023px]:h-[360px] min-[767px]:max-[1023px]:rounded-[32px] min-[767px]:max-[1023px]:mb-0 max-[767px]:w-full max-[767px]:h-[280px] max-[767px]:rounded-[32px] max-[767px]:mb-0"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center py-[83px] px-[30px] bg-transparent w-[58%] min-h-full text-left rounded-[0_32px_32px_0] overflow-hidden after:content-[''] after:absolute after:inset-0 after:bg-[url('https://res.cloudinary.com/njljiov2/image/upload/f_auto,q_auto/ain/nv/vector2')] after:bg-left after:bg-no-repeat after:[background-size:95%_100%] after:rounded-[inherit] after:z-[1] max-[767px]:after:[background-size:100%_100%] min-[767px]:max-[1023px]:py-8 min-[767px]:max-[1023px]:px-5 min-[767px]:max-[1023px]:w-full min-[767px]:max-[1023px]:min-h-[360px] min-[767px]:max-[1023px]:rounded-[32px] max-[767px]:py-6 max-[767px]:px-4 max-[767px]:w-full max-[767px]:m-0 max-[767px]:min-h-[300px] max-[767px]:rounded-[32px] [&>button]:relative [&>button]:self-start [&>button]:ml-[10%] [&>button]:mt-8 [&>button]:w-[270px] [&>button]:py-[10px] [&>button]:px-[20px] [&>button]:bg-white [&>button]:text-[#007a33] [&>button]:z-[3] min-[767px]:max-[1023px]:[&>button]:self-start min-[767px]:max-[1023px]:[&>button]:ml-0 min-[767px]:max-[1023px]:[&>button]:mt-8 min-[767px]:max-[1023px]:[&>button]:w-full max-[767px]:[&>button]:self-center max-[767px]:[&>button]:mt-6 max-[767px]:[&>button]:mx-0 max-[767px]:[&>button]:mb-0 max-[767px]:[&>button]:ml-0 max-[767px]:[&>button]:w-[220px]">
          <p className="relative font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[22px] font-normal leading-[32px] text-left text-white py-4 w-[80%] z-[3] border-b border-white min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:font-normal min-[767px]:max-[1023px]:leading-[150%] min-[767px]:max-[1023px]:w-full max-[767px]:text-[14px] max-[767px]:font-normal max-[767px]:leading-[150%] max-[767px]:w-full max-[767px]:border-b-0">
            In AIESEC, we are passionate about using our skills and helping you
            use your skills to make an impact in the lives and activities of
            people in the world.
          </p>

          <p className="relative font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[22px] font-normal leading-[32px] text-left text-white py-4 w-[80%] z-[3] min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:font-normal min-[767px]:max-[1023px]:leading-[150%] min-[767px]:max-[1023px]:w-full max-[767px]:text-[14px] max-[767px]:font-normal max-[767px]:leading-[150%] max-[767px]:w-full">
            Volunteer your skills and experience to be a part of the change that
            comes from services that are provided by our partner NGOs all around
            the country.
          </p>

          <Button
            onClick={() => {
              router.push('/nv/projects');
              scrollToTheTop();
            }}
            subClass="nv"
          >
            <span>Lead the change</span>
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.22523 11.7911C0.876052 12.219 0.939862 12.8489 1.36775 13.1981C1.79565 13.5473 2.42559 13.4835 2.77477 13.0556L1.22523 11.7911ZM11.8464 1.47582C11.7907 0.926342 11.3001 0.526026 10.7507 0.581684L1.79649 1.48869C1.24701 1.54434 0.846698 2.0349 0.902356 2.58437C0.958014 3.13385 1.44857 3.53416 1.99804 3.4785L9.95731 2.67228L10.7635 10.6316C10.8192 11.181 11.3098 11.5813 11.8592 11.5257C12.4087 11.47 12.809 10.9795 12.7534 10.43L11.8464 1.47582ZM2.77477 13.0556L11.6262 2.20884L10.0767 0.944347L1.22523 11.7911L2.77477 13.0556Z"
                fill="#007A33"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NvBecomeAVolunteer;
