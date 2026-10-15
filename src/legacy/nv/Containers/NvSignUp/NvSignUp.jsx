"use client";
import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import { cld } from '@/lib/cloudinary';
import Button from '../../Components/Button/Button';
import DropdownWithSearch from '../../Components/DropdownWithSearch/DropdownWithSearch';
import Input from '../../Components/Input/Input';
import NvFormLayout from '../../Components/NvFormLayout/NvFormLayout';
import { NvContext } from '../../Context/NvContext';
import { inputChangeHandler } from '../../HelperFunctions/inputFunction';
import { scrollToTheTop } from '../../Utilities/scrollToTop';
import { cities, states } from '../NvHomeStates/NvHomeStates';
import classes from './NvSignUp.module.css';
const vector12 = cld('ain/nv/vector12');

const NvSignUp = () => {
  // context
  const { nvSignUpForm, setNvSignUpForm } = useContext(NvContext);

  // Local
  const localFormDetails =
    typeof window !== 'undefined'
      ? JSON.parse(sessionStorage.getItem('nv-form'))
      : null;

  // States
  const [city, setCity] = useState(
    localFormDetails?.preferred_location || localFormDetails?.prefer_location || ''
  );
  const [gender, setGender] = useState(localFormDetails?.gender || '');
  const [age, setAge] = useState(localFormDetails?.age || '');
  const [volunteeringExperience, setVolunteeringExperience] = useState(
    localFormDetails?.volunteering_experience || ''
  );
  const [aiesecMember, setAiesecMember] = useState(
    localFormDetails?.member_of_aiesec || ''
  );
  const [travelFrom, setTravelFrom] = useState(
    localFormDetails?.travel_from || ''
  );

  //   Router
  const router = useRouter();

  // Effects
  useEffect(() => {
    if (gender) {
      setNvSignUpForm((prevState) => {
        return { ...prevState, gender };
      });
    }

    if (age) {
      setNvSignUpForm((prevState) => {
        return { ...prevState, age };
      });
    }

    if (volunteeringExperience) {
      setNvSignUpForm((prevState) => {
        return {
          ...prevState,
          volunteering_experience: volunteeringExperience,
        };
      });
    }

    if (aiesecMember) {
      setNvSignUpForm((prevState) => {
        return {
          ...prevState,
          member_of_aiesec: aiesecMember,
        };
      });
    }

    if (travelFrom) {
      setNvSignUpForm((prevState) => {
        return {
          ...prevState,
          travel_from: travelFrom,
        };
      });
    }

    if (city) {
      setNvSignUpForm((prevState) => {
        return {
          ...prevState,
          preferred_location: city,
        };
      });
    }

    // eslint-disable-next-line
  }, [gender, age, volunteeringExperience, aiesecMember, travelFrom, city]);

  useEffect(() => {
    setCity(nvSignUpForm?.preferred_location || nvSignUpForm?.prefer_location);
    setGender(nvSignUpForm?.gender);
    setAge(nvSignUpForm?.age);
    setVolunteeringExperience(nvSignUpForm?.volunteering_experience);
    setAiesecMember(nvSignUpForm?.member_of_aiesec);
    setTravelFrom(nvSignUpForm?.travel_from);

    // eslint-disable-next-line
  }, []);

  return (
    <NvFormLayout notShowFooter>
      <form className="bg-white px-10 py-10 lg:px-28 lg:py-16 rounded-[30px]">
        <div className={classes.headingWrap}>
          <h4 className={classes.headingTitle}>SIGN UP HERE</h4>
          <img src={vector12} alt="" className={classes.headingVector} />
        </div>
        <Input
          label="Fullname (Surname first)"
          placeholder="Full name"
          onChange={(e) => {
            inputChangeHandler(e, setNvSignUpForm);
          }}
          name="name"
          value={nvSignUpForm.fullname}
        />
        <Input
          label="Email Address"
          placeholder="me@mail.com"
          type="email"
          onChange={(e) => {
            inputChangeHandler(e, setNvSignUpForm);
          }}
          name="email"
          value={nvSignUpForm.email}
        />
        <Input
          label="Phone number"
          placeholder="+234 *** ***"
          type="phone"
          onChange={(e) => {
            inputChangeHandler(e, setNvSignUpForm);
          }}
          name="phone_number"
          value={nvSignUpForm.phone_number}
        />
        <DropdownWithSearch
          options={['Male', 'Female', 'Prefer not to say', 'Others']}
          title="Select"
          label="Gender"
          selected={gender || nvSignUpForm?.gender}
          setSelected={setGender}
        />
        <DropdownWithSearch
          options={['16 -18', '19 - 21', '21-27', 'Above 27']}
          title="Select"
          label="Age Range"
          selected={age || nvSignUpForm?.age}
          setSelected={setAge}
        />
        <DropdownWithSearch
          options={[
            "Yes, I'm basically a hero",
            'No, This will be my first time',
          ]}
          title="Select"
          label="Do you have any previous volunteering experience?"
          selected={
            volunteeringExperience || nvSignUpForm?.volunteering_experience
          }
          setSelected={setVolunteeringExperience}
        />
        <DropdownWithSearch
          options={['Yes', 'No']}
          title="Select"
          label="Are you a member of AIESEC?"
          selected={aiesecMember || nvSignUpForm?.member_of_aiesec}
          setSelected={setAiesecMember}
        />
        <DropdownWithSearch
          options={[...states]}
          title="Select"
          label="Where are you travelling from?"
          selected={travelFrom || nvSignUpForm?.travel_from}
          setSelected={setTravelFrom}
        />

        <DropdownWithSearch
          options={[...cities].filter((data) => {
            return data !== nvSignUpForm?.travel_from;
          })}
          title="Select"
          label="Location of your preferred project"
          selected={city || nvSignUpForm?.preferred_location}
          setSelected={setCity}
        />

        <div
          className="w-[70%] mx-auto mt-20 bg-[#08841B] rounded-lg text-white text-center cursor-pointer py-4"
          onClick={(e) => {
            e.preventDefault();
            scrollToTheTop();
            router.push(`/nv/sign-up/${city?.replace(' ', '-')?.toLowerCase()}`);
          }}
          disabled={
            !nvSignUpForm.name ||
            !nvSignUpForm.email ||
            !nvSignUpForm.phone_number ||
            !nvSignUpForm.gender ||
            !nvSignUpForm.age ||
            !nvSignUpForm.volunteering_experience ||
            !nvSignUpForm.member_of_aiesec ||
            !nvSignUpForm.travel_from ||
            !nvSignUpForm.preferred_location
          }
        >
          Next
        </div>
      </form>
    </NvFormLayout>
  );
};

export default NvSignUp;
