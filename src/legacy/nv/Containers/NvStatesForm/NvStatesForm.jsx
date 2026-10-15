"use client";
// TODO: remove unused imports
// import { Radio } from '@mui/material';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
// import Button from '../../Components/Button/Button';
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch';
import Input from '../../Components/Input/Input';
import NvFormLayout from '../../Components/NvFormLayout/NvFormLayout';
import { NvContext } from '../../Context/NvContext';
import { activteToggler } from '../../HelperFunctions/activeToggler';
import classes from './NvStatesForm.module.css';
import { inputChangeHandler } from '../../HelperFunctions/inputFunction';
import { scrollToTheTop } from '../../Utilities/scrollToTop';
// import FormSubmitModal from '../../Components/Modals/FormSubmitModal/FormSubmitModal';
import ModalBody from './ModalBody';

const projects = [
  {
    title: 'One Skilled Girl, One Smart Village',
    description:
      'The project aims to increase the number of empowered girls/women, aged 13-25, by empowering them with relevant vocational and soft skills, within underserved communities like IDP Camps in Nigeria to improve access to decent employment and building sustainable pathways for them in their immediate communities. The project highlights some common goals with SDG 1 (No poverty), SDG 4 (Quality education), and SDG 10 (Reduced inequalities).',
    isActive: false,
    states: 'abuja',
  },
  {
    title: 'Unite & Build',
    description:
      'Unite & Build is a strategic volunteer partnership initiative that strengthens NGOs, non-profits, and foundations through operational, administrative, and strategic support.',
    isActive: false,
    states: 'abuja',
  },
  {
    title: 'Project Rural Child Education',
    description:
      'This project aims to help educate kids in low-income communities with basic numeracy and literacy knowledge.',
    isActive: false,
    states: 'ogun',
  },
  {
    title: 'EDUTECH',
    description:
      'This project equips children in rural communities with digital skills and information to prepare them for future opportunities.',
    isActive: false,
    states: 'benue',
  },
  {
    title: 'Helping Hands',
    description:
      'The project contributes to SDG 3 by providing caregiving support in healthcare settings and assisting with daily hospital routines.',
    isActive: false,
    states: 'benue',
  },
  {
    title: 'Teach a Child',
    description:
      'This project provides children and young people with quality learning opportunities toward literacy and numeracy growth.',
    isActive: false,
    states: 'benue',
  },
  {
    title: 'HELPING HANDS',
    description:
      'This project supports children and adults living with disabilities through care, engagement, and educational activities.',
    isActive: false,
    states: 'cross-river',
  },
  {
    title: 'Edu Innovation Hub',
    description:
      'This project increases access to employability and entrepreneurship skills for young children and teenagers.',
    isActive: false,
    states: 'cross-river',
  },
  {
    title: 'Light',
    description:
      'This project supports street children through counselling, emotional support, and educational engagement activities.',
    isActive: false,
    states: 'cross-river',
  },
  {
    title: 'Edurural',
    description:
      'The project ensures inclusive and equitable quality education opportunities, especially in underserved communities.',
    isActive: false,
    states: 'edo',
  },
  {
    title: 'Skill Up',
    description:
      'The project provides community members with opportunities to learn modern and in-demand skills.',
    isActive: false,
    states: 'edo',
  },
  {
    title: 'Bloom',
    description:
      'This project promotes inclusive quality education and long-term learning opportunities in the community.',
    isActive: false,
    states: 'edo',
  },
  {
    title: 'Nurture',
    description:
      'This project improves access to education for children in orphanages through tutoring, extracurricular activities, and life-skills training.',
    isActive: false,
    states: 'edo',
  },
  {
    title: 'VestUp',
    description:
      'This project develops financial literacy and entrepreneurship skills among young people to support SDG 8.',
    isActive: false,
    states: 'enugu',
  },
  {
    title: 'Skill Up',
    description:
      'This project trains young people in practical hard skills and provides career guidance for employability.',
    isActive: false,
    states: 'enugu',
  },
  {
    title: 'Techit Up!',
    description:
      'This project supports skill-based tech learning and hands-on problem solving for young people.',
    isActive: false,
    states: 'enugu',
  },
  {
    title: 'HIV Hotline and Counseling',
    description:
      'This project provides accurate HIV information and counselling support through a nationwide hotline.',
    isActive: false,
    states: 'lagos',
  },
  {
    title: 'Early Child Education',
    description:
      'This project promotes healthy habits and early education support in underserved communities.',
    isActive: false,
    states: 'lagos',
  },
  {
    title: 'Scale Up',
    description:
      'The project contributes to SDG 17 by strengthening local NGOs and social impact organizations.',
    isActive: false,
    states: 'ondo',
  },
  {
    title: 'Educating a Child',
    description:
      'The project adds extracurricular learning including sex education, career/leadership development, and debate.',
    isActive: false,
    states: 'osun',
  },
  {
    title: 'Be More',
    description:
      'The project educates children on entrepreneurship and related skills so they can identify and use opportunities around them.',
    isActive: false,
    states: 'plateau',
  },
  {
    title: 'Beyond Borders',
    description:
      'This project contributes to SDG 4 and 12 by improving access to books and reducing educational resource waste.',
    isActive: false,
    states: 'plateau',
  },
  {
    title: 'Educate the Next Generation',
    description:
      'This project promotes quality education by teaching children economics and ICT/data processing skills.',
    isActive: false,
    states: 'rivers',
  },
  {
    title: 'Healthy Living',
    description:
      'This project teaches children healthy habits, personal hygiene, and emergency safety measures.',
    isActive: false,
    states: 'rivers',
  },
  {
    title: 'Skillify',
    description:
      'This project provides children with holistic learning through practical craft and handy skills.',
    isActive: false,
    states: 'rivers',
  },
  {
    title: 'Glorious Stars',
    description:
      'This project contributes to SDG 4 by equipping students with technical skills outside the classroom.',
    isActive: false,
    states: 'kwara',
  },
  {
    title: 'Glorious Light Academy',
    description:
      'This project contributes to SDG 4 and helps students build practical technical skills.',
    isActive: false,
    states: 'kwara',
  },
  {
    title: 'Ignite',
    description:
      'This project supports SDG 4 through creative and digital learning opportunities for children.',
    isActive: false,
    states: 'oyo',
  },
  {
    title: 'Bright Minds',
    description:
      'This project empowers children in orphanages with a mix of tech and creative skills.',
    isActive: false,
    states: 'oyo',
  },
  {
    title: 'Tech for Impact',
    description:
      'This project builds digital and tech skills in young people through practical training and mentorship.',
    isActive: false,
    states: 'oyo',
  },
];

