'use client'
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "./Layout"

const links = {
  beta: { href: '', active: false},
  googlePlayStore: { href: '', badge: '/icons/google-play-badge.png', active: false },
  appStore: {href: '', badge: '/icons/app-store-badge.png',  active: false },
}

export default function DownloadCard() {
  return (
    <motion.div variants={containerVariants} initial='hidden' animate='visible' className="w-screen flex flex-col lg:flex-row items-center justify-center p-10 md:p-20">
      <motion.div variants={itemVariants} className="flex flex-col w-full lg:w-2/5 items-center justify-center">
        <h1 className="text-2xl xl:text-5xl lg:text-3xl md:text-2xl mb-10">Happy Tails - Your One-Stop Pet Care Companion</h1>
        <h2 className="text-base md:text-xl lg:text-2xl mb-10 md:mb-10">Keeping your pet&rsquo;s well-being at your fingertips. Download the the app to your phone today.</h2>
        <Link pointer-events={links.beta.active} href='' className="group h-12 w-56 md:h-16 md:w-80 mt-10 mb-5 p-2 bg-orange-50 dark:bg-orange-600 flex items-center justify-center cursor-pointer rounded-lg border-2 border-orange-400 dark:border-orange-600 shadow-[inset_0px_-2px_0px_1px] shadow-orange-400 dark:shadow-orange-600 hover:dark:shadow-orange-600 hover:bg-orange-400 hover:dark:bg-orange-50 transition duration-300 ease-in-out">
          <h4 className="text-md md:text-xl duration-200 group-active:translate-y-[5%] text-orange-400 dark:text-orange-50 group-hover:text-orange-50 group-hover:dark:text-orange-600">Become our beta-testers</h4>
        </Link>
        <h5 className="text-lg -mt-2">(Coming soon)</h5>

        <motion.div variants={itemVariants} className="flex flex-row items-center">
          <Link pointer-events={links.appStore.active} href='' className="mr-1">
            <Image src={links.appStore.badge} width={500} height={250} alt='an app store badge' className="w-48 h-auto" />
          </Link>
          <Link pointer-events={links.googlePlayStore.active} href=''>
            <Image src={links.googlePlayStore.badge} width={500} height={250} alt='a google play badge' className="w-48 h-auto" />
          </Link>
        </motion.div>
        <h5 className="text-lg -mt-10">(TBD)</h5>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full lg:w-2/5 h-auto">
        <Image src={'/images/download.gif'} alt='a mobile mockup' width={700} height={700} className="w-full h-auto"/>
      </motion.div>
    </motion.div>
  );
}
