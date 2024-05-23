import Image from "next/image"

export default function Page() {
  return (
    <main className="h-screen bg-white">
      <div className="flex flex-row">
        <h1>Welcome to Happy Tails</h1>
        <Image src={'/icon.png'} width={200} height={200} className="hidden md:block" alt="Happy Tails Logo" />
      </div>
    </main>
  )
}