import React from 'react';
import { projectData } from '../../constants/experience';
import { MyTableRow } from '../utils';

export default function Project() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold">{'Selected Projects'}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-screen w-full border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 max-sm:text-sm max-[400px]:text-xs sm:rounded-lg">
          <tbody>
            {projectData.map((project, idx) => (
              <MyTableRow key={idx} idx={idx}>
                <td className="flex flex-col items-start gap-4 p-4">
                  <div className="text-lg font-bold text-blue-500 hover:underline dark:text-blue-300">
                    {project[0]}
                  </div>
                  <div className="w-full mt-4">
                    <img
                      src={typeof project[2] === 'string' ? project[2] : project[2]?.src}
                      alt={`Project ${idx + 1}`}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="mt-4">
                    {project[1]}
                  </div>
                </td>
              </MyTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}