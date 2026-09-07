import React from 'react';
import { skillCategories } from '../../constants/experience';

export default function Skills() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'Skills'}</h1>

      <div className="flex flex-col gap-5">
        {skillCategories.map((category) => (
          <div key={category.label} className="rounded-lg bg-gray-50 p-5 shadow-sm dark:bg-gray-700">
            <h2 className="mb-3 text-base font-bold text-blue-600 dark:text-blue-300">{category.label}</h2>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-gray-700 shadow-sm dark:bg-gray-600 dark:text-gray-100"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
