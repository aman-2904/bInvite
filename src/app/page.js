import Categories from "@/components/Global/Categories";
import WeddingInvitations from "@/components/Global/WeddingInvitation";
import PaperSource from "@/components/Home/PaperOptions";
import Phone from "@/components/Home/Phone";
import ShopBySeason from "@/components/Home/ShopBySeason";
import VirtualConsultations from "@/components/Home/VirtualConsultation";
import WeddingInspiration from "@/components/Home/WeddingInspiration";
import WeddingStationery from "@/components/Home/WeddingStationary";




export default function Home() {

  return (
    <div className="text-center">
      <Categories />
      <Phone />
      <WeddingInvitations />
      <PaperSource />
      <WeddingStationery />
      <VirtualConsultations />
      <ShopBySeason />
      <WeddingInspiration />
    </div>
  );
}
