'use client'

import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import SportsCard from "@/components/SportsPage/sportsCard";


function SportsList() {
    const sports = [
        {
            id: 1,
            name: "Badminton Men",
            image: "/sports/badminton.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 2,
            name: "Badminton Women",
            image: "/sports/badminton_women.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 1,
            name: "Verudela Beach",
            image: "/test.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 2,
            name: "Another Beach",
            image: "/test.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 1,
            name: "Verudela Beach",
            image: "/test.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 2,
            name: "Another Beach",
            image: "/test.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 1,
            name: "Verudela Beach",
            image: "/test.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 2,
            name: "Another Beach",
            image: "/test.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        // Add more beach objects to reach the total of 10 as required
    ];
    return (
        <div className="bg-black min-h-screen flex flex-col items-center">
            <Navbar />
            {/* Adjusting grid placement and center alignment */}
            <div className="relative flex flex-wrap justify-center items-center w-full p-4 mt-4 py-28">
                {sports.map(beach => (
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
