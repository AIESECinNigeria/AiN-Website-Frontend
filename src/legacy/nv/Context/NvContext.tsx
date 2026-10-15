"use client";
import { createContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { requestHandler2 } from '../HelperFunctions/requestHandler';

export interface NvSignUpForm {
  name: string;
  email: string;
  phone_number: string;
  gender: string;
  age: string;
  volunteering_experience: string;
  member_of_aiesec: string;
  travel_from: string;
  preferred_location: string;
  preferred_project: string;
  health_issues: string;
  please_specify: string;
  who_do_we_contact: string;
  emergency_contact: string;
  anything_else_to_know: string;
}

export interface NvSignupSubmit {
  isLoading: boolean;
  data: unknown;
  error: unknown;
}

export interface NvCtx {
  nvSignUpForm: NvSignUpForm;
  setNvSignUpForm: Dispatch<SetStateAction<NvSignUpForm>>;
  submitNvSignUpForm: () => void;
  nvSignupSubmit: NvSignupSubmit;
}

export const NvContext = createContext<NvCtx | undefined>(undefined);

const NvContextProvider = ({ children }: { children: ReactNode }) => {
  // States
  const [nvSignUpForm, setNvSignUpForm] = useState<NvSignUpForm>({
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
  const [nvSignupSubmit, setNvSignUpSubmit] = useState<NvSignupSubmit>({
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
