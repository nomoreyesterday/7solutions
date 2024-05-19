"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  
  return (
    <main className='min-w-[360px] w-full h-[100dvh] flex items-center justify-center'>
      <div className='flex items-center justify-center gap-x-4 px-6'>
        <Link href="/todo">
          <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-md bg-transparent bg-white hover:bg-[#f6f8fa] active:bg-[#eff1f3] shadow-md overflow-hidden flex items-center justify-center gap-x-2 duration-100 border-[1px] border-solid border-gray-200">
              <Image alt="todo" src="/todolist.svg" width={64} height={64} />
              <p className='text-[16px] sm:text-[20px] flex items-center justify-center'>TodoList</p>
          </div>
        </Link>
        <Link href="/api/department" target="_blank">
          <div className="w-40 h-40 sm:w-64 sm:h-64 rounded-md bg-transparent bg-white hover:bg-[#f6f8fa] active:bg-[#eff1f3] shadow-md overflow-hidden flex items-center justify-center gap-x-2 duration-100 border-[1px] border-solid border-gray-200">
              <Image alt="todo" src="/json.svg" width={64} height={64} />
              <p className='text-[16px] sm:text-[20px] flex items-center justify-center'>API</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
