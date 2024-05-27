import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const contacts = [
  { name: 'github', href: 'https://github.com/kalyntn97', icon: '/icons/github.png', iconWhite: '/icons/github-white.png' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/tran-huynh-nguyen/', icon: '/icons/linkedin.png', iconWhite: '/icons/linkedin-white.png' },
  { name: 'instagram', href: '', icon: '/icons/instagram.png', iconWhite: '/icons/instagram-white.png' },
  // { name: 'gmail', href: '', icon: '/icons/gmail.png', iconWhite: '/icons/gmail-white.png' },
]

type Props = {
  size?: 'sm'
}

function ContactLinks({ size }: Props) {
  const [subEmail, setSubEmail] = useState<string>('')

  return (
    <div className={`group w-fit flex ${size === 'sm' ? 'flex-row scale-75 items-center justify-between' : 'scale-100 flex-col'}`}>
      <div className={`flex ${size === 'sm' ? 'w-full sm:w-1/2 h-full flex justify-center items-center mr-10' : 'w-full xl:justify-start justify-center mb-10'} flex-row items-center`}>
        {contacts.map(contact =>
          <Link key={contact.name} href={contact.href} className="mx-10" target="_blank">
            <Image src={contact.icon} alt={`${contact.name} icon`} width={48} height={48} className="dark:hidden transition ease-in-out duration-300 hover:-translate-y-5" />
            <Image src={contact.iconWhite} alt={`${contact.name} icon`} width={48} height={48} className="hidden dark:block transition ease-in-out duration-300 hover:-translate-y-5" />
          </Link>
        )}
      </div>
      <div className={`${size === 'sm' ? 'hidden md:block flex flex-row w-96': 'lg:flex-col'} ml-auto`}>
        <h2 className={`text-base ${size === 'sm' ? 'text-base' : 'text-base sm:text-xl mb-5'}`}>Subscribe to get updates about new releases</h2>
        <div className={`group overflow-hidden flex flex-row items-center w-full h-12 border-2 ${size === 'sm' ? 'border-stone-700 dark:border-stone-800 hover:border-stone-500 hover:dark:border-stone-500' : 'border-green-700 dark:border-green-800 hover:border-green-500 hover:dark:border-green-500'} rounded-md transition ease-in-out duration-300`}>
          <input required type="text" name="subEmail" id='subEmail' value={subEmail} onChange={e => setSubEmail(e.target.value)} className="w-full h-full rounded-sm p-2 bg-stone-50 dark:bg-stone-800" placeholder="youremail@example.com" />
          <button className={`w-12 h-12 flex justify-center items-center ${size === 'sm' ? 'bg-stone-700 dark:bg-stone-800 group-hover:bg-stone-500 group-hover:dark:bg-stone-500' : 'bg-green-700 dark:bg-green-800 group-hover:bg-green-500 group-hover:dark:bg-green-500'} duration-300`}>
            <Image src={'/icons/gmail-white.png'} alt={`a white mail icon`} width={48} height={48} className="size-8" />
          </button>
        </div>
      </div>


    </div>
  )
}

export default ContactLinks