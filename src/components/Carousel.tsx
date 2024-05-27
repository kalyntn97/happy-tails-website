'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import FeatureCard, { Card } from './FeatureCard'

type Props = {
  cards: Card[]
  cardSize?: 'sm' | 'md' | 'lg'  | 'full'
  type?: 'feature'
} 

function Carousel({ cards, type, cardSize }: Props) {
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
        <div className='flex items-center'>
          {/* carousel slides */}
          {cards.map((card, index) =>
            <div key={`card-${index}`} className={`relative flex flex-none ${cardSize === 'full' ? 'xl:h-1/2' : cardSize === 'sm' ? 'lg:w-1/3 xl:w-1/4' : 'lg:w-1/2 xl:w-1/3'} w-full h-fit items-center justify-around px-10 lg:px-20 lg:px-10`}>
              {type === 'feature' && <FeatureCard key={index} card={card} />}
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