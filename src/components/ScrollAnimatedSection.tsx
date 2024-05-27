'use client'

import { ReactNode, useEffect, useRef } from "react"
import { useAnimation, motion, useInView } from "framer-motion"
//animations
import { dynamicRowVariants, itemVariants } from "@/components/Layout"

type Props = { 
  content: ReactNode, 
  index?: number
  col?: number
}

const ScrollAnimatedSection = ({ content, index, col }: Props) => {
  const control = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  
  

  useEffect(() => {
    isInView ? control.start('visible') : control.start('hidden')
  }, [control, isInView])

  return (
    <motion.div ref={ref} variants={!!index ? dynamicRowVariants : itemVariants} initial='hidden' whileInView="visible" animate={control} custom={index} className={`${!!col && `flex flex-row items-center justify-center lg:w-1/${col}`} w-full`}>
      {content}
    </motion.div>
  )
}

export default ScrollAnimatedSection