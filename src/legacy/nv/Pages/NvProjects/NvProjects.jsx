"use client";
import { useState } from 'react';
import { cld } from '@/lib/cloudinary';
import NvProjectsPageProjects from '../../Containers/NvProjectsPageProjects/NvProjectsPageProjects';
import NvProjectsPageWriteUp from '../../Containers/NvProjectsPageWriteUp/NvProjectsPageWriteUp';
import classes from './NvProjects.module.css';
const vector9 = cld('ain/nv/vector9');

const NvProjects = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedState, setSelectedState] = useState('');

  const lcData = [
    { state: 'All', lc: 'All' },
    { state: 'Ogun', lc: 'Abeokuta' },
    { state: 'FCT', lc: 'Abuja' },
    { state: 'Ondo', lc: 'Akure' },
    { state: 'Edo', lc: 'Benin' },
    { state: 'Benue', lc: 'Makurdi' },
    { state: 'Cross River', lc: 'Calabar' },
    { state: 'Enugu', lc: 'Enugu' },
    { state: 'Oyo', lc: 'Ibadan' },
    { state: 'Osun', lc: 'Ife' },
    { state: 'Kwara', lc: 'Ilorin' },
    { state: 'Plateau', lc: 'Jos' },
    { state: 'Kano', lc: 'Kano' },
    { state: 'Lagos', lc: 'Lagos' },
    { state: 'Rivers', lc: 'Port Harcourt' },
  ];

  return (
    <>
      <NvProjectsPageWriteUp
        showFilter={showFilter}
        selectedState={selectedState}
        lcData={lcData}
        onToggleFilter={() => setShowFilter((prev) => !prev)}
        onSelectState={(state) => {
          if (state === selectedState || state === 'Any') {
            setSelectedState('');
            setShowFilter(false);
            return;
          }

          setSelectedState(state);
          setShowFilter(false);
        }}
      />
      <NvProjectsPageProjects
        showFilter={showFilter}
        selectedState={selectedState}
        lcData={lcData}
      />
      <img src={vector9} alt="" className={classes.bottomVector} />
    </>
  );
};

export default NvProjects;
