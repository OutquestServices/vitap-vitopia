'use client'

import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import SportsCard from "@/components/SportsPage/sportsCard";
import { useEffect, useState } from "react";


function SportsList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/fetch/sports`);
            const data = await response.json();

            setData(data.events);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center md:h-[60vh]">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-500"></div>
            </div>
        );
    }

    return (
        <div className="bg-black min-h-screen flex flex-col items-center">
            <Navbar />
            {/* Adjusting grid placement and center alignment */}
            <div className="relative flex flex-wrap justify-center items-center w-full p-4 mt-4 py-28 bg-black">
                {data.map(beach => (
                    <div className="p-4"> {/* Adding padding around each card for better spacing */}
                        <SportsCard key={beach.id} beach={beach} />
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default SportsList;
