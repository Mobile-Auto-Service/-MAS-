import React from 'react';

import { GuestNavbar } from '../components/Navbar';
import {Hero} from '../components/Hero';
import { Footer } from '../components/footer';
import { Scard } from '../components/cards';
import { WhyCard } from '../components/cards';
import { TeamCard } from '../components/cards';
import { HowItWorks } from '../components/HowItWorks';
import { ContactUs } from '../components/ContactUs';

const HomePage = () => {
  return (
  <>
  <GuestNavbar/>
  <Hero/>
  <h1 className= "whycard"> WHY MOBILE AUTO SERVICE?</h1>
  <WhyCard/>
  <h1 className= "header"> HOW IT WORKS</h1>
  <HowItWorks/>
  <h1 className= "header"> SERVICES</h1>
  <Scard/>
  <h1 className= "header"> THE TEAM</h1>
  <TeamCard/>
  <ContactUs/>
  <Footer/>


  </>
  );
};


export default HomePage;