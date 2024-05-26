import Carousel from "@/components/Carousel"
import FeatureIndex from "@/components/FeatureIndex"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full flex flex-col pb-20">
      <Carousel />
      <FeatureIndex />
      <Testimonials />
    </div>
  )
}