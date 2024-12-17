import React from 'react';
import { descriptionData } from '../../constants/about';

export default function Description() {
  return (
    <div className="box-border flex w-full flex-row rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 max-sm:flex-col sm:px-12">
      <div className="text-left indent-8 text-base text-gray-500 dark:text-gray-300">
        {descriptionData.map((paragraph, idx) => (
          <div className="pb-3" key={idx}>
            {paragraph}
          </div>
        ))}
      </div>
    </div>
  );
}