import React from 'react'
import HeroSection from '../components/HeroSection'
import Stats from '../components/Stats';
import Brochure from '../components/Brochure';
import Promotional from '../components/Promotional';
import CustomerFeedback from '../components/CustomerFeedback';
import HeroImage from '../components/HeroImage';
import KeyHighlights from '../components/KeyHighlights';
import HomepageFooter from '../components/HomepageFooter';

const HomePage = () => {
  return (
    <div className='w-full'>
      
      <HeroSection />
      <Stats />
      <Brochure />
      <Promotional />
      <CustomerFeedback />
      <HeroImage />
      <KeyHighlights />
      <HomepageFooter/>
    </div>
  )
}

export default HomePage
