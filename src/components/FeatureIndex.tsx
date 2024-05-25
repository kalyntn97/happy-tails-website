import Image from 'next/image'
import React from 'react'

const unreleased = 'Subscribe to get notified with new features'

const features = [
  { title: 'Manage every day tasks', body: 'Never forget any tasks by setting a reminder', icon: '/icons/feature-care.png' },
  { title: 'Stay on top of vet appointments', body: 'Add custom notes to each visit', icon: '/icons/feature-health.png' },
  { title: 'Track any pet information', body: 'Keep track of weight, mood, and more', icon: '/icons/feature-track.png' },
  { title: 'Monitor abnormal values through graphs', body: 'Observe disease/illness lab values over time', icon: '/icons/feature-disease.png' },
  { title: 'Share pet profiles with others', body: 'Manage pets with friends and family', icon: '/icons/feature-share.png', unreleased: true },
  { title: 'Store health records in one place', body: 'Easy access to pet history', icon: '/icons/feature-records.png', unreleased: true },
]

function FeatureIndex() {
  return (
    <div className='w-full flex flex-col mt-20 sm:mt-40'>
      <h1 className='text-2xl xl:text-4xl sm:text-3xl text-center font-bold'>Features</h1>
      <div className='flex flex-wrap justify-center mt-5'>
        {features.map((feature, index) => 
          <div key={index} className='flex flex-col w-2/3 sm:basis-1/3 m-6 p-4 bg-red-200 rounded-lg transition ease-in-out duration-300 delay-75 hover:scale-110 hover:bg-red-100'>
            <div className='flex flex-row items-center'>
              <Image src={feature.icon} alt={`feature ${index} icon`} width={64} height={64} className='size-6 sm:size-8'/>
              <h3 className='sm:text-xl mb-2 ml-2'>{feature.title}</h3>
              <span className={`${feature.unreleased ? 'block' : 'hidden'} rotate-12 font-bold text-stone-400 text-lg ml-2`}>Coming soon</span>
            </div>
            
            <p className='text-xs sm:text-base'>{feature.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FeatureIndex