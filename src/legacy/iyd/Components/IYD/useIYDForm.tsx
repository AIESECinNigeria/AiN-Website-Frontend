"use client";

import { useState } from 'react';

export interface IYDFormData {
  fullName: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  presentLocation: string;
  isAiesecer: string;
  isSchooling: string;
  university: string;
  academicLevel: string;
  ageRange: string;
  attendance: string;
  hearAbout: string;
  expectations: string;
}

const initialValues: IYDFormData = {
  fullName: '',
  countryCode: '+234',
  phoneNumber: '',
  email: '',
  presentLocation: '',
  isAiesecer: '',
  isSchooling: '',
  university: '',
  academicLevel: '',

  ageRange: '',
  attendance: '',
  hearAbout: '',
  expectations: '',
};

const useIYDForm = () => {
  const [formData, setFormData] = useState<IYDFormData>(initialValues);
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [successOpen, setSuccessOpen] = useState<boolean>(false);

  const updateField = (field: keyof IYDFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStepOne = () => {
    return (
      formData.fullName &&
      formData.phoneNumber &&
      formData.email &&
      formData.presentLocation &&
      formData.isSchooling &&
      formData.university &&
      formData.academicLevel
    );
  };

  const validateStepTwo = () => {
    return (
      formData.ageRange &&
      formData.attendance &&
      formData.isAiesecer &&
      formData.hearAbout &&
      formData.expectations
    );
  };

  const next = () => {
    if (validateStepOne()) {
      setStep(2);
    }
  };

  const previous = () => {
    setStep(1);
  };

  const submit = async () => {
    if (!validateStepTwo()) return;

    setLoading(true);

    try {
      const cleanedPhone = formData.phoneNumber
        .trim()
        .replace(/\s+/g, '')
        .replace(/^0/, '');

      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone_number: `${formData.countryCode}${cleanedPhone}`,
        location: formData.presentLocation,
        is_aiesecer: formData.isAiesecer,
        is_schooling: formData.isSchooling,
        university: formData.university,
        academic_level: formData.academicLevel,
        age_range: formData.ageRange,
        attendance_type: formData.attendance,
        how_hear_about_iyd: formData.hearAbout,
        expectations: formData.expectations,
      };

      // NOTE: confirm/replace this endpoint — guessed from the YSF pattern (ain-backend.fly.dev/api/{event}_2026/register)
      const response = await fetch('https://ain-backend.fly.dev/api/iyd_2026/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Payload:', payload);

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      console.log(data);
      setSuccessOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    updateField,
    step,
    next,
    previous,
    submit,
    loading,
    validateStepOne,
    validateStepTwo,
    successOpen,
    setSuccessOpen,
  };
};

export type IYDForm = ReturnType<typeof useIYDForm>;

export default useIYDForm;
