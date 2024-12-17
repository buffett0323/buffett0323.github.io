import React from 'react';
import { researchInterests } from '../../constants/experience';

export default function Research_Interest() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'Research Interest'}</h1>
      <div className="mt-12 w-full rounded-lg bg-white px-4 py-6 shadow-md dark:bg-gray-600">
        <ul className="list-inside list-disc text-gray-700 dark:text-gray-300">
          {researchInterests.map((interest, idx) => (
            <li key={idx} className="mb-2 text-lg max-sm:text-base">
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
