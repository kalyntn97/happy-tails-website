import DownloadCard from "@/components/DownLoadCard"
import FeatureIndex from "@/components/FeatureIndex"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"

export default function Page() {
  return (
    <div className="w-full flex flex-col pb-20">
      <DownloadCard />
      <FeatureIndex />
      <Testimonials />
    </div>
  )
}