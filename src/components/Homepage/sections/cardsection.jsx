import { MeteorCard } from "../meteorcard";

export default function CardSection() {
  const data = [
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
    {
      name: "Hanumankid",
      role: "Rap Artist",
      image: "/dawgs.jpg",
    },
  ];
  return (
    <div className="w-full h-full relative flex flex-col gap-14 justify-center items-center py-10 bg-black">
      <h1 className="text-4xl text-white font-bold">MEET OUR LINE-UP</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {data.map((item, index) => (
          <MeteorCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
