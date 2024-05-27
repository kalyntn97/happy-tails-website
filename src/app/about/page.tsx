import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">About us</h1>
        <div className="flex flex-col lg:flex-row w-full xl:w-2/3 lg:justify-around items-center bg-white dark:bg-stone-700 rounded-lg p-5 sm:p-20 mb-10 z-10">
          <Image src={'/images/levi.png'} width={500} height={500} className="w-full lg:w-1/2 xl:w-1/3 h-auto mb-10 lg:mr-10 object-contain" alt="an image of a cat" />
          <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl mb-5 text-center lg:text-left">Our Story</h3>
            <p>Hi there! I&rsquo;m Tran, I designed and developed Happy Tails. Our story begins with a deeply personal experience. When my 2-months-old kitten Levi was diagnosed with Feline Infectious Peritonitis (FIP), my world turned upside down. FIP is a severe and often fatal disease, the diagnosis meant Levi needed constant care and monitoring.<br/><br/>Every day, I meticulously tracked Levi&rsquo;s weight and temperature, looking for any signs of improvement or decline. It was a labor of love, but also a source of immense stress. I quickly realized there was no single tool to help manage his complex medical needs efficiently.<br/><br/>My home was also filled with other pets, each with their own unique personalities and health requirements. Adding to the challenge, we moved frequently, making it difficult to keep all of my pets&rsquo; vet records and medical histories organized and accessible. I found myself buried in a sea of paperwork and reminders, struggling to ensure every pet received the care they deserved.<br/><br/></p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full xl:w-2/3 lg:justify-around items-center mt-10 bg-white dark:bg-stone-700 rounded-lg p-5 sm:p-20 mb-10 z-10">
          <div className="flex flex-col w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl mb-5 text-center lg:text-left">Happy Tails</h3>
            <p>In the midst of this overwhelming situation, the idea for a pet app was born. I wanted to create something that could help pet owners like me—who are juggling multiple responsibilities—keep track of their pets&rsquo; health needs in a seamless and stress-free way.<br/><br/>Levi inspired me to develop this app. His journey taught me the importance of having reliable, organized support when caring for our furry family members. I am committed to making pet care simpler and more efficient, so you can focus on what truly matters—sharing love and creating memories with your pets.<br/><br/>Thank you for trusting me to be a part of your pet care journey. Together, we can make sure our pets live healthier, happier lives.</p>
          </div>
          <Image src={'/images/mission.png'} width={500} height={500} className="w-full lg:w-1/2 xl:w-1/3 h-auto mt-10 lg:ml-10 object-contain" alt="a mission story" />
        </div>

    </div>
  );
}