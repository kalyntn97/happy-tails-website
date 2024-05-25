import Image from "next/image"

export default function Page() {
  return (
    <main>
      <div className="flex flex-row">
        <h1>Welcome to Happy Tails</h1>
        <Image src={'/images/main.png'} width={200} height={200} className="" alt="Happy Tails Logo" />
      </div>
    </main>
  )
}