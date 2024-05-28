"use client"
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  
  return (
    <main className='min-w-[360px] w-full h-[100dvh] flex items-center justify-center'>
      <div className='flex items-center justify-center gap-x-4 px-6'>
        <Link href="/dashboard">
          login
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
