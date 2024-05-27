'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import ThemeSwitcher from '@/components/ThemeSwitcher'
import NavLinks from './nav-links'

export default function TopNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMenu = () => {
    setIsOpen(false)
  }
  
  return (
    <div className='w-full h-24 flex flex-row items-center justify-between px-5'>
      <Link href={'/'}>
        <Image src={'/images/icon-transparent.png'} width={400} height={400} className="w-32 h-auto sm:w-48" alt="Happy Tails Logo" />
      </Link>
      <div className='hidden lg:block w-full h-full xl:w-2/3 lg:flex lg:flex-row lg:justify-around lg:items-center'>
        <NavLinks />
        <ThemeSwitcher />
      </div>
      <div className='lg:hidden'>
        <ThemeSwitcher />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className='block lg:hidden'>
        <Image src={'/icons/menu.png'} width={32} height={32} className='h-full' alt='a menu icon' />
      </button>
    
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden flex flex-col absolute top-20 right-10 w-48 bg-red-100 z-10`}>
        <NavLinks />
      </div>

    </div>
  )
}

