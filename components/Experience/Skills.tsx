import React from 'react';
import TechBox, { techs } from '../TechBox';

export default function Skills() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'[ Skills ]'}</h1>
      <div className="overflow-x-auto">
        <div className="grid w-full grid-cols-5 gap-x-4 gap-y-2 max-lg:grid-cols-4 max-md:grid-cols-3 sm:gap-x-4 sm:gap-y-0 sm:px-10">
          {techs.map((tech) => {
            return <TechBox tech={tech} key={tech} bgColor="bg-gray-200 dark:bg-gray-500" />;
          })}
        </div>
      </div>
    </div>
  );
}