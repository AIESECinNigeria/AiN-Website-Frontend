"use client";

import IYDInput from './IYDInput';
import IYDSelect from './IYDSelect';

import {schools} from "@/data/schools"
import {LCOptions} from "@/data/options"

const PRESENT_LOCATIONS = ['Lagos', 'Abuja', 'Ibadan', 'Port Harcourt', 'Other'];
const UNIVERSITIES = ['University of Ibadan', 'University of Lagos', 'Other'];

const IYDStepOne = ({ form }) => {
  const { formData, updateField, next, validateStepOne } = form;

  return (
    <div className="space-y-4">
      <IYDInput
        label="Full Name"
        placeholder="Enter first and last name"
        value={formData.fullName}
        onChange={(e) => updateField('fullName', e.target.value)}
      />

      {/* Phone */}
      <div className="space-y-1.5">
        <label className="block text-base md:text-lg lg:text-xl text-white/90">Phone Number</label>
        <div className="flex gap-2">
          <select
            value={formData.countryCode}
            onChange={(e) => updateField('countryCode', e.target.value)}
            className="w-20 px-2 py-3 text-base md:text-lg lg:text-xl text-white border-none outline-none appearance-none focus:ring-1 focus:ring-[#B9FB02]"
          >
            <option className='text-[#314C31]'>+234</option>
            <option className='text-[#314C31]'>+233</option>
            <option className='text-[#314C31]'>+1</option>
            <option className='text-[#314C31]'>+44</option>
          </select>

          <input
            value={formData.phoneNumber}
            onChange={(e) => updateField('phoneNumber', e.target.value)}
            placeholder="Enter phone number"
            className="flex-1 bg-white/10 px-4 py-3 text-base md:text-lg lg:text-xl text-white border-none outline-none appearance-none rounded-none placeholder:text-white/50 focus:ring-1 focus:ring-[#B9FB02]"
          />
        </div>
      </div>

      <IYDInput
        label="Email Address"
        placeholder="Enter email address"
        value={formData.email}
        onChange={(e) => updateField('email', e.target.value)}
      />

      <IYDSelect
        label="Present Location"
        value={formData.presentLocation}
        placeholder="Select present location"
        onChange={(e) => updateField('presentLocation', e.target.value)}
        options={LCOptions}
        searchable
      />

      <IYDSelect
        label="Schooling"
        value={formData.isSchooling}
        placeholder="Select an option"
        onChange={(e) => updateField('isSchooling', e.target.value)}
        options={['Yes', 'No']}
      />

      <IYDSelect
        label="University"
        value={formData.university}
        placeholder="Select present university"
        onChange={(e) => updateField('university', e.target.value)}
        options={schools}
        searchable
      />

      <IYDSelect
        label="Academic Level"
        value={formData.academicLevel}
        placeholder="Select your academic level"
        onChange={(e) => updateField('academicLevel', e.target.value)}
        options={['N/A', '100', '200', '300', '400', '500', '600', 'Graduate', 'Other']}
      />

     <button
  disabled={!validateStepOne()}
  onClick={next}
  className={`mt-8 w-full py-4 text-base md:text-lg lg:text-xl font-medium transition disabled:cursor-not-allowed ${
    validateStepOne()
      ? 'bg-[#B9FB02] text-[#314C31]'
      : 'bg-white/10 text-white '
  }`}
>
  Next
</button>
    </div>
  );
};

export default IYDStepOne;