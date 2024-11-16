import React from 'react';

const MyTableRow = ({ idx, children }: { idx: number; children: React.ReactNode }) => {
  return (
    <tr
      className={`flex flex-row ${idx === 0 ? 'border-y' : 'border-b'} p-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
    >
      {children}
    </tr>
  );
};

export { MyTableRow };