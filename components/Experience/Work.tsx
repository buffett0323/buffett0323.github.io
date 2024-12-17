import React from 'react';
import Image from 'next/image';
import { industryData } from '../../constants/experience';
import { MyTableRow } from '../utils';


export default function Work() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'Industry'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 max-sm:text-sm max-[400px]:text-xs sm:rounded-lg">
          <tbody>
            {industryData.map((data, idx) => (
              <MyTableRow key={idx} idx={idx}>
                {/* Company Logo */}
                <td className="flex items-center justify-center basis-1/6 px-2">
                  <Image
                    src={data[2]} // Correctly typed as StaticImageData
                    alt="Company Logo"
                    width={60} 
                    height={60} 
                    className="object-contain" 
                  />
                </td>
                {/* Company Name and Link */}
                <th className="flex basis-1/3 items-center px-2">{data[0]}</th>
                {/* Job Details */}
                <td className="flex basis-1/2 items-center px-5">{data[1]}</td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}