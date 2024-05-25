'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'

const cards = [
  { heading: 'Happy Tails - the ultimate pet app', subHeading: 'Manage everything about your pets', body: 'Multiple features and fun colors', image: '/images/carousel-1.png' },
  { heading: 'Manage multiple pets at the same time', subHeading: 'View all care tasks and vet appointments on calendar', body: 'Easily create, edit, and delete tasks', image: '' },
  { heading: '', subHeading: '', body: '', image: '' },
]

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', loop: true, skipSnaps: false, inViewThreshold: 0.7 }, 
    [
      Autoplay({ playOnInit: true, stopOnInteraction: false, stopOnMouseEnter: true, delay: 3000 })
    ])
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]          
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className='w-full flex flex-col'>
      {/* carousel viewport */}
      <div ref={emblaRef} className='overflow-hidden'>
        {/* carousel container */}
        <div className='flex'>
          {/* carousel slides */}
          {cards.map((card, index) =>
            <div key={`card-${index}`} className='relative flex flex-col sm:flex-row flex-none w-full items-center justify-around px-10 lg:px-20'>
              <div className='flex flex-col'>
                <h1 className='text-lg xl:text-5xl lg:text-3xl md:text-2xl mb-10 text-orange-700 font-bold'>{card.heading}</h1>
                <h3 className='text-md xl:text-3xl lg:text-2xl md:text-xl mb-5 font-bold text-stone-400'>{card.subHeading}</h3>
                <p className='text-sm xl:text-2xl lg:text-xl'>{card.body}</p>
              </div>
              <Image src={card.image} width={500} height={500} alt={`card ${index + 1} image`} className='w-3/4 xl:w-auto xl:h-3/4 lg:w-1/3 lg:h-auto md:size-80'/>
            </div>
          )}
        </div>
      </div>
      {/* dot navigation */}
      <div className='flex items-center justify-center'>
        {scrollSnaps.map((_, index) =>
          <button key={`dot-${index}`} onClick={() => onDotButtonClick(index)} className={`${index === selectedIndex ? 'size-4 bg-red-300' : 'bg-gray-300'} rounded-full size-3 mx-2 mt-10`} />
        )}
      </div>
    </div>
  )
}

export default Carousel