"use client";
import { useState } from 'react';

const initialValues = {
  fullName: '',
  email: '',
  location: '',

  countryCode: '+234',
  phoneNumber: '',

  university: '',
  academicLevel: '',
  course: '',

  employmentStatus: '',

  expectations: '',
  ageRange: '',

  sdgKnowledge: '',

  attendance: '',

  discoverySource: '',
};

const useYSFForm = () => {
  const [formData, setFormData] = useState(initialValues);

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [successOpen, setSuccessOpen] = useState(false);

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStepOne = () => {
    return (
      formData.fullName &&
      formData.phoneNumber &&
      formData.email &&
      formData.location &&
      formData.employmentStatus &&
      formData.university &&
      formData.academicLevel &&
      formData.course
    );
  };

  const validateStepTwo = () => {
    return (
      formData.ageRange &&
      formData.sdgKnowledge &&
      formData.attendance &&
      formData.discoverySource &&
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
      const cleanedPhone =
formData.phoneNumber
.trim()

// remove spaces
.replace(/\s+/g, "")

// remove leading zero only if present
.replace(/^0/, "");
      const payload = {
        name: formData.fullName,

        email: formData.email,

        location: formData.location,

        phone_number: `${formData.countryCode}${cleanedPhone}`,

        university: formData.university,

        academic_level: formData.academicLevel,

        academic_major: formData.course,

        employment_status: formData.employmentStatus,

        expectations: formData.expectations,

        age_range: formData.ageRange,

        sdg_interest: formData.sdgKnowledge,

        attendance_type: formData.attendance,

        how_hear_about_ysf: formData.discoverySource,
      };

      const response = await fetch('https://ain-backend.fly.dev/api/ysf_2026/register', {
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

export default useYSFForm;
