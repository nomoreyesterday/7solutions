"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  
  return (
    <main className='h-[100vh] flex items-center justify-center p-6'>
      <div className='flex items-center justify-center gap-x-4'>
        <Link href="/todo">
          <div className="w-64 h-64 rounded-md bg-transparent bg-white hover:bg-[#f6f8fa] active:bg-[#eff1f3] shadow-md overflow-hidden flex items-center justify-center gap-x-2 duration-100 border-[1px] border-solid border-gray-200">
              <Image alt="todo" src="/todolist.svg" width={64} height={64} />
              <p className='text-[20px] flex items-center justify-center'>TodoList</p>
          </div>
        </Link>
        <Link href="/api/department" target="_blank">
          <div className="w-64 h-64 rounded-md bg-transparent bg-white hover:bg-[#f6f8fa] active:bg-[#eff1f3] shadow-md overflow-hidden flex items-center justify-center gap-x-2 duration-100 border-[1px] border-solid border-gray-200">
              <Image alt="todo" src="/json.svg" width={64} height={64}/>
              <p className='text-[20px] flex items-center justify-center'>API</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
