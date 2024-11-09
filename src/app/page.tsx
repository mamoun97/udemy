
import Cours from "@/components/home/cours";
import LastSection from "@/components/home/LastSection";
import Objectifs from "@/components/home/objectifs";
import ReviewsSection from "@/components/home/reviews";
import Tarifs from "@/components/home/tarifs";
import Layout from "@/components/layout";
import ModalFreeCours from "@/components/modal-free-cours";




export default function Home() {
 
  return (
    <Layout withSlider>
      <div className="mt-3 max-w-6xl flex flex-col gap-3 mx-auto p-4">
        <Cours />
      
        <Objectifs />
      
        <Tarifs />
      
        <ReviewsSection />
     
        <LastSection />
      </div>
      <ModalFreeCours/>
    </Layout>
  );
}
