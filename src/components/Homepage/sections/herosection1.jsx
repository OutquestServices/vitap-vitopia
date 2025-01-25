"use client";
import Image from "next/image";

export default function HeroSection1() {
    return (
        <div className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] lg:h-screen relative bg-cover bg-center" style={{ backgroundImage: `url('/bk.png')` }}>
            <div className="absolute top-10 left-8 md:top-20 md:left-24 lg:top-10 lg:left-40 flex flex-col gap-6 md:gap-0 items-start justify-center w-fit h-fit">
                <div className="w-[100px] h-[100px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[350px] relative top-8">
                    <Image src={"/orange_logo.svg"} alt="Ortopia Logo" layout="fill" objectFit="contain" className="hidden md:block"/>
                </div>
                <div className="text-[24px] md:text-[48px] lg:text-[64px] font-[black-future] text-white text-start font-extrabold shadow-xl ">
                    INTERNATIONAL <br /> SPORTS & <br />CULTURAL FEST
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:space-x-4 md:mt-8 items-start justify-center w-full h-full">
                    <button className="border-2 text-white font-semibold text-sm md:font-bold md:text-lg px-5 py-1 md:px-10 md:py-3 shadow-lg">
                        Register Now
                    </button>
                    <button className="bg-[#FF8321] text-black font-semibold text-sm md:font-bold md:text-lg px-6 py-1 md:px-10 md:py-3 shadow-lg">
                        Grab Tickets
                    </button>
                </div>
            </div>
        </div>
    );
}
