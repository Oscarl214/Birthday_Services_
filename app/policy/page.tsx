import React from 'react';
import PolicySection from '../components/policypage/policysection';
import RulesSection from '../components/policypage/rulessection';
import ButtonPolicy from '../components/policypage/buttonpolicy';
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
