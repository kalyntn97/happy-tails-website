'use client'

import React from 'react'
import ContactLinks from './ContactLinks'
import Link from 'next/link'
import Image from 'next/image'


type Props = {}

function Footer({}: Props) {
  return (
    <div className='w-full h-12 flex flex-row items-center'>
      <Link href={'/'}>
        <Image src={'/images/icon-transparent.png'} width={400} height={400} className="w-24 h-auto sm:w-32" alt="Happy Tails Logo" />
      </Link>
      <div className='ml-auto'>
        <ContactLinks size='sm' />
      </div>
      <div className='border-1 bt-red-900'/>
    </div>
  )
}

export default Footer