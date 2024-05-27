//components
import DownloadCard from "@/components/DownLoadCard"
import FeatureIndex from "@/components/FeatureIndex"
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection"
import Testimonials from "@/components/Testimonials"

export default function Page() {

  return (
    <div className="w-full flex flex-col pb-20">
      <ScrollAnimatedSection index={0} content={<DownloadCard />} />
      <ScrollAnimatedSection index={1} content={<FeatureIndex />} />
      <ScrollAnimatedSection index={2} content={<Testimonials />} />
    </div>
  )
}