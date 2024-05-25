import Carousel from "@/components/Carousel"
import FeatureIndex from "@/components/FeatureIndex"
import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full flex flex-col pb-20">
      <Carousel />
      <FeatureIndex />
    </div>
  )
}