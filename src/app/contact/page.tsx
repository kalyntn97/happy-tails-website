'use client'
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import Lottie from "lottie-react"
import dogAnimation from '@/animations/dog.json'

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
    <main className="flex flex-row">
      <div className="w-1/3">
        <Lottie animationData={dogAnimation} loop={true} />
      </div>
      <form onSubmit={handleSubmit} ref={form} className="flex flex-col w-1/2 mt-40">
        <h1>Send a message</h1>

        <label htmlFor='name' className="">Name</label>
        <input required type="text" name="name" id='name' value={formData.name} onChange={(e) => handleChange(e)} className="rounded-md p-1 my-1" placeholder="Name"/>

        <label htmlFor='email' className="">Email</label>
        <input required type="email" name="email" id='email' value={formData.email} onChange={(e) => handleChange(e)} className="rounded-md p-1 my-1" placeholder="Email"/>

        <label htmlFor='message' className="">Message</label>
        <textarea required name="message" id='message' value={formData.message} onChange={(e) => handleChange(e)} className="rounded-md p-1 my-1" placeholder="Message"/>

        <button type='submit'>
          <span>Submit</span>
        </button>
      </form>
    </main>
  );
}