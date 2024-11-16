import React from 'react';
import { awardData } from '../../constants/about';
import { MyTableRow } from '../utils';

export default function Awards() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'[ Awards ]'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen border-separate border-spacing-0 overflow-x-scroll bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 sm:rounded-lg">
          <tbody className="">
            {awardData.map((award, idx) => (
              <MyTableRow key={idx} idx={idx}>
                <th className="flex w-16 items-center">
                  <p>{award[0]}</p>
                </th>
                <th className="flex basis-5/12 items-center text-blue-500 dark:text-blue-300">
                  {award[1]}
                </th>
                <td className="flex basis-7/12 items-center px-5">{award[2]}</td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}