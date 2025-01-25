import { AboutDesktop } from "@/components/Homepage/sections/aboutsectiondesktop";
import AboutMobile from "@/components/Homepage/sections/aboutsectionmobile";
import CardSection from "@/components/Homepage/sections/cardsection";
import { Footer } from "@/components/Homepage/sections/footer";
import HeroSection from "@/components/Homepage/sections/herosection";
import HeroSection1 from "@/components/Homepage/sections/herosection1";
import Images from "@/components/Homepage/sections/imagessection";
import Navbar from "@/components/Homepage/sections/navbar";
import TimerSection from "@/components/Homepage/sections/timersection";

export default function Page() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection1 />
      <Images />
      <TimerSection />
      <div className="hidden lg:block">
        <AboutDesktop />
      </div>
      <div className="lg:hidden">
        <AboutMobile />
      </div>
      <CardSection />
      <Footer />
    </div>
  );
}
