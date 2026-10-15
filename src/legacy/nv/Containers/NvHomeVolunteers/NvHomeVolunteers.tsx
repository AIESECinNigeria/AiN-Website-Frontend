// import HeaderText from '../../Components/HeaderText/HeaderText';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import CloudImage from '@/components/CloudImage';
import { cld } from '@/lib/cloudinary';
const vector7 = cld('ain/nv/vector7');
const vector8 = cld('ain/nv/vector8');

interface Testimonial {
  name: string;
  caption: string;
  image: string;
}

const NvHomeVolunteers = () => {
  // States
  const testimonials: Testimonial[] = [
    {
      name: 'Bright Uzosike',
      caption:
        'There is more happiness in giving than there is in receiving. No matter how small you give to those in need, it goes a long way to put a smile on their faces.',
      image: 'ain/nv/testimonial1',
    },

    {
      name: 'Deborah',
      caption:
        'Working and relating to the children. It was always exciting to see them work on projects independently and come out with excellent results.',
      image: 'ain/nv/testimonial2',
    },

    {
      name: 'Kashimana',
      caption:
        'My experience was one of the best I have ever had. From 100% support from the team to learning about a whole new diverse culture. ',
      image: 'ain/nv/testimonial3',
    },
  ];

  return (
    <div className="py-[95px] px-8 bg-[#f5e8d0] min-[767px]:max-[1023px]:p-5 max-[767px]:p-5">
      <div className="text-center max-[767px]:flex max-[767px]:flex-col max-[767px]:gap-[0.35rem]">
        <p className="font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] font-light leading-[23.04px] text-[#808080] mb-7 min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:font-[275] min-[767px]:max-[1023px]:leading-[140%] max-[767px]:text-[16px] max-[767px]:font-[275] max-[767px]:leading-[140%] max-[767px]:mb-[0.15rem]">
          The Volunteers
        </p>
        <h4 className="font-['Kunire_Grotesk',sans-serif] text-[56px] font-semibold leading-[1.02] text-[#2d2d2d] uppercase min-[767px]:max-[1023px]:text-[32px] max-[767px]:text-[32px] max-[767px]:mt-0">
          What they had
          <br /> to <HalfHighlight color="#F4BE60">say!</HalfHighlight>
        </h4>
      </div>

      <div className="flex items-center justify-center gap-4 mt-[100px] min-[767px]:max-[1023px]:flex-col min-[767px]:max-[1023px]:gap-4 min-[767px]:max-[1023px]:mt-5 max-[767px]:flex-col max-[767px]:gap-4 max-[767px]:mt-5">
        {testimonials.map((data, i) => {
          const cardBackground =
            i === 0 ? vector7 : i === 1 ? vector8 : i === 2 ? vector7 : null;

          return (
            <div
              className={`max-w-[526px] max-h-[691px] rounded-[32px] flex items-center justify-start flex-col p-16 bg-white border border-black min-[767px]:max-[1023px]:max-w-full min-[767px]:max-[1023px]:max-h-none max-[767px]:max-w-full max-[767px]:max-h-none${
                i === 1 ? ' mb-[59px]' : ''
              }`}
              key={i}
              style={
                cardBackground
                  ? {
                      backgroundImage: `url("${cardBackground}")`,
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'cover',
                    }
                  : undefined
              }
            >
              <CloudImage
                id={data.image}
                alt={data.name}
                className="w-[360px] h-[337.5px] rounded-[774.42px_774.42px_0px_774.42px] min-[767px]:max-[1023px]:w-[320px] min-[767px]:max-[1023px]:h-[317.5px] max-[767px]:w-[320px] max-[767px]:h-[317.5px]"
              />
              <div
                className={`p-[10px] rounded-[34px] border ${
                  i === 1 ? 'border-white text-white' : 'border-black'
                } my-8 font-['Kind_Sans_Regular','Kind_Sans',sans-serif] font-normal min-[767px]:max-[1023px]:my-4 max-[767px]:my-4`}
              >
                {data.name}
              </div>
              <div
                className={`font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[20px] font-medium leading-[23.48px] text-center ${
                  i === 1 ? 'text-white' : 'text-black'
                } min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:leading-[150%] max-[767px]:text-[16px] max-[767px]:leading-[150%]`}
              >
                {data.caption}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NvHomeVolunteers;
