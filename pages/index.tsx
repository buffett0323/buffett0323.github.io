import React, { useEffect } from 'react';
import Link from 'next/link';

function Home() {


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.userSelect = 'none';
  }, []);

  return (
    <>
      <div className="p-30 text-center">
        <div className="absolute bottom-0 left-0 flex w-full flex-col flex-nowrap items-center justify-end py-0">
          <Link
            id="enter"
            className="mb-70p text-center text-4xl text-gray-700 duration-500 hover:scale-125 hover:cursor-pointer dark:text-white"
            href="/about"
          >
            Enter
          </Link>
        </div>
      </div>
    </>
  );
}
Home.transparentNavbar = true;

export default Home;