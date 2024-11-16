import React from 'react';
import Image from 'next/image';
import avatar from '@/static/avatar.webp';
import { descriptionData } from '../../constants/about';

export default function Description() {
  return (
    <div className="box-border flex w-full flex-row rounded-lg bg-white px-2 py-12 shadow-md dark:bg-gray-600 max-sm:flex-col sm:px-12">
      <div className="mx-auto flex h-fit w-3/4 basis-2/5 content-center items-center justify-center overflow-hidden rounded-2xl bg-white max-md:mb-5 sm:hidden">
        <Image src={avatar} alt="avatar" className="object-cover" sizes="100vw" priority={true} />
      </div>
      <div className="text-left indent-8 text-base text-gray-500 dark:text-gray-300">
        <div className="float-right mx-auto h-fit max-w-1/2 overflow-hidden py-5 pl-5 max-sm:hidden xl:max-w-[40%]">
          <Image
            src={avatar}
            alt="avatar"
            className="w-full rounded-2xl object-cover"
            sizes="(max-width: 1280px) 50vw, 33vw"
            priority={true}
          />
        </div>
        {descriptionData.map((paragraph, idx) => (
          <div className="pb-3" key={idx}>
            {paragraph}
          </div>
        ))}
      </div>
      {/* Image Part */}
    </div>
  );
}