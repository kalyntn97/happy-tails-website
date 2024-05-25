'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion, spring } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ThemeSwitcher({}: Props) {
  const [mounted, setMounted] = useState(false)
  const [isOn, setIsOn] = useState<boolean>(false)
  const { systemTheme, theme, setTheme } = useTheme()

  const toggleSwitch = () => {
    setIsOn(!isOn)
    const currentTheme = theme === "system" ? systemTheme : theme
    currentTheme === "dark" ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <button onClick={toggleSwitch} className={`${isOn === true ? 'justify-end' : 'justify-start'} w-16 h-10 sm:w-20 sm:h-12 bg-red-100 dark:bg-gray-600 rounded-full flex items-center p-1`}>
      <motion.div layout transition={spring} className='w-8 h-8 sm:w-10 sm:h-10 bg-red-50 dark:bg-gray-800 rounded-full flex justify-center items-center'>
        <Image src={`${theme === 'light' ? '/icons/light.png' : '/icons/dark.png'}`} width={30} height={30} alt='a theme icon' />
      </motion.div>
    </button>
  )
}

export default ThemeSwitcher