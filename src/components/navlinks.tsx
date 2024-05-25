import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

type Props = {}

const links = [
  { name: 'About', href: '/about', icon: '', darkIcon: '' },
  { name: 'Contact', href: '/contact', icon: '', darkIcon: '' },
]

export default function NavLinks({}: Props) {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => {
          const LinkIcon = link.icon
          const isActive = pathname === link.href
          return (
            <Link key={link.name} href={link.href} className={'group flex flex-row items-center cursor-pointer'}>
              {/* <LinkIcon /> */}
              <Image src={'/icons/paws.png'} width={64} height={64} alt='a paws icon' className={`sm:w-48 ${isActive ? 'scale-1' : 'scale-0'} ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125`} />
              <p className='ml-2 sm:text-xl lg:text-2xl'>{link.name}</p>
            </Link>
          )
        })}
    </>
  )
}