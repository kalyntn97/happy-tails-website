'use client'

import React from 'react'
import ContactLinks from './ContactLinks'
import Link from 'next/link'
import Image from 'next/image'


type Props = {}

function Footer({}: Props) {
  return (
    <div className='w-full h-16 flex flex-row items-center justify-end self-end pb-4'>
      <ContactLinks size='sm' />
    </div>
  )
}

export default Footer