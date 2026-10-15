"use client";
import { useRouter } from 'next/navigation';
import Button from '../../Components/Button/Button';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import HeaderText from '../../Components/HeaderText/HeaderText';
import { scrollToTheTop } from '@/lib/scrollToTop';
import { cld } from '@/lib/cloudinary';

const aiesecMember2 =
  'https://res.cloudinary.com/dof4l5eul/image/upload/v1743761985/AIESEC/aiesecMember2_st2ftj.png';

const NvHomeImpact = () => {
  // Router
  const router = useRouter();
  return (
    <div className="py-[72px] px-[120px] bg-white min-[767px]:max-[1023px]:p-[22px] max-[767px]:p-[22px]">
      <div className="flex items-center [&>div]:basis-[60%] min-[767px]:max-[1023px]:items-start min-[767px]:max-[1023px]:flex-col min-[767px]:max-[1023px]:gap-4 min-[767px]:max-[1023px]:p-0 min-[767px]:max-[1023px]:[&>div]:basis-full max-[767px]:items-start max-[767px]:flex-col max-[767px]:gap-4 max-[767px]:p-0 max-[767px]:[&>div]:basis-full">
        <HeaderText
          title={
            <>
              <HalfHighlight color="#F4BE60">Grow</HalfHighlight>
              <br /> with others
            </>
          }
          caption="Impact the world"
          captionFirst
        />
      </div>

      <div className="mt-[90px] flex items-stretch gap-4 min-[767px]:max-[1023px]:mt-[30px] min-[767px]:max-[1023px]:flex min-[767px]:max-[1023px]:items-center min-[767px]:max-[1023px]:flex-col min-[767px]:max-[1023px]:gap-4 max-[767px]:mt-[30px] max-[767px]:flex max-[767px]:items-center max-[767px]:flex-col max-[767px]:gap-4">
        <div className="border border-black rounded-[2rem] flex justify-center items-center max-w-[543px] h-[604px] p-4 min-[767px]:max-[1023px]:max-w-full min-[767px]:max-[1023px]:h-[404px] max-[767px]:max-w-full max-[767px]:h-[404px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={aiesecMember2}
            alt="AIESEC members"
            className="min-[767px]:max-[1023px]:h-full min-[767px]:max-[1023px]:w-full max-[767px]:h-full max-[767px]:w-full"
          />
        </div>

        <div
          className="flex justify-center rounded-[2rem] border-none font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] font-normal leading-[32px] text-left text-white flex-col py-4 px-16 flex-1 bg-center bg-no-repeat bg-cover min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:leading-[150%] min-[767px]:max-[1023px]:p-4 max-[767px]:text-[16px] max-[767px]:leading-[150%] max-[767px]:p-4 [&>button]:w-[267px] [&>button]:bg-white [&>button]:text-[#007a33] min-[767px]:max-[1023px]:[&>button]:w-full max-[767px]:[&>button]:w-full"
          style={{ backgroundImage: `url(${cld('ain/nv/vector2')})` }}
        >
          <p className="mb-8">
            We may not be able to end wars, solve world hunger save the planet
            immediately, but by doing a little bit of good where we can, we are
            paving the way for much broader changes!
          </p>

          <Button
            onClick={() => {
              router.push('/nv/sign-up');
              scrollToTheTop();
            }}
            subClass="nv"
          >
            <span>Start Now</span>
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

export default NvHomeImpact;
