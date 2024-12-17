import React from 'react';
import { educationData } from '../../constants/about';

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
                {/* University Name */}
                <th className="w-1/3 p-4 align-top text-lg font-semibold text-blue-600 dark:text-blue-300">
                  <a
                    href={education.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {education.university}
                  </a>
                </th>

                {/* Degree and Details */}
                <td className="w-2/3 p-4">
                  <div className="mb-1 text-gray-800 dark:text-white">
                    <b>{education.degree}</b>
                  </div>
                  <div className="text-sm mb-2 text-gray-500 dark:text-gray-400">
                    {education.period}
                  </div>
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
// export default function Education() {
//   return (
//     <div className="w-full rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 sm:px-12">
//       <h1 className="mb-8 text-center text-3xl font-bold">{'Education'}</h1>
//       <div className="overflow-x-auto">
//         <table className="min-w-screen border-separate border-spacing-0 bg-transparent text-left align-middle text-base text-gray-500 dark:text-gray-300 sm:rounded-lg">
//           <tbody className="">
//             {educationData.map((education, idx) => (
//               <MyTableRow key={idx} idx={idx}>
//                 <th className="flex basis-2/6 items-center">{education[0]}</th>
//                 <td className="flex basis-4/6 items-center px-5">{education[1]}</td>
//               </MyTableRow>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }