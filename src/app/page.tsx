import Carousel from "@/components/Carousel"
import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col">
        <Carousel />
      </div>
    </div>
  )
}