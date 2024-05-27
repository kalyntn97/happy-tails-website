//components
import DownloadCard from "@/components/DownLoadCard"
import FeatureIndex from "@/components/FeatureIndex"
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection"
import Testimonials from "@/components/Testimonials"

export default function Page() {

  return (
    <div className="w-full flex flex-col pb-20">
      <ScrollAnimatedSection content={<DownloadCard />} />
      <FeatureIndex />
      <Testimonials />

    </div>
  )
}