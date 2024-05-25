'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './navlinks'

type Props = {}

export default function TopNav({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(isOpen)
  return (
    <div className='w-full flex flex-row justify-between sm:flex-col sm:items-center'>
      <Link href={'/'}>
        <Image src={'/images/icon-transparent.png'} width={400} height={400} className="w-48 sm:w-80" alt="Happy Tails Logo" />
      </Link>
      <div className='hidden sm:block sm:w-1/4 sm:flex sm:flex-row sm:justify-around'>
        <NavLinks />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className='block sm:hidden'>
        <Image src={'/icons/menu.png'} width={32} height={32} className='' alt='a menu icon' />
      </button>
    
      <div className={`${isOpen ? 'hidden' : 'block'} sm:hidden flex flex-col absolute top-20 right-5`}>
        <NavLinks />
      </div>

    </div>
  )
}
