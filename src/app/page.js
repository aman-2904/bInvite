import Categories from "@/components/Global/Categories";
import HeroSection from "@/components/Home/HeroSection";
import ImageCursor from "@/components/Home/ImageCursor";
import PaperSources from "@/components/Home/PaperSources";
import Phone from "@/components/Home/Phone";
import PhotoSlider from "@/components/Home/PhotoSlider";
import { TextScroll } from "@/components/ui/text-scroll";


import Image from "next/image";

export default function Home() {
   
  return (
    <div className="text-center">
      <Categories/>
      <Phone/>
      <HeroSection/>
      <ImageCursor/>
      <PaperSources/>
      <TextScroll
            className="font-display text-center text-4xl font-semibold tracking-tighter  bg-white text-black dark:text-white md:text-7xl md:leading-[5rem]"
      text="Beyond Invites  "
      default_velocity={5}/>
      
      
    </div>
  );
}
