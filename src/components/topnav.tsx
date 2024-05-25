'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'
import ThemeSwitcher from './ThemeSwitcher'

type Props = {}

export default function TopNav({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeMenu = () => {
    setIsOpen(false)
  }
  
  return (
    <div className='w-full flex flex-row items-center justify-between'>
      <Link href={'/'}>
        <Image src={'/images/icon-transparent.png'} width={400} height={400} className="w-32 sm:w-48" alt="Happy Tails Logo" />
      </Link>
      <div className='hidden sm:block sm:w-1/2 sm:flex sm:flex-row sm:justify-around sm:items-center'>
        <NavLinks />
        <ThemeSwitcher />
      </div>
      <div className='sm:hidden'>
        <ThemeSwitcher />
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className='block sm:hidden'>
        <Image src={'/icons/menu.png'} width={32} height={32} className='' alt='a menu icon' />
      </button>
    
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden flex flex-col absolute top-20 right-5`}>
        <NavLinks onClick={closeMenu} />
      </div>

    </div>
  )
}
