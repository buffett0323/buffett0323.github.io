import React from 'react';
import { researchInterests } from '../../constants/experience';

export default function Research_Interest() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">
        {'Research Interest'}
      </h1>
      <div className="mt-12 w-full rounded-lg bg-white px-6 py-8 shadow-lg dark:bg-gray-800">
        <ul className="grid grid-cols-1 gap-4 text-gray-800 dark:text-gray-300 sm:grid-cols-2 md:grid-cols-3">
          {researchInterests.map((interest, idx) => (
            <li
              key={idx}
              className="flex items-center justify-center rounded-lg bg-gray-100 p-4 text-center text-lg font-semibold text-gray-700 shadow-sm hover:scale-105 hover:bg-blue-200 dark:bg-gray-700 dark:hover:bg-indigo-500 dark:text-gray-100"
            >
              {interest}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
