import { cld } from '@/lib/cloudinary';
import './SuccessView.css';
const starPurple = cld('ain/ls/starPurple');
const track = cld('ain/ls/Track');

const SuccessView = ({ message }) => {
  return (
    <div>
      <section
        className="h-screen mt-18 bg-black text-white overflow-hidden relative"
        id="registerbanner"
      >
        <div
          className="relative z-40"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 modal-bg transition-opacity"></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-black relative overflow-hidden text-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 border border-white rounded-xl">
                  <div className="fcd">
                    <div dangerouslySetInnerHTML={{ __html: message }} />
                    <img
                      src={starPurple}
                      className="absolute -bottom-1 -left-2 lg:-bottom-4 lg:-left-4 h-auto w-10 lg:w-20 z-[2]"
                      alt=""
                    />
                    <img
                      src={track}
                      className="absolute -top-8 -right-4 lg:-top-10 rotate-90 lg:-right-8 h-auto w-20 lg:w-40 z-[2]"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessView;
