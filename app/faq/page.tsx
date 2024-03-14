import React from 'react';
import HeroFaq from '../components/faqpage/herofaq';
import Questions from '../components/faqpage/questions';
import ButtonFaq from '../components/faqpage/faqbutton';
const FAQ = () => {
  return (
    <div>
      <div className="lg:pt-[5%] pt-[15%] ">
        {' '}
        <HeroFaq />
      </div>
      <Questions />
      <ButtonFaq />
    </div>
  );
};

export default FAQ;
