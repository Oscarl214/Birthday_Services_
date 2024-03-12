'use client';
import React from 'react';

import PolicyData from '../../policyData.json';

const RulesSection = () => {
  return (
    <div className="w-full flex justify-center items-center flex-wrap m-10">
      {PolicyData.map((policy) => (
        <div
          className=" w-96 card-policy bg-white text-primary-content font-rubik m-4"
          key={policy.id}
        >
          <div className="card-body">
            <h2 className=" text-center font-bold text-3xl uppercase text-red-700">
              {policy.ServiceTitle}
            </h2>
            <ul className="space-y-4">
              {Object.values(policy.Rules).map((rule, index) => (
                <React.Fragment key={index}>
                  {rule.trim() !== '' && (
                    <li className="list-disc font-semibold ">{rule}</li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RulesSection;
