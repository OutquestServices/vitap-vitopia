import { About } from "@/components/Homepage/sections/aboutsection";
import HeroSection from "@/components/Homepage/sections/herosection";
import Images from "@/components/Homepage/sections/imagessection";
import TimerSection from "@/components/Homepage/sections/timersection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TimerSection />
      <Images />
      <About />
    </>
  );
}
