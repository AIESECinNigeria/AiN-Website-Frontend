"use client";
import { useRouter } from 'next/navigation';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import CloudImage from '@/components/CloudImage';
import { cld } from '@/lib/cloudinary';
const volunteer1 = cld('ain/nv/volunteer1');
const volunteer2 = cld('ain/nv/volunteer2');
const volunteer3 = cld('ain/nv/volunteer3');
const volunteer4 = cld('ain/nv/volunteer4');
const volunteer5 = cld('ain/nv/volunteer5');
const volunteer6 = cld('ain/nv/volunteer6');

// TODO: change images to cloudinary
// let volunteer1 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762347/AIESEC/volunteer1_y8tbrd.png';
// let volunteer2 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762345/AIESEC/volunteer2_zpfj6h.png';
// let volunteer3 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762348/AIESEC/volunteer3_rhc8bf.png';
// let volunteer4 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762346/AIESEC/volunteer4_dioynw.png';
// let volunteer5 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762348/AIESEC/volunteer5_wkssds.png';
// let volunteer6 = 'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762346/AIESEC/volunteer6_mbaleu.png';

interface WhyItem {
  text: string;
  image: string;
}

const NvMeasureYourImpact = () => {
  // Router
  const router = useRouter();

  // Utils
  const why: WhyItem[] = [
    {
      text: 'Share a smile',
      image: volunteer1,
    },
    {
      text: 'Try new foods',
      image: volunteer2,
    },
    {
      text: 'Change a life',
      image: volunteer3,
    },
    {
      text: 'Build new friendships',
      image: volunteer4,
    },
    {
      text: 'Immerse yourself in new cultures',
      image: volunteer5,
    },
    {
      text: 'Make a difference',
      image: volunteer6,
    },
  ];
  return (
    <div className="py-[76px] px-[128px] bg-[#f5e8d0] min-[767px]:max-[1023px]:py-5 min-[767px]:max-[1023px]:px-[22px] max-[767px]:py-5 max-[767px]:px-[22px]">
      <div className="text-center max-[767px]:flex max-[767px]:flex-col max-[767px]:gap-[0.45rem]">
        <p className="font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] font-light leading-[23.04px] text-[#808080] mb-8 min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:font-[275] min-[767px]:max-[1023px]:leading-[140%] min-[767px]:max-[1023px]:mb-[0.3rem] max-[767px]:text-[16px] max-[767px]:font-[275] max-[767px]:leading-[140%] max-[767px]:mb-[0.2rem]">
          Measure your impact
        </p>
        <h4 className="font-['Kunire_Grotesk',sans-serif] text-[56px] font-bold leading-[1.02] text-[#2d2d2d] uppercase min-[767px]:max-[1023px]:text-[32px] min-[767px]:max-[1023px]:leading-[0.95] max-[767px]:text-[32px] max-[767px]:leading-[0.95] max-[767px]:mt-0">
          Why should you <br />
          <HalfHighlight color="#F4BE60">volunteer?</HalfHighlight>
        </h4>
      </div>
      <div className="flex items-center justify-center flex-wrap mt-24 gap-4 min-[767px]:max-[1023px]:mt-10 max-[767px]:mt-10">
        {why.map((data, i) => {
          const words = data.text.split(' ');
          const isFifthItem = i === 4;
          const wrapperClass =
            `basis-[48%] min-w-[48%] max-w-[600px] h-[600px] relative overflow-visible min-[767px]:max-[1023px]:basis-full min-[767px]:max-[1023px]:min-w-full min-[767px]:max-[1023px]:max-w-full min-[767px]:max-[1023px]:h-[420px] max-[767px]:basis-full max-[767px]:min-w-full max-[767px]:max-w-full max-[767px]:h-[420px]${
              i === 1 ? ' z-[1]' : ''
            }`;
          const cardClass =
            `basis-[48%] min-w-[48%] max-w-[600px] h-[600px] relative rounded-[32px] bg-center bg-no-repeat bg-cover overflow-visible min-[767px]:max-[1023px]:basis-full min-[767px]:max-[1023px]:min-w-full min-[767px]:max-[1023px]:max-w-full min-[767px]:max-[1023px]:h-[420px] max-[767px]:basis-full max-[767px]:min-w-full max-[767px]:max-w-full max-[767px]:h-[420px]${
              i === 1 ? ' z-[1]' : ''
            }`;
          const cardContent = (
            <div
              className={cardClass}
              style={{
                background: `url("${data.image}")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            >
              {i === 0 ? (
                <CloudImage
                  id="ain/nv/vector3"
                  alt=""
                  className="absolute w-[180px] h-auto z-[2] pointer-events-none top-[-56px] left-[-88px] min-[767px]:max-[1023px]:w-[120px] min-[767px]:max-[1023px]:top-[-34px] min-[767px]:max-[1023px]:left-[-50px] max-[767px]:w-[90px] max-[767px]:top-[-24px] max-[767px]:left-auto max-[767px]:right-[-34px]"
                />
              ) : null}
              {i === 3 ? (
                <CloudImage
                  id="ain/nv/vector5"
                  alt=""
                  className="absolute w-[180px] h-auto right-[-76px] bottom-[120px] transform-none z-[2] pointer-events-none min-[767px]:max-[1023px]:w-[120px] min-[767px]:max-[1023px]:right-[-48px] min-[767px]:max-[1023px]:bottom-[90px] max-[767px]:w-[90px] max-[767px]:right-[-34px] max-[767px]:bottom-[70px] max-[767px]:hidden"
                />
              ) : null}
              {i === 4 ? (
                <CloudImage
                  id="ain/nv/vector5"
                  alt=""
                  className="hidden max-[767px]:block max-[767px]:absolute max-[767px]:w-[90px] max-[767px]:h-auto max-[767px]:right-[-22px] max-[767px]:top-[-42px] max-[767px]:z-[2] max-[767px]:pointer-events-none"
                />
              ) : null}
              {i === 4 ? (
                <CloudImage
                  id="ain/nv/vector6"
                  alt=""
                  className="absolute w-[180px] h-auto left-[-144px] top-1/2 -translate-y-1/2 z-[2] pointer-events-none min-[767px]:max-[1023px]:w-[120px] min-[767px]:max-[1023px]:left-[-90px] max-[767px]:left-[-64px] max-[767px]:hidden"
                />
              ) : null}
              <span className="font-['Kind_Sans',sans-serif] text-[56px] font-bold leading-[56px] text-left absolute left-[48px] bottom-[48px] w-[80%] text-white z-[3] normal-case min-[767px]:max-[1023px]:text-[26px] min-[767px]:max-[1023px]:leading-[150%] min-[767px]:max-[1023px]:left-[18px] min-[767px]:max-[1023px]:bottom-[18px] max-[767px]:text-[26px] max-[767px]:leading-[150%] max-[767px]:left-[18px] max-[767px]:bottom-[18px]">
                {isFifthItem ? `${words[0]} ${words[1]}` : words[0]} <br />
                {isFifthItem
                  ? words.slice(2).join(' ')
                  : words.slice(1).join(' ')}
              </span>
            </div>
          );

          return (
            <div key={i} className={wrapperClass}>
              {i === 1 ? (
                <CloudImage
                  id="ain/nv/vector4"
                  alt=""
                  className="absolute w-[180px] h-auto pointer-events-none top-[-62px] right-[12px] z-[-1] min-[767px]:max-[1023px]:w-[120px] min-[767px]:max-[1023px]:top-[-40px] min-[767px]:max-[1023px]:right-[10px] max-[767px]:w-[90px] max-[767px]:top-[-28px] max-[767px]:right-[8px] max-[767px]:hidden"
                />
              ) : null}
              {i === 2 ? (
                <CloudImage
                  id="ain/nv/vector4"
                  alt=""
                  className="hidden max-[767px]:block max-[767px]:absolute max-[767px]:w-[90px] max-[767px]:h-auto max-[767px]:left-[-22px] max-[767px]:top-[-42px] max-[767px]:z-[2] max-[767px]:pointer-events-none"
                />
              ) : null}
              {i === 5 ? (
                <CloudImage
                  id="ain/nv/vector6"
                  alt=""
                  className="hidden max-[767px]:block max-[767px]:absolute max-[767px]:w-[90px] max-[767px]:h-auto max-[767px]:left-[-64px] max-[767px]:top-1/2 max-[767px]:-translate-y-1/2 max-[767px]:z-[2] max-[767px]:pointer-events-none"
                />
              ) : null}
              {cardContent}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NvMeasureYourImpact;
