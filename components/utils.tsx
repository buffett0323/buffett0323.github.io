import React from 'react';

type MyTableRowProps = {
  idx: number;
  children: React.ReactNode;
};

const MyTableRow = ({ idx, children }: MyTableRowProps) => {
  return (
    <tr
      className={`flex flex-row ${
        idx === 0 ? 'border-y' : 'border-b'
      } p-2 ${idx % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
    >
      {children}
    </tr>
  );
};

export { MyTableRow };