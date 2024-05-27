"use client"

import { motion } from "framer-motion"

const slideVariants = {
  hidden: { x: 300, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1, 
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
}


export const scaleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
}

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.5 } ,
  },
}

export const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={slideVariants}
      initial='hidden'
      animate='visible'
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
    {children}
  </motion.div>
  )
}