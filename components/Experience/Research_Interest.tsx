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
// import React, { useEffect, useState } from 'react';
// import { researchInterests } from '../../constants/experience';

// const randomPosition = (max:number) => Math.random() * max;
// const randomVelocity = () => (Math.random() * 2 - 1) * 0.5; // Slow random velocity
// const bubbleSize = 150;

// export default function Research_Interest() {
//   const [bubbles, setBubbles] = useState(
//     researchInterests.map(() => ({
//       top: randomPosition(80),
//       left: randomPosition(80),
//       velocityX: randomVelocity(),
//       velocityY: randomVelocity(),
//     }))
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBubbles((prevBubbles) =>
//         prevBubbles.map((bubble, idx) => {
//           let newTop = bubble.top + bubble.velocityY;
//           let newLeft = bubble.left + bubble.velocityX;

//           // Check for boundaries
//           if (newTop < 0 || newTop > 100 - bubbleSize / 10) {
//             bubble.velocityY = -bubble.velocityY;
//             newTop = bubble.top + bubble.velocityY;
//           }
//           if (newLeft < 0 || newLeft > 100 - bubbleSize / 10) {
//             bubble.velocityX = -bubble.velocityX;
//             newLeft = bubble.left + bubble.velocityX;
//           }

//           // Prevent overlapping by recalculating position if too close to others
//           for (let i = 0; i < prevBubbles.length; i++) {
//             if (i !== idx) {
//               const other = prevBubbles[i];
//               const dx = newLeft - other.left;
//               const dy = newTop - other.top;
//               const distance = Math.sqrt(dx * dx + dy * dy);
//               if (distance < bubbleSize / 10) {
//                 bubble.velocityX = -bubble.velocityX;
//                 bubble.velocityY = -bubble.velocityY;
//                 newTop = bubble.top + bubble.velocityY;
//                 newLeft = bubble.left + bubble.velocityX;
//                 break;
//               }
//             }
//           }

//           return {
//             ...bubble,
//             top: newTop,
//             left: newLeft,
//           };
//         })
//       );
//     }, 50); // Update every 50ms for smooth movement

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r">
//       <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-4xl font-bold text-black">
//         Research Interests
//       </h1>
//       <div className="relative w-full h-full">
//         {researchInterests.map((interest, idx) => (
//           <div
//             key={idx}
//             className="absolute flex items-center justify-center rounded-full bg-white p-4 shadow-lg text-gray-700 dark:bg-gray-800 dark:text-gray-100 text-lg font-semibold transform transition-all duration-300"
//             style={{
//               top: `${bubbles[idx]?.top}%`,
//               left: `${bubbles[idx]?.left}%`,
//               width: `${bubbleSize}px`,
//               height: `${bubbleSize}px`,
//             }}
//           >
//             {interest}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
