import React from "react";
import Image from "next/image";
import { educationData } from "../../constants/about";

export default function Education() {
  return (
    <div className="w-full rounded-lg bg-white px-4 py-12 shadow-md dark:bg-gray-800 sm:px-12">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-700 dark:text-white">
        Education
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-4 text-left text-base text-gray-700 dark:text-gray-300">
          <tbody>
            {educationData.map((education, idx) => (
              <tr
                key={idx}
                className="rounded-lg bg-gray-50 shadow-sm dark:bg-gray-700"
              >
                {/* University Section */}
                <th className="w-1/3 p-4 align-top text-lg font-semibold text-blue-600 dark:text-blue-300">
                  <a
                    href={education.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center space-x-3"
                  >
                    {/* University Logo */}
                    <Image
                      src={education.logo}
                      alt="University Logo"
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                    <span>{education.university}</span>
                  </a>
                </th>

                {/* Degree and Details */}
                <td className="w-2/3 p-4">
                  <div className="mb-1 text-gray-800 dark:text-white">
                    <b>{education.degree_type}</b>
                    <br />
                    {education.degree_name}
                    {/* <span>
                      B.B.A. in {' '}
                      <a
                        href="https://management.ntu.edu.tw/en/IM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-blue-300"
                      >
                        Information Management
                      </a>
                      {' '} & B.S. in {' '}
                      <a
                        href="https://www.geog.ntu.edu.tw/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-blue-300"
                      >
                        Geography
                      </a>
                    </span> */}
                  </div>
                  <div className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                    {education.period}
                  </div>
                  {/* GPA Details */}
                  <ul className="list-inside list-disc text-sm text-gray-700 dark:text-gray-300">
                    {education.gpa.map((item, gpaIdx) => (
                      <li key={gpaIdx}>
                        {item.label}: <b>{item.value}</b>
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
