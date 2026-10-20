"use client";
import classes from './NvProjectsPageWriteUp.module.css';
import { cld } from '@/lib/cloudinary';
import Button from '../../Components/Button/Button';
import HalfHighlight from '../../Components/HalfHighlight/HalfHighlight';
import { useRouter } from 'next/navigation';
import { scrollToTheTop } from '../../Utilities/scrollToTop';
import NvProjectsSearchBar from '../NvProjectsPageProjects/NvProjectsSearchBar';
const vector9 = cld('ain/nv/vector9');

const NvProjectsPageWriteUp = ({
  showFilter,
  selectedState,
  lcData,
  onToggleFilter,
  onSelectState,
}) => {
  // Router
  const router = useRouter();

  return (
    <>
      <div className={classes.container}>
        <h4>
          "<HalfHighlight color="#F15A29">Volunteers</HalfHighlight> are the only human beings on the
          <br /> face of the earth who reflect this nation's
          <br /> compassion, unselfish caring, patience, and
          <br /> just plain loving one another."
        </h4>

        <p>- Erma Bombeck </p>

        {/* <Button
        onClick={() => {
          navigate('/nv/sign-up');
          scrollToTheTop();
        }}
        subClass="nv"
      >
        <span>Become a volunteer</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.01385 13.884C0.585031 14.4095 0.663395 15.1831 1.18888 15.612C1.71437 16.0408 2.48799 15.9624 2.91681 15.4369L1.01385 13.884ZM14.0575 1.21576C13.9891 0.540944 13.3867 0.0493134 12.7119 0.117667L1.7154 1.23154C1.0406 1.29989 0.548979 1.90235 0.617332 2.57716C0.685687 3.25197 1.28813 3.7436 1.96293 3.67524L11.7376 2.68513L12.7277 12.46C12.7961 13.1348 13.3985 13.6264 14.0733 13.558C14.7481 13.4897 15.2397 12.8872 15.1714 12.2124L14.0575 1.21576ZM2.91681 15.4369L13.7871 2.11598L11.8842 0.563053L1.01385 13.884L2.91681 15.4369Z"
            fill="#F4FAF5"
          />
        </svg>
      </Button> */}
      </div>
      <div className={classes.vectorSection}>
        <img src={vector9} alt="" className={classes.vector9} />
      </div>
      <div className={classes.searchSection}>
        <NvProjectsSearchBar
          showFilter={showFilter}
          selectedState={selectedState}
          lcData={lcData}
          onToggleFilter={onToggleFilter}
          onSelectState={onSelectState}
          className={classes.searchWrapper}
        />
      </div>
    </>
  );
};

export default NvProjectsPageWriteUp;
