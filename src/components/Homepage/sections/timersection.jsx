import CountdownTimer from "@/components/Homepage/CountDownTimer";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const TimerSection = () => {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8 mt-4 md:mt-14 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Text and button column */}
          <div className="lg:col-span-1">
            <p className="text-[28px] md:text-3xl lg:text-[44px] leading-10 font-bold testFont">
              CULTURAL's <br className="hidden md:block" /> STARTS IN
            </p>
            <div className="mt-4 lg:mt-8">
              <Link
                href="https://events.vitap.ac.in/e/vitopia-2025-cultural-dd247f1d-90e2-4daa-8615-441050caf953"
                target="_blank"
                className="testFont inline-flex items-center px-6 py-3 bg-[#FF8321] text-black text-sm md:text-base lg:text-lg font-semibold rounded hover:bg-gray-100 hover:text-black transition duration-300"
              >
                Registration <MdArrowOutward className="ml-2" />
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
