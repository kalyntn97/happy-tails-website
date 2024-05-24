'use client';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'

export default function Page() {
  const form = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

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
          console.log(result.text)
          setFormData({name: '', email: '', message: ''})
        },
        (error) => {
          console.log(error.text)
        }
      )
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit} ref={form}>
        <h1>Send a message</h1>

        <label htmlFor='name' className="">Name</label>
        <input required type="text" name="name" value={formData.name} onChange={(e) => handleChange(e)} className="" placeholder="Name"/>

        <label htmlFor='email' className="">Email</label>
        <input required type="email" name="email" value={formData.email} onChange={(e) => handleChange(e)} className="" placeholder="Email"/>

        <label htmlFor='message' className="">Message</label>
        <textarea required name="message" value={formData.message} onChange={(e) => handleChange(e)} className="" placeholder="Message"/>
        <button type='submit'>
          <span>Submit</span>
        </button>
      </form>
    </main>
  );
}