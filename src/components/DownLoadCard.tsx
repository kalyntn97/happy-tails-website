import Image from "next/image"
import Link from "next/link"

const links = {
  beta: { href: '', active: false},
  googlePlayStore: { href: '', badge: '/icons/google-play-badge.png', active: false },
  appStore: {href: '', badge: '/icons/app-store-badge.png',  active: false },
}

export default function DownloadCard() {
  return (
    <div className="w-screen flex flex-col lg:flex-row items-center justify-center p-10 md:p-20">
      <div className="flex flex-col w-full lg:w-2/5 items-center justify-center">
        <h1 className="text-2xl xl:text-5xl lg:text-3xl md:text-2xl mb-10">Happy Tails - an app for pet lovers</h1>
        <h2 className="text-base md:text-xl lg:text-2xl mb-10 md:mb-20">Manage everything about your pets. Download the Happy Tails to your phone now.</h2>

        <Link pointer-events={links.beta.active} href='' className="group flex h-10 w-48 md:h-16 md:w-80 flex-col items-center justify-center mb-5 rounded-lg bg-red-400 dark:bg-red-600 shadow-[inset_0px_2px_4px_0px_#fee2e2,inset_0px_-2px_4px_0px_#ef4444,0px_-2px_16px_0px_#ef4444,0px_2px_16px_0px_#fee2e2] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px__#fee2e2,inset_0px_2px_4px_0px_#ef4444,0px_2px_16px_0px_#ef4444,0px_2px_16px_0px__#fee2e2]">
          <p className="text-md md:text-xl font-semibold duration-200 group-active:translate-y-[5%]">Become our beta-testers</p>
        </Link>
        <h5 className="text-lg">(Coming soon)</h5>

        <div className="flex flex-row items-center">
          <Link pointer-events={links.appStore.active} href='' className="mr-1">
            <Image src={links.appStore.badge} width={500} height={250} alt='an app store badge' className="w-40 rounded-xl" />
          </Link>
          <Link pointer-events={links.googlePlayStore.active} href=''>
            <Image src={links.googlePlayStore.badge} width={500} height={250} alt='a google play badge' className="w-48 h-auto" />
          </Link>
        </div>
        <h5 className="text-lg">(Coming soon)</h5>

      </div>
      <Image src={'/images/download.gif'} alt='a mobile mockup' width={700} height={700} className="w-full lg:w-2/5 h-auto"/>
    </div>
  );
}
