import YSFAbout from '../../Components/Sections/YSFAbout';
import YSFHomeHero from '../../Components/Sections/YSFHomeHero';
// import YSFPartners from '../../Components/Sections/YSFPartners';
import YSFTimeline from '../../Components/Sections/YSFTimeline';
import YSFFaqs from '../../Components/Sections/YSFFaqs';
import YSFReviews from '../../Components/Sections/YSFReviews';
const NvHome = () => {
  return (
    <>
     <YSFHomeHero />
     <YSFAbout />
     {/* <YSFPartners /> */}
     <YSFTimeline />
     <YSFFaqs  />
     <YSFReviews />
    </>
  );
};

export default NvHome;
