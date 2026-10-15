"use client";
import { createContext, useState } from 'react';
import { requestHandler2 } from '../HelperFunctions/requestHandler';

export const NvContext = createContext();

const NvContextProvider = ({ children }) => {
  // States
  const [nvSignUpForm, setNvSignUpForm] = useState({
    name: '',
    email: '',
    phone_number: '',
    gender: '',
    age: '',
    volunteering_experience: '',
    member_of_aiesec: '',
    travel_from: '',
    preferred_location: '',
    preferred_project: '',
    health_issues: '',
    please_specify: '',
    who_do_we_contact: '',
    emergency_contact: '',
    anything_else_to_know: '',
  });
  const [nvSignupSubmit, setNvSignUpSubmit] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const submitNvSignUpForm = () => {
    requestHandler2({
      url: 'https://ain-backend.fly.dev/api/nv/register',
      data: nvSignUpForm,
      setState: setNvSignUpSubmit,
      method: 'POST',
      successFunction: () => {
        setNvSignUpForm({
          name: '',
          email: '',
          phone_number: '',
          gender: '',
          age: '',
          volunteering_experience: '',
          member_of_aiesec: '',
          travel_from: '',
          preferred_location: '',
          preferred_project: '',
          health_issues: '',
          please_specify: '',
          who_do_we_contact: '',
          emergency_contact: '',
          anything_else_to_know: '',
        });
      },
    });
  };

  return (
    <NvContext.Provider
      value={{
        nvSignUpForm,
        setNvSignUpForm,
        submitNvSignUpForm,
        nvSignupSubmit,
      }}
    >
      {children}
    </NvContext.Provider>
  );
};

export default NvContextProvider;
