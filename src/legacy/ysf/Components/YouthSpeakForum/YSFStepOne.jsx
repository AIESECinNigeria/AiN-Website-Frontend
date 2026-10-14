"use client";
import YSFInput from './YSFInput';
import YSFSelect from './YSFSelect';

import {schools} from "@/data/schools"
import {LCOptions} from "@/data/options"

const YSFStepOne = ({ form }) => {
  const { formData, updateField, next, validateStepOne } = form;

  return (
    <div className="space-y-4">
      {/* Fields */}

      <YSFInput
        label="Full Name"
        placeholder="Enter first and last name"
        value={formData.fullName}
        onChange={(e) => updateField('fullName', e.target.value)}
      />

      {/* Phone */}

      <div className="space-y-2">
        <label  className="
       text-lg md:text-xl
        text-[#666666]
        font-body
        leading-[150%] tracking-[-2%]
        ">Phone Number</label>

        <div className="flex gap-3">
          <select
            className="
w-[90px]
bg-[#F7F7F7]
rounded-lg
p-4
outline-none
text-lg md:text-xl text-black
"
          >
            <option>+234</option>

            <option>+233</option>

            <option>+1</option>

            <option>+44</option>
          </select>

          <input
            value={formData.phoneNumber}
            onChange={(e) => updateField('phoneNumber', e.target.value)}
            placeholder="
Enter phone number
"
            className="
flex-1
bg-[#F7F7F7]
rounded-lg
p-4
outline-none
text-xl text-black placeholder:text-[#666666]
"
          />
        </div>
      </div>

      <YSFInput
        label="Email Address"
        placeholder="
        Enter email address
        "
        value={formData.email}
        onChange={(e) => updateField('email', e.target.value)}
      />

      <YSFSelect
        label="
        Present Location
        "
        value={formData.location}
        placeholder={"Select present location"}
        onChange={(e) => updateField('location', e.target.value)}
        options={LCOptions}
        searchable = {true}
      />

      <YSFSelect
        label="Employment Status"
        value={formData.employmentStatus}
        placeholder={"Select an option"}
        onChange={(e) => updateField('employmentStatus', e.target.value)}
        options={[
"Employed",
"Self Employed",
"Student",
"Unemployed",
]}
      />

      <YSFSelect
        label="University"
        value={formData.university}
        placeholder={"Select present university"}
        onChange={(e) => updateField('university', e.target.value)}
        options={schools}
        searchable = {true}
      />

      <YSFSelect
        label="
        Academic Level
        "
        value={formData.academicLevel}
        placeholder={"Select your academic level"}
        onChange={(e) => updateField('academicLevel', e.target.value)}
        options={['100', '200', '300', '400', '500', '600', 'Graduate', 'Others']}
      />

      <YSFInput
        label="
        Course of Study
        "
        placeholder="
        Enter your course of study
        "
        value={formData.course}
        onChange={(e) => updateField('course', e.target.value)}
      />

      {/* Next */}

      <button
        disabled={!validateStepOne()}
        onClick={next}
        className="
        w-full
        py-4
        rounded-full
        text-white
        mt-8
        disabled:opacity-40
        bg-gradient-to-r
        from-[#7552CC]
        via-[#0CB9C1]
        to-[#00C16E]
        "
      >
        Next
      </button>
    </div>
  );
};

export default YSFStepOne;
