import Image from 'next/image'
import React from 'react'
import Carousel from './Carousel'

const unreleased = 'Subscribe to get notified with new features'
const placeholderImage = '/images/feature-placeholder.png'

const features = [
  { heading: 'Manage every day tasks', body: 'Never forget any tasks by setting a reminder. Keep track of task completions with monthly charts.', icon: '/icons/feature-care.png', image: '/images/feature-care-ss.png', },
  { heading: 'Stay on top of vet appointments', body: 'See all appointments on calendar. Add notes to each visit', icon: '/icons/feature-health.png', image: '/images/feature-health-ss.png'},
  { heading: 'Track any pet information', body: 'Keep track of weight, mood, and more. Observe changes through graphs', icon: '/icons/feature-track.png', image: '/images/feature-track-ss.png', },
  { heading: 'Manage diseases through monitoring medications and lab values', body: 'Track and monitor abnormal values through graphs.', icon: '/icons/feature-disease.png', image: '/images/feature-disease-ss.png', },
  { heading: 'Share pet profiles with others', body: 'Manage pets with friends and family or share care info.', icon: '/icons/feature-share.png', image: placeholderImage, unreleased: true },
  { heading: 'Store all pet info and records in one place', body: 'Easy access to pet health history and vet records. Take notes of important identifications and useful contacts', icon: '/icons/feature-records.png', image: placeholderImage, unreleased: true },
]

function FeatureIndex() {
  return (
    <div className='w-full flex flex-col mt-20 sm:mt-40'>
      <h1 className='text-2xl xl:text-4xl sm:text-3xl text-center font-bold mb-10'>Features</h1>
      <Carousel cards={features} type='feature' cardSize='md'/>
    </div>
  )
}

export default FeatureIndex