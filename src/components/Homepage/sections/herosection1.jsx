"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function HeroSection1() {
    return (
        <div className="w-full h-[70vh] md:h-[80vh] lg:h-screen relative overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/background-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <div className="absolute top-10 left-8 md:top-20 md:left-24 lg:top-10 lg:left-40 flex flex-col gap-6 md:gap-0 items-start justify-center w-fit h-fit z-10">
                <div className="w-[100px] h-[100px] md:w-[350px] md:h-[300px] lg:w-[500px] lg:h-[280px] relative top-8">
                    <Image src={"/orange_logo.svg"} alt="Ortopia Logo" fill className="hidden md:block object-contain" />
                </div>
                <div className="text-[24px] md:text-[48px] lg:text-[56px] testFont text-white text-start font-extrabold shadow-xl">
                    INTERNATIONAL <br /> SPORTS & <br />CULTURAL FEST
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:space-x-4 md:mt-6 items-start justify-start text-center w-full h-full">
                    <a
                        href="/merchandise"
                        target="_blank"
                        className="testFont bg-[#FF8321] text-black font-semibold text-sm md:font-bold md:text-lg px-6 py-1 md:px-14 md:py-3 shadow-lg w-full"
                    >
                        Cultural Registration
                    </a>
                </div>
                <div className="flex md:flex-row flex-col gap-4 md:space-x-4 md:mt-4 items-start justify-start w-full h-full">
                    <a
                        href="/culturals"
                        target="_blank"
                        className="testFont border-2 text-white font-semibold text-sm md:font-semibold md:text-lg px-5 py-1 md:px-10 md:py-3 shadow-lg"
                    >
                        Cultural Prime
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="testFont border-2 text-white font-semibold text-sm md:font-semibold md:text-lg px-5 py-1 md:px-10 md:py-3 shadow-lg"
                    >
                        Cultural Non Prime
                    </a>
                </div>
            </div>

            {/* Overlay to darken video */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0" />
        </div>
    );
}
