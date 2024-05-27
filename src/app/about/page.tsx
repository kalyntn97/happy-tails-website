'use client'

import Image from "next/image"
import { motion } from "framer-motion"
//animations
import { containerVariants, itemVariants } from "@/components/Layout"
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

export default function Page() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">About us</h1>
      <motion.div variants={containerVariants} className="relative flex flex-col lg:flex-row w-full xl:w-2/3 lg:justify-end items-center mb-10">
        <motion.div variants={itemVariants} className="lg:absolute w-4/5 lg:w-1/2 h-auto mb-10 lg:mr-10 left-10 z-20 -rotate-12">
          <Image src={'/images/levi.png'} width={500} height={500} className="w-full h-auto object-contain" alt="an image of a cat" />
        </motion.div>
        <motion.div variants={itemVariants} className="flex flex-col w-full lg:w-1/2 bg-white dark:bg-stone-700 rounded-lg p-5 sm:p-20 mb-10 z-10 clip-card">
          <h3 className="text-2xl sm:text-3xl mb-5 text-center lg:text-left">Our Story</h3>
          <p>Hi there! I&rsquo;m Tran, I designed and developed Happy Tails. Our story begins with a deeply personal experience. When my 2-months-old kitten Levi was diagnosed with Feline Infectious Peritonitis (FIP), my world turned upside down. FIP is a severe and often fatal disease, the diagnosis meant Levi needed constant care and monitoring.<br/><br/>Every day, I meticulously tracked Levi&rsquo;s weight and temperature, looking for any signs of improvement or decline. It was a labor of love, but also a source of immense stress. I quickly realized there was no single tool to help manage his complex medical needs efficiently.<br/><br/>My home was also filled with other pets, each with their own unique personalities and health requirements. Adding to the challenge, we moved frequently, making it difficult to keep all of my pets&rsquo; vet records and medical histories organized and accessible. I found myself buried in a sea of paperwork and reminders, struggling to ensure every pet received the care they deserved.<br/><br/></p>
        </motion.div>
      </motion.div>
      
      <motion.div variants={containerVariants} className="relative flex flex-col lg:flex-row w-full xl:w-2/3 lg:justify-start items-center ">
        <ScrollAnimatedSection content={
          <motion.div variants={itemVariants} className="flex flex-col w-full lg:w-1/2 bg-white dark:bg-stone-700 rounded-lg p-5 sm:p-20 mb-10 z-10 clip-card">
            <h3 className="text-2xl sm:text-3xl mb-5 text-center lg:text-left">An app that can manage everything</h3>
            <p>In the midst of this overwhelming situation, the idea of Happy Tails was born. I wanted to create something that could help pet owners like me—who are juggling multiple responsibilities—keep track of their pets&rsquo; health needs in a seamless and stress-free way.<br/><br/>Levi inspired me to develop this app. His journey taught me the importance of having reliable, organized support when caring for our furry family members. I am committed to making pet care simpler and more efficient, so you can focus on what truly matters—sharing love and creating memories with your pets.<br/><br/>Thank you for trusting me to be a part of your pet care journey. Together, we can make sure our pets live healthier, happier lives.</p>
          </motion.div>
        } />
          <motion.div variants={itemVariants} className="lg:absolute w-4/5 lg:w-5/12 h-auto mb-10 lg:mr-12 right-20 z-20">
            <ScrollAnimatedSection content={
              <Image src={'/images/mission.png'} width={500} height={500} className="w-full h-auto object-contain" alt="a mission story" />
            } />
          </motion.div>
      </motion.div>
    </div>
  );
}