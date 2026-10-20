import NvBecomeAVolunteer from '../../Containers/NvBecomeAVolunteer/NvBecomeAVolunteer';
import NvHomePageFaqs from '../../Containers/NvHomeFaqs/NvHomeFaqs';
import NvHomeImpact from '../../Containers/NvHomeImpact/NvHomeImpact';
import NvHomePageHero from '../../Containers/NvHomePageHero/NvHomePageHero';
import NvHomeStates from '../../Containers/NvHomeStates/NvHomeStates';
import NvHomeVolunteers from '../../Containers/NvHomeVolunteers/NvHomeVolunteers';
import NvMeasureYourImpact from '../../Containers/NvMeasureYourImpact/NvMeasureYourImpact';

const NvHome = () => {
  return (
    <>
      <NvHomePageHero />
      <NvBecomeAVolunteer />
      <NvMeasureYourImpact />
      <NvHomeStates />
      <NvHomeImpact />
      <NvHomeVolunteers />
      <NvHomePageFaqs />
    </>
  );
};

export default NvHome;
