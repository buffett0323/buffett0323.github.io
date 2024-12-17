import React from 'react';
import { contactData } from '../../constants/about';

export default function Contact() {
  return (
    <div className="w-full rounded-lg bg-white px-2 py-12 text-left shadow-md dark:bg-gray-600 sm:px-12">
      <h1 className="mb-4 text-center text-3xl font-bold">{'Contact'}</h1>
      <div className="flex justify-center">
        <div className="text-base text-gray-500 dark:text-gray-300">
          {contactData.map((contact, idx) => (
            <div className="flex flex-row font-bold space-x-4" key={idx}>
              {contact}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}