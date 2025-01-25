import { MeteorCard } from "../meteorcard";

export default function CardSection() {
  const data = [
    {
      name: "Jonita Gandhi",
      role: "Canadian singer",
      image: "/last_lineup/jonitha.avif",
    },
    {
      name: "Salim-Sulaiman",
      role: "Duo",
      image: "/last_lineup/salim_suleman.avif",
    },
    {
      name: "Progressive Bros",
      role: "Electronic Duo",
      image: "/last_lineup/progressive.avif",
    },
    {
      name: "Dj Nucleya",
      role: "DJ",
      image: "/last_lineup/dj_nucleya.avif",
    },
    {
      name: "Jammers Band",
      role: "Musical Band",
      image: "/last_lineup/jammers_band.avif",
    },
    {
      name: "PRITHVI SAI",
      role: "Musical artist",
      image: "/last_lineup/prithvi.avif",
    },
    {
      name: "Thaikkudam Bridge",
      role: "Musical Band",
      image: "/last_lineup/taikkudum.avif",
    },
    {
      name: "Samay Raina",
      role: "Comedian",
      image: "/last_lineup/samay.webp",
    },
  ];
  return (
    <div className="w-full h-full relative flex flex-col gap-14 justify-center items-center py-10 bg-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold px-10 text-center">MEET OUR VITOPIA 2024 LINE-UP</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {data.map((item, index) => (
          <MeteorCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
