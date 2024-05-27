'use client'

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import Image from "next/image"
import ContactLinks from "@/components/ContactLinks"
import { containerVariants, itemVariants } from "@/components/Layout"

const contacts = [
  { name: 'github', href: 'https://github.com/kalyntn97', icon: '/icons/github.png', iconWhite: '/icons/github-white.png' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/tran-huynh-nguyen/', icon: '/icons/linkedin.png', iconWhite: '/icons/linkedin-white.png' },
  { name: 'instagram', href: '', icon: '/icons/instagram.png', iconWhite: '/icons/instagram-white.png' },
  // { name: 'gmail', href: '', icon: '/icons/gmail.png', iconWhite: '/icons/gmail-white.png' },
]

type FormData = { name: string, email: string, message: string }

export default function Page() {
  const form = useRef<HTMLFormElement>(null)
  const initialState: FormData = { name: '', email: '', message: '' }
  const [formData, setFormData] = useState<FormData>(initialState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form || !form.current) return
    if (process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      ).then(
        (result) => {
          alert('Message sent successfully 🚀')
          console.log(result.status)
          setFormData(initialState)
        },
        (error) => {
          alert('Error sending message. Try again!')
          console.error(error.text)
        }
      )
    }
  }

  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' className="w-full flex flex-col lg:flex-row items-center justify-center px-5 sm:px-20">
      <motion.div variants={itemVariants} className="flex flex-col w-full lg:w-2/5 mb-10 lg:mr-20 items-center justify-center">
        <Image src={'/images/img-2.png'} width={1000} height={1000} alt='a drawing of 2 dogs playing' className="w-full xl:w-3/4 h-auto"/>
        <div>
          <h2 className="text-base sm:text-xl mt-10">Get in touch with me!</h2>
          <ContactLinks />
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>

      <Image src={'/images/img-1.png'} width={700} height={700} alt='a drawing pet stuff' className="hidden xl-block absolute right-0 bottom-5"/>
      </motion.div>
      
      <motion.form variants={itemVariants} onSubmit={handleSubmit} ref={form} className="relative flex flex-col w-full my-10 lg:w-1/2 xl:w-1/4 sm:mt-10">

        <h4 className="text-2xl sm:text-4xl font-bold mb-2 text-blue-600 dark:text-green-600">We&rsquo;d love to hear from you</h4>
        <h3 className="text-base sm:text-xl font-bold text-stone-500">Got any questions, feedback, or review? Send us a message!</h3>

        <label htmlFor='name' className="mt-4 text-stone-600 dark:text-stone-200">Name</label>
        <input required type="text" name="name" id='name' value={formData.name} onChange={(e) => handleChange(e)} className="rounded-sm p-2 my-2 border bg-stone-50 dark:bg-stone-800" placeholder="Name"/>

        <label htmlFor='email' className="mt-4 text-stone-600 dark:text-stone-200">Email</label>
        <input required type="email" name="email" id='email' value={formData.email} onChange={(e) => handleChange(e)} className="rounded-sm p-2 my-2 border bg-stone-50 dark:bg-stone-800" placeholder="Email"/>

        <label htmlFor='message' className="mt-4 text-stone-600 dark:text-stone-200">Message</label>
        <textarea required name="message" id='message' value={formData.message} onChange={(e) => handleChange(e)} className="rounded-sm p-2 my-2 h-48 border bg-stone-50 dark:bg-stone-800" placeholder="Message"/>

        <button type='submit' className="group overflow-hidden flex flex-row w-36 h-12 mt-10 bg-blue-300 dark:bg-green-700 items-center justify-center self-center rounded-lg hover:bg-blue-500 hover:dark:bg-green-500 transition ease-in-out duration-300 delay-75 hover:-translate-y-1">
          <Image src={'/icons/send.png'} alt='a paperplane icon' width={32} height={32} className="mr-4 group-hover:rotate-45 group-hover:scale-110 group-hover:translate-x-8 duration-500" />
          <span className="group-hover:translate-x-20 duration-500 font-bold text-stone-800">SUBMIT</span>
        </button>
      </motion.form>
    </motion.div>
  );
}