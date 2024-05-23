import React from 'react'
import Image from 'next/image'
import NavLinks from './nav-links'
import Link from 'next/link'

export default function TopNav() {
  return (
    <div className='flex flex-row'>
        <Link href={'/'}>
          <Image src={'/icon.png'} width={200} height={200} className="hidden md:block" alt="Happy Tails Logo" />
        </Link>
        <NavLinks />
    </div>
  )
}
