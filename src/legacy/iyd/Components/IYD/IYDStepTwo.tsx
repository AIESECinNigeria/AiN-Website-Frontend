"use client";

import IYDInput from './IYDInput';
import IYDSelect from './IYDSelect';

import type { IYDForm } from './useIYDForm';

interface IYDStepTwoProps {
  form: IYDForm;
}

const IYDStepTwo = ({ form }: IYDStepTwoProps) => {
  const { formData, updateField, submit, loading, validateStepTwo } = form;

  return (
    <div className="space-y-4">
      <IYDSelect
        label="Age Range"
        value={formData.ageRange}
        placeholder="Select an age range"
        onChange={(e) => updateField('ageRange', e.target.value)}
        options={['18-21', '22-25', '26-30']}
      />

      <IYDSelect
        label="Attendance"
        value={formData.attendance}
        placeholder="Select how you will be attending"
        onChange={(e) => updateField('attendance', e.target.value)}
        options={['Physical', 'Virtual']}
      />

      <IYDSelect
        label="Are you an AIESECer?"
        value={formData.isAiesecer}
        placeholder="Select an option"
        onChange={(e) => updateField('isAiesecer', e.target.value)}
        options={['Yes', 'No']}
      />

      <IYDSelect
        label="How did you hear about IYD?"
        value={formData.hearAbout}
        placeholder="Select a medium"
        onChange={(e) => updateField('hearAbout', e.target.value)}
        options={[
          'Social Media',
          'Friend / Referral',
          'AIESEC Member',
          'Email',
          'Other',
        ]}
      />

      <IYDInput
        label="What are your expectations?"
        placeholder="Enter your expectations about IYD"
        value={formData.expectations}
        onChange={(e) => updateField('expectations', e.target.value)}
      />

      <button
        disabled={!validateStepTwo() || loading}
        onClick={submit}
        className={`mt-8 w-full py-4 text-base md:text-lg lg:text-xl font-medium transition disabled:cursor-not-allowed ${
          validateStepTwo()
            ? 'bg-[#B9FB02] text-[#314C31]'
            : 'bg-white/10 text-white'
        }`}
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  );
};

export default IYDStepTwo;
