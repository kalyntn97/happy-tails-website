'use client'

import { ReactNode, useEffect, useRef } from "react"
import { useAnimation, motion, useInView } from "framer-motion"
//animations
import { containerVariants, itemVariants } from "@/components/Layout"

const ScrollAnimatedSection = ({ content }: { content: ReactNode}) => {
  const control = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    isInView ? control.start('visible') : control.start('hidden')
    console.log(isInView)
  }, [control, isInView])

  return (
    <motion.div ref={ref} variants={containerVariants} initial='hidden' whileInView="visible" animate={control}>{content}</motion.div>
  )
}

export default ScrollAnimatedSection