const NvStatesForm = () => {
  // Router
  const { city } = useParams();
  const router = useRouter();

  // Context
  const { nvSignUpForm, setNvSignUpForm, nvSignupSubmit, submitNvSignUpForm } =
    useContext(NvContext);

  // States
  const [activeProjects, setActiveProjects] = useState([]);
  const [healthIssues, setHealthIssues] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Utils
  const selectedLocationLabel = (
    nvSignUpForm?.preferred_location || city?.replaceAll('-', ' ')
  )?.toUpperCase();

  let selectedProject = activeProjects.find((data) => {
    return data.isActive;
  });

  // Effects
  useEffect(() => {
    if (city) {
      setActiveProjects(
        projects?.filter((data) => {
          return data.states === city;
        })
      );
    }

    // eslint-disable-next-line
  }, [city]);

  useEffect(() => {
    if (nvSignUpForm?.health_issues) {
      setHealthIssues(nvSignUpForm?.health_issues);
    }

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedProject) {
      setNvSignUpForm((prevState) => {
        return { ...prevState, preferred_project: selectedProject?.title };
      });
    }

    // eslint-disable-next-line
  }, [selectedProject]);

  useEffect(() => {
    if (healthIssues) {
      setNvSignUpForm((prevState) => {
        return { ...prevState, health_issues: healthIssues };
      });
    }

    // eslint-disable-next-line
  }, [healthIssues]);

  useEffect(() => {
    if (nvSignupSubmit?.data) {
      setShowModal(true);
    }
  }, [nvSignupSubmit?.data]);

  useEffect(() => {
    if (showModal) {
      const timeout = setTimeout(() => {
        setShowModal(false);
        router.push('/nv');
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [showModal, router]);

  return (
    <NvFormLayout notShowFooter>
      {showModal && <ModalBody />}

      <form className="bg-white p-5 md:px-10 md:py-10 lg:px-28 lg:py-16 rounded-[30px]">
        <h4>{selectedLocationLabel}</h4>

        <h3 className={classes.chooseProject}>Choose your preferred project</h3>
        {activeProjects?.map((data, i) => {
          return (
            <div className={classes.preferredProject} key={data.title}>
              <div
                onClick={() => {
                  activteToggler(i, activeProjects, setActiveProjects);
                }}
                className="mt-7 border border-black flex flex-col"
              >
                <label
                  htmlFor={data.title}
                  className={`${classes.projectTitle} font-semibold text-xl w-full mb-3`}
                >
                  {data.title}
                </label>
                {/* <Radio
                  size="medium"
                  name={data.title}
                  id={data.title}
                  checked={data.isActive}
                /> */}
                <div className="flex items-center justify-center gap-4">
                  <p className="italic font-light text-base w-[80%] md:w-[95%] lg:w-[90%]">
                    {data.description}
                  </p>

                  <div>
                    <input
                      type="checkbox"
                      name={data.title}
                      id={data.title}
                      checked={data.isActive}
                      className="scale-75 md:scale-50 appearance-none border border-[#08841B] w-4 h-4 cursor-pointer rounded-none checked:border-[#08841B] relative checked:after:content-['✔'] checked:after:text-[#08841B] checked:after:text-4xl checked:after:absolute checked:after:top-[50%] checked:after:left-[50%] checked:after:translate-x-[-50%] checked:after:translate-y-[-50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className={classes.formSection}>
          <DropdownWithSearch
            options={['Yes', 'No']}
            title="Select"
            label="Do you have any health issues?*"
            selected={healthIssues || nvSignUpForm?.health_issues}
            setSelected={setHealthIssues}
          />
          {healthIssues === 'Yes' && (
            <Input
              label="If yes, please specify "
              placeholder="Please specify"
              name="please_specify"
              onChange={(e) => {
                inputChangeHandler(e, setNvSignUpForm);
              }}
              value={nvSignUpForm.please_specify}
              readOnly={healthIssues === 'No' || false}
            />
          )}
          <Input
            label="In cases of emergency, who do we contact?"
            placeholder="Type contact name and relationship with this contant"
            tip="Kindly specify your relationship with this person"
            name="who_do_we_contact"
            onChange={(e) => {
              inputChangeHandler(e, setNvSignUpForm);
            }}
            value={nvSignUpForm.who_do_we_contact}
          />

          <Input
            label="Contact Information of Emergency contact"
            placeholder="Type contact information"
            name="emergency_contact"
            onChange={(e) => {
              inputChangeHandler(e, setNvSignUpForm);
            }}
            value={nvSignUpForm.emergency_contact}
          />

          <Input
            label="Any thing else you'd like us to know?"
            placeholder="Tell us anything else we should know"
            name="anything_else_to_know"
            onChange={(e) => {
              inputChangeHandler(e, setNvSignUpForm);
            }}
            value={nvSignUpForm.anything_else_to_know}
          />
        </div>

        {nvSignupSubmit?.error && (
          <p className={classes.error}>{nvSignupSubmit?.error}</p>
        )}

        <div className={classes.buttonSection}>
          <button
            className="border border-[#08841B] text-[#08841B] rounded-lg py-3 px-6 text-xl cursor-pointer"
            subClass="nv"
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              scrollToTheTop();
              router.push('/nv/sign-up');
            }}
          >
            Prev
          </button>
          <button
            className="bg-[#08841B] text-white rounded-lg py-3 px-6 text-xl cursor-pointer"
            subClass="nv"
            disabled={
              !nvSignUpForm?.preferred_project ||
              !nvSignUpForm?.health_issues ||
              !nvSignUpForm?.who_do_we_contact ||
              !nvSignUpForm?.emergency_contact ||
              nvSignupSubmit?.isLoading
            }
            onClick={(e) => {
              e.preventDefault();
              submitNvSignUpForm();
            }}
            // loading={nvSignupSubmit?.isLoading}
          >
            {nvSignupSubmit?.isLoading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      </form>
    </NvFormLayout>
  );
};

export default NvStatesForm;
