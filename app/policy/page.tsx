import React from 'react';
import PolicySection from '../components/policy/policysection';
import RulesSection from '../components/policy/rulessection';
import ButtonPolicy from '../components/policy/buttonpolicy';
const Policy = () => {
  return (
    <div>
      <PolicySection />
      <div className=" bg-black">
        <RulesSection />
      </div>
      <ButtonPolicy />
    </div>
  );
};

export default Policy;
