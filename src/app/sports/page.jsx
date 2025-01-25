'use client'

import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import SportsCard from "@/components/SportsPage/sportsCard";


function SportsList() {
    const sports = [
        {
            id: 1,
            name: "Cricket - Men",
            image: "/sports/cricket.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 1,
            name: "Badminton Men - Singles",
            image: "/sports/badminton.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 2,
            name: "Badminton Women - Singles",
            image: "/sports/badminton_women.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 3,
            name: "Badminton Men - Doubles",
            image: "/sports/badminton.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 4,
            name: "Badminton Women - Doubles",
            image: "/sports/badminton_women.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 5,
            name: "Football (15 players) - Men",
            image: "/sports/football.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 6,
            name: "Volleyball (12 players) - Men",
            image: "/sports/volleyball.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 6,
            name: "Volleyball (12 players) - Women",
            image: "/sports/volleyball.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 7,
            name: "Basket Ball (12 players) - Men",
            image: "/sports/basketball.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 7,
            name: "Basket Ball (12 players) - Women",
            image: "/sports/basketball.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 8,
            name: "Table Tennis Men - Singles",
            image: "/sports/tabletennis.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 9,
            name: "Table Tennis Women - Singles",
            image: "/sports/tabletennis.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 8,
            name: "Table Tennis Men - Doubles",
            image: "/sports/tabletennis.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 9,
            name: "Table Tennis Women - Doubles",
            image: "/sports/tabletennis.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 10,
            name: "Chess - Men",
            image: "/sports/chess.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 11,
            name: "Chess - Women",
            image: "/sports/chess.avif",
            description: "Completely renovated for the season 2020.",
            tags: ["sunnyweather", "sea", "nature", "watersports"]
        },
        {
            id: 12,
            name: "Throw Ball - Women",
            image: "/sports/throwball.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 13,
            name: "Karate - Men",
            image: "/sports/karate.avif",
            description: "Beautiful beach with crystal clear waters.",
            tags: ["relaxation", "scuba", "sunset", "family"]
        },
        {
            id: 14,
            name: "Power Lifting - Men",
            image: "/sports/powerlifting.avif",
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
