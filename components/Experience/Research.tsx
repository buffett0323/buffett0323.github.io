import React from 'react';
import { researchData } from '../../constants/experience';
import { MyTableRow } from '../utils';

export default function Research() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'Research Experience'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 max-sm:text-sm max-[400px]:text-xs sm:rounded-lg">
          <tbody className="">
            {researchData.map((research, idx) => (
              <MyTableRow key={idx} idx={idx}>
                <th className="flex basis-1/4 items-center max-sm:basis-1/3">{research[0]}</th>
                <td className="flex basis-3/4 items-center px-5 max-sm:basis-2/3">{research[1]}</td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}