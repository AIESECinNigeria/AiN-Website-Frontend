"use client";
import { useRouter } from 'next/navigation';

let modalBody =
  'https://res.cloudinary.com/dof4l5eul/image/upload/v1743762926/AIESEC/NVSuccess_doh17j.png';

const ModalBody = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push('/nv');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleClose}
    >
      {/* Modal Content */}
      <div
        className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-[475px] "
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <div
          style={{ backgroundImage: `url(${modalBody})` }}
          className="relative rounded-md flex bg-cover bg-center h-[349px]"
        >
          {/* Close Button */}
          <div
            className="absolute top-2 right-2 bg-white text-gray-500 text-base px-3 py-1 cursor-pointer rounded-full shadow-md"
            onClick={handleClose}
          >
            ✕
          </div>
        </div>

        {/* Modal Text */}
        <div className="text-center px-5 py-10 flex flex-col items-center justify-center">
          <div>
            <h4 className="text-[32px] font-extrabold text-body">
              Sign Up Successful
            </h4>
            <p className="text-[18px] text-mainText">
              Keep an eye on your mail address for more updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBody;
