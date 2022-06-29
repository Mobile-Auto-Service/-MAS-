import React from 'react';

import {Hero} from '../components/Hero';

import { Scard } from '../components/cards';
import { WhyCard } from '../components/cards';
import { TeamCard } from '../components/cards';
import { HowItWorks } from '../components/HowItWorks';
import { ContactUs } from '../components/ContactUs';

const HomePage = () => {
  return (
<>

   {/* <Routes> */}
     {/* <GuestNavbar/> */}
    <Hero/>
      <h1 className= "whycard m-5" id='whyus'> WHY MOBILE AUTO SERVICE?</h1>
    <WhyCard/>
      <h1 className= "header m-5"> HOW IT WORKS</h1>
    <HowItWorks/>
      <h1 className= "header m-5" id='services'> SERVICES</h1>
    <Scard/>
      <h1 className= "header m-5"> THE TEAM</h1>
    <TeamCard/>
    < ContactUs />
      {/* <Footer/> */}
   {/* </Routes> */}

  


  </>
  );
};


export default HomePage;