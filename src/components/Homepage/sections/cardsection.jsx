import { MeteorCard } from "../meteorcard";

export default function CardSection() {
  const data = [
    {
      name: "Karthik",
      role: "Singer",
      day: "Day 2",
      image: "/lineup/karthik1.avif",
    },
    {
      name: "ARMAAN MALIK",
      role: "Indian Singer",
      day: "Day 3",
      image: "/lineup/armaan_malik.avif",
    },
    {
      name: "Shalmali Kholgade",
      role: "Indian playback singer",
      day: "Day 2",
      image: "/lineup/shalmali.avif",
    },
    {
      name: "Masala Coffee Band",
      role: "Band",
      day: "Day 3",
      image: "/lineup/mc.avif",
    },
    {
      name: "ESHA SINGH",
      role: "Indian professional shooter",
      day: "Day 2",
      image: "/lineup/Esha.png"
    },
    {
      name: "DJ PAROMA",
      role: "Musical Artist",
      day: "Day 1",
      image: "/lineup/paroma.jpg",
    },
    {
      name: "DJ NYK",
      role: "Musical artist",
      day: "Day 3",
      image: "/lineup/nyk.webp",
    },
    {
      name: "DJ Mark",
      role: "Musical artist",
      day: "Day 3",
      image: "/lineup/mark.jpg",
    },
    {
      name: "Band Swaraag",
      role: "Musical Band",
      day: "Day 1",
      image: "/lineup/swaraag.jpg",
    },
    {
      name: "Band Sehari",
      role: "Musical Band",
      day: "Day 1",
      image: "/lineup/sehari.jpeg",
    },
    {
      name: "DJ YESH",
      role: "Musical artist",
      day: "Day 2",
      image: "/lineup/yesh.jpg",
    },
  ];
  return (
    <div className="w-full h-full relative flex flex-col gap-14 justify-center items-center py-10 bg-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold px-10 text-center">MEET OUR VITOPIA 2025 LINE-UP</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {data.map((item, index) => (
          <MeteorCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
