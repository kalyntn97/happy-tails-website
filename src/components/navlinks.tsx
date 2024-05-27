import Image from 'next/image'
import Link from 'next/link'
import React, { SetStateAction } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  onClick?: () => void
}

const links = [
  { name: 'About', href: '/about', icon: '', darkIcon: '' },
  { name: 'Contact', href: '/contact', icon: '', darkIcon: '' },
]

export default function NavLinks({ onClick }: Props) {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => {
          const LinkIcon = link.icon
          const isActive = pathname === link.href
          return (
            <Link key={link.name} href={link.href} className={'group flex flex-row cursor-pointer w-48 h-12 p-2 items-center justify-center'} onClick={onClick}>
              {/* <LinkIcon /> */}
              <Image src={'/icons/paws.png'} width={64} height={64} alt='a paws icon' className={`hidden size-8 sm:block sm:size-16 ${isActive ? 'scale-1' : 'scale-0'} ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125`} />
              <p className='ml-2 sm:text-xl lg:text-2xl dark:text-orange-100'>{link.name}</p>
            </Link>
          )
      })}
      <Link href='/' className='bg-red-400 dark:bg-red-700 text-white relative group cursor-pointer overflow-hidden h-12 w-48 rounded-md transition ease-in-out duration-300 delay-75 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 hover:dark:bg-red-900 p-2 flex justify-center items-center font-extrabold'>
        <Image src={'/icons/paws.png'} width={64} height={64} alt='a paws icon' className={`${pathname === '/' ? 'scale-1' : 'scale-0'} absolute -left-4 -top-4 -rotate-45 group-hover:top-1 group-hover:left-4 group-hover:rotate-12 z-10 size-16 group-hover:scale-150 duration-500`} />
        <Image src={'/icons/paws.png'} width={64} height={64} alt='a paws icon' className={`${pathname === '/' ? 'scale-1' : 'scale-0'} absolute right-2 top-2 rotate-12 group-hover:top-1 group-hover:right-8 group-hover:-rotate-12 z-10 size-12 group-hover:scale-150  duration-500`} />
        <p className="z-10 dark:text-orange-100">Download</p>
      </Link>
    </>
  )
}