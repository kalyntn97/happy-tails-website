import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen flex flex-col lg:flex-row items-center justify-center p-10 md:p-20">
      <div className="flex flex-col w-full lg:w-1/3 items-center">
        <h1 className="font-bold text-2xl text-center md:text-3xl lg:text-4xl mb-10">Start managing your pets' lives now. Download Happy Tails to your phone.</h1>
        <h3 className="font-bold text-base text-center text-stone-400 md:text-xl lg:text-2xl mb-10 md:mb-20">We're looking for beta testers to test our app.</h3>

        <Link href='' className="group flex h-10 w-48 md:h-16 md:w-80 flex-col items-center justify-center rounded-lg mb-10 bg-red-400 shadow-[inset_0px_2px_4px_0px_#fee2e2,inset_0px_-2px_4px_0px_#ef4444,0px_-2px_16px_0px_#ef4444,0px_2px_16px_0px_#fee2e2] duration-200 hover:translate-y-[5%] active:translate-y-[7%] active:shadow-[inset_0px_-2px_4px_0px__#fee2e2,inset_0px_2px_4px_0px_#ef4444,0px_2px_16px_0px_#ef4444,0px_2px_16px_0px__#fee2e2]">
          <p className="text-md md:text-xl font-semibold text-red-50 duration-200 group-active:translate-y-[5%]">Get our free app</p>
        </Link>

      </div>
      <div className="w-screen lg:w-3/5 h-auto">
        <Image src={'/images/mobile.gif'} alt='a mobile mockup' width={1000} height={1000} className="w-full h-auto"/>
      </div>
    </div>
  );
}
