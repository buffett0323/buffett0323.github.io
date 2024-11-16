import React from 'react';
import { educationData } from '../../constants/about';
import { MyTableRow } from '../utils';

export default function Education() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'[ Education ]'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 sm:rounded-lg">
          <tbody className="">
            {educationData.map((education, idx) => (
              <MyTableRow key={idx} idx={idx}>
                <th className="flex basis-2/6 items-center">{education[0]}</th>
                <td className="flex basis-4/6 items-center px-5">{education[1]}</td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}