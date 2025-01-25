import CountdownTimer from "@/components/Homepage/CountDownTimer";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const TimerSection = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Text and button column */}
          <div className="lg:col-span-1">
            <p className="text-[28px] md:text-4xl lg:text-5xl font-bold">
              NEXT GIG <br className="hidden md:block" /> STARTS IN
            </p>
            <div className="mt-4 lg:mt-8">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#FF8321] text-black text-sm md:text-base lg:text-lg font-semibold rounded hover:bg-gray-100 hover:text-black transition duration-300"
              >
                Register Now <MdArrowOutward className="ml-2" />
              </Link>
            </div>
          </div>
          {/* Countdown Timer */}
          <div className="lg:col-span-2">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerSection;
