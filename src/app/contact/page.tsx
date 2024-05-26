'use client'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import Lottie from "lottie-react"
import dogAnimation from '@/animations/dog.json'
import Image from "next/image"

export default function Page() {
  const form = useRef<HTMLFormElement>(null)
  const initialState: { name: string, email: string, message: string } = { name: '', email: '', message: '' }
  const [formData, setFormData] = useState(initialState)

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
    <div className="w-full flex flex-col sm:flex-row items-center sm:items-start px-10 sm:px-20">
      <div className="flex flex-col items-center">
        <div className="w-1/2 h-auto hidden sm:block">
          <Lottie animationData={dogAnimation} loop={true} />
        </div>
        <h1 className="text-2xl sm:text-5xl font-bold mb-2">We'd love to hear from you</h1>
        <h4 className="text-base sm:text-xl font-bold text-stone-400">Got any questions, feedback, or review? Send us a message!</h4>
      </div>
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col w-full mt-5 sm:w-1/2 sm:mt-10 bg-red-100 p-10 rounded-lg">
        <h1 className="text-xl sm:text-4xl text-center mb-5">Contact us</h1>

        <label htmlFor='name' className="mt-4">Name</label>
        <input required type="text" name="name" id='name' value={formData.name} onChange={(e) => handleChange(e)} className="rounded-md p-2 my-2" placeholder="Name"/>

        <label htmlFor='email' className="mt-4">Email</label>
        <input required type="email" name="email" id='email' value={formData.email} onChange={(e) => handleChange(e)} className="rounded-md p-2 my-2" placeholder="Email"/>

        <label htmlFor='message' className="mt-4">Message</label>
        <textarea required name="message" id='message' value={formData.message} onChange={(e) => handleChange(e)} className="rounded-md p-2 my-2" placeholder="Message"/>

        <button type='submit' className="group overflow-hidden flex flex-row w-36 h-12 mt-10 bg-blue-300 items-center justify-center self-center rounded-lg hover:bg-blue-500 transition ease-in-out duration-300 delay-75 hover:-translate-y-1">
          <Image src={'/icons/send.png'} alt='a paperplane icon' width={32} height={32} className="mr-4 group-hover:rotate-45 group-hover:scale-110 group-hover:translate-x-8 duration-500" />
          <span className="group-hover:translate-x-20 duration-500 font-bold">SUBMIT</span>
        </button>
      </form>
    </div>
  );
}