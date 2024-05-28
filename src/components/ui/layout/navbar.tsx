import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex gap-x-4 bg-red-200'>
      <Link href="/dashboard">dashboard</Link>
      <Link href="/product">product</Link>
    </div>
  )
}

export default Navbar
