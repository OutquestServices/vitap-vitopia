"use client";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import { ProwShows } from "@/components/Merch/proshows";
import { Tshirts } from "@/components/Merch/tshirts";
import { PinContainer } from "@/components/ui/3d-pin";
import React from "react";

export default function AnimatedPinDemo() {
    return (
        (
            <div className="bg-black min-h-screen">
                <Navbar />
                <div className=" w-full flex flex-col items-center justify-center pt-40">
                    <ProwShows/>
                    <Tshirts />
                </div>
                {/* <div className="h-[40rem] w-full flex items-center justify-center pt-40">
                    <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
                        <div
                            className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Aceternity UI
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div
                                className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div> */}
                <Footer />
            </div>
        )
    );
}

