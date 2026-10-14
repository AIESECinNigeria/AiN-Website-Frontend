import LeadershipHomePageHero from '../../Containers/LeadershipHomePageHero/LeadershipHomePageHero'
import LeadershipOurWhat from '../../Containers/LeadershipOurWhat/LeadershipOurWhat'
import LeadershipOurTheme from '../../Containers/LeadershipOurTheme/LeadershipOurTheme';
import LeadershipWhyAttend from '../../Containers/LeadershipWhyAttend/LeadershipWhyAttend'
import LeadershipAboutAIESEC from '../../Containers/LeadershipAboutAIESEC/LeadershipAboutAIESEC';
import LeadershipWaitlist from '../../Containers/LeadershipWaitlist/LeadershipWaitlist';

const LeadershipHome = () => {
    return (
        <>
            <LeadershipHomePageHero/>
            <LeadershipOurWhat/>
            <LeadershipOurTheme/>
            <LeadershipWhyAttend/>
            <LeadershipAboutAIESEC/>
            <LeadershipWaitlist/>
        </>
    );
};

export default LeadershipHome;
