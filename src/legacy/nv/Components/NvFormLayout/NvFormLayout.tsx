import { cld } from '@/lib/cloudinary';
import CloudImage from '@/components/CloudImage';

interface NvFormLayoutProps {
  children?: React.ReactNode;
  notShowFooter?: boolean;
}

const NvFormLayout = ({ children, notShowFooter }: NvFormLayoutProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#08841b14] min-[767px]:max-[1023px]:min-h-[calc(100vh-80px)] min-[767px]:max-[1023px]:overflow-y-auto max-[767px]:min-h-[calc(100vh-80px)] max-[767px]:overflow-y-auto">
        <div
          className="p-0 bg-center bg-no-repeat bg-cover min-h-[30vh] flex items-center justify-center min-[767px]:max-[1023px]:py-0 min-[767px]:max-[1023px]:px-5 min-[767px]:max-[1023px]:basis-[160px] max-[767px]:py-0 max-[767px]:px-5 max-[767px]:basis-[160px]"
          style={{ backgroundImage: `url(${cld('ain/nv/formHeader')})` }}
        >
          <div className="relative inline-flex justify-center items-center max-[767px]:text-center">
            <h4 className="text-white font-['Kunire_Grotesk',sans-serif] text-[48px] not-italic font-extrabold leading-[130.5%] uppercase min-[767px]:max-[1023px]:text-[20px] max-[767px]:text-[20px]">
              SIGN UP TO BE A <br className="hidden max-[767px]:block" />
              <span className="text-[#f4be60] font-['Kunire_Grotesk',sans-serif] text-[48px] not-italic font-extrabold leading-[130.5%] min-[767px]:max-[1023px]:text-[20px] max-[767px]:text-[20px]">
                NATIONAL VOLUNTEER
              </span>
            </h4>
            <CloudImage
              id="ain/nv/vector10"
              alt=""
              className="absolute top-[-92px] right-[-108px] w-[128px] h-auto shrink-0 pointer-events-none min-[767px]:max-[1023px]:top-[-44px] min-[767px]:max-[1023px]:right-[-40px] min-[767px]:max-[1023px]:w-[64px] max-[767px]:top-[-28px] max-[767px]:right-[-12px] max-[767px]:w-[48px]"
            />
          </div>
        </div>
        <CloudImage
          id="ain/nv/vector11"
          alt=""
          className="w-full block mt-[-16px] min-[767px]:max-[1023px]:h-[120px] min-[767px]:max-[1023px]:object-cover min-[767px]:max-[1023px]:mt-[-8px] max-[767px]:h-[110px] max-[767px]:object-cover max-[767px]:mt-[-4px]"
        />
        <div className="flex flex-col items-stretch grow mt-[56px] mx-[150px] mb-[150px] min-[767px]:max-[1023px]:basis-auto min-[767px]:max-[1023px]:max-h-[3000px] min-[767px]:max-[1023px]:flex-col min-[767px]:max-[1023px]:mt-[32px] min-[767px]:max-[1023px]:mx-[60px] min-[767px]:max-[1023px]:mb-[60px] max-[767px]:flex-col max-[767px]:mt-0 max-[767px]:mx-0 max-[767px]:mb-[24px]">
          <div className="basis-[60%] bg-[#f9f9f9] border border-[#f5e8d0] py-[34px] px-[27px] rounded-[50px] text-center mt-0 relative z-[1] min-[767px]:max-[1023px]:basis-auto min-[767px]:max-[1023px]:w-full max-[767px]:basis-auto max-[767px]:p-5 max-[767px]:mt-[24px] max-[767px]:mx-auto max-[767px]:mb-[30px] max-[767px]:w-[90%]">
            <p className="text-black font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] not-italic font-normal leading-[1.5] mb-2 normal-case min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:leading-[1.5] min-[767px]:max-[1023px]:mb-4 min-[767px]:max-[1023px]:mt-0 max-[767px]:text-[16px] max-[767px]:leading-[1.5] max-[767px]:mb-4 max-[767px]:mt-0">
              Thank you for indicating interest to be a part of the National
              Volunteer Program.
            </p>
            <p className="text-black font-['Kind_Sans_Regular','Kind_Sans',sans-serif] text-[24px] not-italic font-normal leading-[1.5] mb-2 normal-case min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:leading-[1.5] min-[767px]:max-[1023px]:mb-4 min-[767px]:max-[1023px]:mt-0 max-[767px]:text-[16px] max-[767px]:leading-[1.5] max-[767px]:mb-4 max-[767px]:mt-0">
              Please provide us with the necessary information required to
              curate an amazing experience for you. We can't wait to have you!
            </p>

            <i className="text-black font-['Kind_Sans_Bold','Kind_Sans',sans-serif] text-[24px] font-bold leading-[1.5] mt-10 block normal-case min-[767px]:max-[1023px]:text-[16px] min-[767px]:max-[1023px]:leading-[1.5] min-[767px]:max-[1023px]:mb-4 min-[767px]:max-[1023px]:mt-0 max-[767px]:text-[16px] max-[767px]:leading-[1.5] max-[767px]:mb-4 max-[767px]:mt-0">
              Disclaimer: You cannot apply for a project in your city! Only
              apply for projects in other states
            </i>
          </div>
          <div className="basis-[60%] overflow-visible py-[34px] px-[27px] min-[767px]:max-[1023px]:basis-auto min-[767px]:max-[1023px]:w-full max-[767px]:basis-auto max-[767px]:w-full [&>form>h4]:text-black [&>form>h4]:font-['Kunire_Grotesk',sans-serif] [&>form>h4]:text-[36px] [&>form>h4]:not-italic [&>form>h4]:font-bold [&>form>h4]:leading-[normal] [&>form>h4]:mb-6 [&>form>h4]:uppercase min-[767px]:max-[1023px]:[&>form>h4]:text-[20.381px] max-[767px]:[&>form>h4]:text-[20.381px] [&>form>button]:mt-[100px] min-[767px]:max-[1023px]:[&>form>button]:mt-10 max-[767px]:[&>form>button]:mt-10">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default NvFormLayout;
