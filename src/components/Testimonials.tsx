import Image from 'next/image'
import React from 'react'

const placeholderContent = `Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.`
const placeholderReviews = [
  { name: 'Mark & Luna', content: placeholderContent, photo: '/images/stock-1.jpg'},
  { name: 'Katie & Leroy', content: placeholderContent, photo: '/images/stock-2.jpg'},
  { name: 'Suzy & Hamlin', content: placeholderContent, photo: '/images/stock-3.jpg'},
]

function Testimonials() {
  const reviews = placeholderReviews

  return (
    <div className='w-full flex flex-col mt-20 sm:mt-40'>
      <h1 className='text-2xl xl:text-4xl sm:text-3xl text-center font-bold mb-10'>Featured Reviews</h1>
      <div className='flex flex-wrap justify-center mt-5'>
        {reviews.map((review, index) =>
          <div key={index} className='flex flex-col w-full lg:w-1/4 m-5 items-center'>
            <div className='clip-heart size-64 lg:size-48 xl:size-64'>
              <Image src={review.photo} width={500} height={500} alt={`review ${index} photo`} className='w-80 min-h-80 bg-cover bg-center' />
            </div>
            <h4 className='font-bold text-lg sm:text-2xl my-5 w-2/3 text-center'>{review.name}</h4>
            <p className='text-sm sm:text-base w-2/3 text-center'>{review.content}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Testimonials