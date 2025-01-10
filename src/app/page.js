import { AboutDesktop } from "@/components/Homepage/sections/aboutsectiondesktop";
import AboutMobile from "@/components/Homepage/sections/aboutsectionmobile";
import CardSection from "@/components/Homepage/sections/cardsection";
import { Footer } from "@/components/Homepage/sections/footer";
import HeroSection from "@/components/Homepage/sections/herosection";
import Images from "@/components/Homepage/sections/imagessection";
import Navbar from "@/components/Homepage/sections/navbar";
import TimerSection from "@/components/Homepage/sections/timersection";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <TimerSection />
      <Images />
      <div className="hidden md:block">
        <AboutDesktop />
      </div>
      <div className="md:hidden">
        <AboutMobile />
      </div>
      <CardSection />
      <Footer />
    </div>
  );
}
