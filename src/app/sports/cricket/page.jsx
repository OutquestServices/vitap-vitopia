import React from "react";
import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import TournamentBracket from "@/components/Sports/Cricket";

export default function Page() {
    return (
        <div className="min-h-screen w-full bg-black">
            <Navbar />
            <div className="pt-36">
                <TournamentBracket />
            </div>
            <Footer />
        </div>
    );
}
