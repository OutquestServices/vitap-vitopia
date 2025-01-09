import Image from "next/image";

export default function AboutMobile() {
  return (
    <div className="flex flex-col gap-10 mt-10">
      <div className="w-full h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px]">
        <div className="w-80 h-60 relative">
          <Image
            src={"/vitopia-placeholder.webp"}
            fill
            alt="gfythgv"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col gap-2 pb-6">
          <h2 className="text-[24px] text-white text-left font-Emilio font-bold">
            VITOPIA
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-justify">
            About VITopia '24
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-justify">
          VITOPIA is the annual international cultural and sports festival
          conducted by VIT-AP University, celebrating its endless enthusiasm for
          various sports and art forms. VITOPIA 2024 marks the fifth edition of
          this cultural and sports extravaganza, scheduled for February 24th and
          25th, 2024. The sports event features 15+ indoor and outdoor games,
          while the cultural event includes over 20 prime cultural competitions.
        </p>
      </div>
      <div className="w-full h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px]">
        <div className="w-80 h-60 relative">
          <Image
            src={"/vitap_drone.webp"}
            fill
            alt="gfythgv"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col gap-2 pb-6">
          <h2 className="text-[24px] text-white text-left font-Emilio font-bold">
            VITOPIA
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-justify">
            About VITopia '24
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-justify">
          VITOPIA is the annual international cultural and sports festival
          conducted by VIT-AP University, celebrating its endless enthusiasm for
          various sports and art forms. VITOPIA 2024 marks the fifth edition of
          this cultural and sports extravaganza, scheduled for February 24th and
          25th, 2024. The sports event features 15+ indoor and outdoor games,
          while the cultural event includes over 20 prime cultural competitions.
        </p>
      </div>
    </div>
  );
}
