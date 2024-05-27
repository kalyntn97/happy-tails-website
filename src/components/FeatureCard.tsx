import Image from 'next/image'
import React from 'react'

export type Card = {
  icon: string
  heading: string
  subHeading?: string
  body: string
  image: string
  unreleased?: boolean
}

type Props = {
  card: Card
}

function FeatureCard({ card }: Props) {
  return (
    <div key={card.heading} className='group overflow-hidden w-full h-[400px] sm:h-[500px] flex flex-col items-center justify-center sm-6 rounded-xl bg-stone-100 dark:bg-stone-500/70 shadow-lg transition ease-in-out duration-300'>
      <div className='overflow-hidden w-auto h-4/5 group-hover:rotate-12 group-hover:h-3/5 duration-300'>
        <Image src={card.image} alt={`feature ${card.heading} image`} width={500} height={500} className='h-full w-auto object-contain' />
      </div>
      <div className='flex flex-col bg-orange-100 dark:bg-stone-950/70 rounded-xl w-full h-1/5 p-4 mt-auto group-hover:h-2/5 group-hover:bg-orange-200 dark:group-hover:bg-stone-800/70 duration-300'>
        <div className='flex flex-row items-center'>
          <Image src={card.icon} alt={`feature ${card.heading} icon`} width={64} height={64} className='size-6 sm:size-8'/>
          <h3 className='sm:text-xl mb-2 ml-2 font-bold'>{card.heading}</h3>
        </div>
        <h5 className='sm:text-base mb-2 ml-10'>{card.subHeading}</h5>
        <p className='hidden group-hover:block duration-300 delay-300 text-xs sm:text-sm ml-10'>{card.body}</p>
      </div>
    </div>
  )
}

export default FeatureCard