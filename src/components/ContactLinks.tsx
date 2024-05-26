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
    <div className={`group w-full h-full flex ${size === 'sm' ? 'scale-75 items-center justify-around' : 'scale-100 flex-col'}`}>
      <div className={`flex ${size === 'sm' ? 'w-1/3' : 'w-full mt-5'} justify-start`}>
        {contacts.map(contact =>
          <Link key={contact.name} href={contact.href} className="mx-10" target="_blank">
            <Image src={contact.icon} alt={`${contact.name} icon`} width={48} height={48} className="dark:hidden transition ease-in-out duration-300 hover:-translate-y-5" />
            <Image src={contact.iconWhite} alt={`${contact.name} icon`} width={48} height={48} className="hidden dark:block transition ease-in-out duration-300 hover:-translate-y-5" />
          </Link>
        )}
      </div>

      <h4 className={`text-base font-bold text-stone-500 ${size === 'sm' ? 'text-base' : 'text-base sm:text-xl mt-10 mb-5'}`}>Subscribe to get updates about new releases</h4>
      <h5 className={`${size === 'sm' ? 'text-xs': 'text-lg -mt-5'} italic font-bold text-stone-400`}>(Coming soon)</h5>
      <div className="group overflow-hidden flex flex-row items-center w-fit h-12 border-2 border-blue-300 rounded-md hover:border-blue-500 transition ease-in-out duration-300">
        <input required type="text" name="subEmail" id='subEmail' value={subEmail} onChange={e => setSubEmail(e.target.value)} className="w-64 h-full rounded-sm p-2" placeholder="youremail@example.com" />
        <button className="w-12 h-12 flex justify-center items-center bg-blue-300 group-hover:bg-blue-500 duration-300">
          {/* <Image src={'/icons/gmail.png'} alt={`a mail icon`} width={48} height={48} className="dark:hidden size-8" /> */}
          <Image src={'/icons/gmail-white.png'} alt={`a white mail icon`} width={48} height={48} className="size-8" />
        </button>
      </div>
    </div>
  )
}

export default ContactLinks