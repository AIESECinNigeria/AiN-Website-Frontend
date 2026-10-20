"use client";
import { useRouter } from 'next/navigation';
import Button from '../../Components/Button/Button';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import { scrollToTheTop } from '@/lib/scrollToTop';
import classes from './NvHomePageHero.module.css';

const NvHomePageHero = () => {
  // Navigate
  const router = useRouter();
  return (
    <div className={classes.container}>
      <div className={classes.upperSection}>
        <div>
          <h4>
            IT BEGINS <br className={classes.mobileBreak} />
            <HalfHighlight color="#F15A29">HERE</HalfHighlight>
          </h4>
          <p>Travel, volunteer, and change lives.</p>
        </div>

        <div
          className={`${classes.ctaSection} w-full items-center justify-center`}
        >
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
