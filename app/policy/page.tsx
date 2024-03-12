import React from 'react';
import PolicySection from '../components/policy/policysection';
import RulesSection from '../components/policy/rulessection';
const Policy = () => {
  return (
    <div>
      <PolicySection />
      <div className=" bg-black">
        <RulesSection />
      </div>
    </div>
  );
};

export default Policy;
