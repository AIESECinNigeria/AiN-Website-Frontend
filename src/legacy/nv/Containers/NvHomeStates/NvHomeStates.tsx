import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import { cld } from '@/lib/cloudinary';

export const states: string[] = [
  'Abia',
  'Abuja',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
];

export const cities: string[] = [
  'Abuja',
  'Benue',
  'Cross-River',
  'Edo',
  'Enugu',
  'Kwara',
  'Lagos',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
];

const cityBg = (i: number) =>
  i % 3 === 0 ? 'bg-[#007a33]' : i % 3 === 1 ? 'bg-[#f4be60]' : 'bg-[#f15a29]';

const cityClass =
  'w-[217.61px] basis-[218px] shrink-0 h-[217.61px] rounded-[12.26px] p-3 border-[0.77px] border-solid border-white cursor-pointer min-[767px]:max-[1023px]:w-[46%] min-[767px]:max-[1023px]:basis-[46%] min-[767px]:max-[1023px]:h-[117.61px] min-[767px]:max-[1023px]:rounded-[10.26px] min-[767px]:max-[1023px]:p-2 max-[767px]:w-[46%] max-[767px]:basis-[46%] max-[767px]:h-[117.61px] max-[767px]:rounded-[10.26px] max-[767px]:p-2';

const cityInnerClass =
  'rounded-[12.26px] flex items-center justify-center h-full font-[\'Kind_Sans\',sans-serif] text-[24.52px] font-bold leading-[29.42px] text-center min-[767px]:max-[1023px]:rounded-[10.26px] min-[767px]:max-[1023px]:text-[16.52px] min-[767px]:max-[1023px]:leading-[150%] max-[767px]:rounded-[10.26px] max-[767px]:text-[16.52px] max-[767px]:leading-[150%]';

const NvHomeStates = () => {
  const citiesInfinite = [...cities];

  return (
    <div
      className="py-[72px] px-0 bg-center bg-no-repeat bg-cover text-white overflow-x-hidden min-[767px]:max-[1023px]:p-[22px] max-[767px]:p-[22px]"
      style={{ backgroundImage: `url(${cld('vectorbg')})` }}
    >
      <style>{`@keyframes scrollInfinity{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}@keyframes scrollInfinity2{0%{transform:translateX(0)}100%{transform:translateX(100%)}}`}</style>
      <div className="flex items-center py-0 px-[120px] min-[767px]:max-[1023px]:items-start min-[767px]:max-[1023px]:flex-col min-[767px]:max-[1023px]:gap-4 min-[767px]:max-[1023px]:p-0 max-[767px]:items-start max-[767px]:flex-col max-[767px]:gap-4 max-[767px]:p-0">
        <div className="basis-1/2 min-[767px]:max-[1023px]:basis-full max-[767px]:basis-full">
          <p className="text-[#858585] text-[24px] font-['Kind_Sans_Regular','Kind_Sans',sans-serif] mb-0 max-[767px]:text-[20px]">
            Choose a location
          </p>
          <h4 className="text-white text-[56px] font-semibold font-['Kunire_Grotesk',sans-serif] leading-[1.02] mt-[12px] uppercase max-[767px]:text-[32px]">
            A different
            <br /> <HalfHighlight color="#F15A29">Reality</HalfHighlight>
          </h4>
        </div>

        <p className="basis-1/2 font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[20px] font-light leading-[32px] text-right text-[#acacac] min-[767px]:max-[1023px]:basis-full min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:leading-[150%] min-[767px]:max-[1023px]:text-left max-[767px]:basis-full max-[767px]:text-[16px] max-[767px]:leading-[150%] max-[767px]:text-left">
          A multicultural experience is one of the ways AIESEC build leaders all
          around the world. Volunteer in a completely new region, away from your
          residence, in Nigeria and experience life from their eyes. Experience
          a new culture and a new life with AIESEC.
        </p>
      </div>

      <div className="flex items-center gap-6 mb-4 mt-24 animate-[scrollInfinity_30s_linear_infinite] min-[767px]:max-[1023px]:items-center min-[767px]:max-[1023px]:justify-center min-[767px]:max-[1023px]:gap-4 min-[767px]:max-[1023px]:mb-4 min-[767px]:max-[1023px]:flex-wrap min-[767px]:max-[1023px]:mt-9 min-[767px]:max-[1023px]:animate-none max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-4 max-[767px]:mb-4 max-[767px]:flex-wrap max-[767px]:mt-9 max-[767px]:animate-none">
        {citiesInfinite.map((data, i) => {
          return (
            <div key={i} className={cityClass}>
              <div className={`${cityInnerClass} ${cityBg(i)}`}>{data}</div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-6 mb-4 ml-[calc(-100%-100vw)] animate-[scrollInfinity2_40s_linear_infinite] min-[767px]:max-[1023px]:items-center min-[767px]:max-[1023px]:justify-center min-[767px]:max-[1023px]:gap-4 min-[767px]:max-[1023px]:mb-4 min-[767px]:max-[1023px]:flex-wrap min-[767px]:max-[1023px]:ml-[calc(-100%-100vw)] min-[767px]:max-[1023px]:animate-none min-[767px]:max-[1023px]:hidden max-[767px]:items-center max-[767px]:justify-center max-[767px]:gap-4 max-[767px]:mb-4 max-[767px]:flex-wrap max-[767px]:ml-[calc(-100%-100vw)] max-[767px]:animate-none max-[767px]:hidden">
        {citiesInfinite.reverse().map((data, i) => {
          return (
            <div key={i} className={cityClass}>
              <div className={`${cityInnerClass} ${cityBg(i)}`}>{data}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NvHomeStates;
