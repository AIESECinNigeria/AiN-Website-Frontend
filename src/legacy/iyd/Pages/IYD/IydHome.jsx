"use client";

import { useState } from 'react';
import IYDHero from '../../Components/IYD/IYDHero';
import IYDAbout from '../../Components/IYD/IYDAbout';
import IYDTestimonials from '../../Components/IYD/IYDTestimonials';
import IYDCta from '../../Components/IYD/IYDCta';
import IYDFAQ from '../../Components/IYD/IYDFAQ';
import IYDRegistrationModal from '../../Components/IYD/IYDRegistrationModal';

const IYDHome = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className="w-full bg-[#2A412A] font-body">
        <IYDHero onRegisterClick={() => setIsRegistrationOpen(true)} />
        <IYDAbout />
        <IYDFAQ />
        <IYDTestimonials />
        <IYDCta onRegisterClick={() => setIsRegistrationOpen(true)} />

        <IYDRegistrationModal
          open={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
        />
    </div>
  );
};

export default IYDHome;