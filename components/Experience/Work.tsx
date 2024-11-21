import React from 'react';
import { industryData } from '../../constants/experience';
import { MyTableRow } from '../utils';

export default function Work() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'[ Industry ]'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 max-sm:text-sm max-[400px]:text-xs sm:rounded-lg">
          <tbody className="">
            {industryData.map((data, idx) => (
              <MyTableRow key={idx} idx={idx}>
                <th className="flex basis-1/3 items-center max-[360px]:basis-1/2">{data[0]}</th>
                <td className="flex basis-2/3 items-center px-5 max-[360px]:basis-1/2">
                  {data[1]}
                </td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}