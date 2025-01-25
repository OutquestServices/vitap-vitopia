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
      role: "Electronic Indian music producer",
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
      name: "Devi Sri Prasad",
      role: "Singer",
      image: "/last_lineup/dsp.avif",
    },
    {
      name: "Thaman",
      role: "Singer",
      image: "/last_lineup/thamman.avif",
    },
    {
      name: "Lavanya Tripathi",
      role: "Actress",
      image: "/last_lineup/lavanya.avif",
    },
  ];
  return (
    <div className="w-full h-full relative flex flex-col gap-14 justify-center items-center py-10 bg-black">
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold px-10 text-center">MEET OUR LAST YEAR LINE-UP</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {data.map((item, index) => (
          <MeteorCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
