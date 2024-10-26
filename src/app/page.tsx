
import Cours from "@/components/home/cours";
import LastSection from "@/components/home/LastSection";
import Objectifs from "@/components/home/objectifs";
import ReviewsSection from "@/components/home/reviews";
import Tarifs from "@/components/home/tarifs";
import Layout from "@/components/layout";




export default function Home() {
  return (
    <Layout withSlider>
      <div className="mt-3 max-w-6xl mx-auto p-4">
        <Cours />
      </div>
      <div className="mt-3  mx-auto ">
        <Objectifs />
      </div>
      <div className="mt-3 max-w-6xl mx-auto p-4">
        <Tarifs />
      </div>
      <div className="mt-3 max-w-6xl mx-auto p-4">
        <ReviewsSection />
      </div>
      <div className="mt-14  mx-auto">
        <LastSection />
      </div>
    </Layout>
  );
}
