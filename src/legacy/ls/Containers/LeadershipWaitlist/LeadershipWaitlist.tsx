"use client";
import { useState } from 'react';
import SuccessView from '../../Components/LSSuccess/SuccessView';
import CloudImage from "@/components/CloudImage";

interface NotifyOptions {
  status: string;
  title: string;
  text: string;
  effect: string;
  speed: number;
  showIcon: boolean;
  showCloseButton: boolean;
  autoclose: boolean;
  autotimeout: number;
  gap: number;
  distance: number;
  type: number;
  position: string;
}

const LeadershipWaitlist = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const submitMail = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === '') {
      notification('error', 'Error', 'The email field is required');
    } else {
      const formData = {
        email: email,
      };
      setLoading(true);

      fetch('https://ain-backend.fly.dev/api/submit_email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            setLoading(false);
          }
          return response.json();
        })
        .then((data) => {
          setEmail('');
          if (data && data.detail === 'registration success') {
            setMessage(`
              <div class="my-5 py-10 text-center">
                <h3 class="lg:text-4xl text-xl font-semibold" id="modal-title">Thank you for signing up.</h3>
                <div class="my-2">
                  <p class="text-base lg:text-xl mx-auto max-w-sm">You're now on our waitlist. Keep an eye out for updates in your mail.</p>
                </div>
                <a href="/" class="underline text-prime">Home</a>
              </div>
            `);
            setModal(true);
            setLoading(false);
          } else if (data && data.detail === 'already registered') {
            notification('error', 'Error', 'This email already exists with us');
            setLoading(false);
          }
        })
        .catch((error) => {
          setLoading(false);
          notification('error', 'Error', 'There was a problem with the fetch operation.');
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };

  const notification = (type: string, title: string, message: string) => {
    const { Notify } = window as unknown as { Notify: new (options: NotifyOptions) => void };
    new Notify({
      status: type,
      title: title,
      text: message,
      effect: 'slide',
      speed: 2000,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 5000,
      gap: 100,
      distance: 20,
      type: 1,
      position: 'right top',
    });
  };

  return (
    <div>
      {modal && <SuccessView message={message} />}
      <section className="bg-[#121212] text-white overflow-hidden relative">
        <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-20 py-20 lg:my-24 z-[20] relative">
          <div className="relative max-w-3xl mx-auto">
            <h1 className="text-[43px] my-2 text-center max-w-lg mx-auto leading-none">
              <span className="font-['Raleway',sans-serif] font-semibold">We're recruiting soon, and</span>{' '}
              <span className="font-['Clash_Display',sans-serif] font-light">you can't miss out on it.</span>
            </h1>
            <p className="font-light text-base font-['Clash_Display',sans-serif] text-center max-w-sm mx-auto">
              Join the mailing list to get more information immediately after it goes out.
            </p>

            <div className="flex flex-col justify-center my-10">
              <form onSubmit={submitMail} id="waitlistForm">
              {/* <form id="waitlistForm"> */}
                <div className="flex md:flex-row flex-col items-stretch justify-center gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    placeholder="Enter Email"
                    className="font-['Raleway',sans-serif] rounded-[8px] border border-black bg-[#ebeff7] text-black w-[45%] py-[12px] px-[16px] max-[480px]:w-full placeholder:text-[#969696]"
                  />
                  <button
                    type="submit"
                    className="w-100 flex text-center items-center justify-center no-underline py-[12px] px-[30px] bg-[var(--primary-color)] rounded-[8px] font-['Lato'] max-[500px]:rounded-[4px] max-[500px]:py-[12px] max-[500px]:px-[16px] text-black text-base border-white border"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        Loading
                        <svg className="spinner animate-spin ms-2" viewBox="0 0 50 50">
                          <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                        </svg>
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <CloudImage id="ain/ls/arrow" className="ml-1 lg:h-6" alt="Arrow" />
                      </>
                    )}
                  </button>
                </div>
              </form>

              <div className="relative my-3 flex w-fit mx-auto justify-center">
                <p className="font-['Clash_Display',sans-serif] text-[#a7a2a2] text-center relative">
                  We promise not to <span className="font-['Clash_Display',sans-serif] text-[#5b57f4]">spam</span> you.
                </p>
                <CloudImage
                  id="ain/ls/banner-star"
                  className="absolute -top-4 -left-6 h-auto w-10 z-[2]"
                  alt="Star"
                />
              </div>
            </div>
          </div>
        </div>
        <CloudImage
          id="ain/ls/OrangeStar"
          className="absolute -top-2 -right-8 lg:-top-2 lg:-right-10 h-auto w-20 lg:w-40 z-[2]"
          alt="Orange Star"
        />
        <CloudImage
          id="ain/ls/pStar"
          className="absolute bottom-0 -left-10 lg:-left-20 h-auto w-28 lg:w-60 z-[2]"
          alt="P Star"
        />
      </section>
    </div>
  );
};

export default LeadershipWaitlist;
