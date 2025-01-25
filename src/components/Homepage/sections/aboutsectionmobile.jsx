import Image from "next/image";

export default function AboutMobile() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mt-10">
      <div className="w-fit h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px] relative flex items-center justify-center flex-col">
        <div className="w-80 h-60 relative">
          <Image
            src={"/vitopia-placeholder.webp"}
            fill
            alt="VITOPIA"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col items-center gap-2 pb-6">
          <h2 className="text-[24px] text-white text-center font-Emilio font-bold">
            VITOPIA
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-center">
            About VITopia '24
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-center">
          VITOPIA is the annual international cultural and sports festival
          conducted by VIT-AP University, celebrating its endless enthusiasm for
          various sports and art forms. VITOPIA 2024 marks the fifth edition of
          this cultural and sports extravaganza, scheduled for February 24th and
          25th, 2024. The sports event features 15+ indoor and outdoor games,
          while the cultural event includes over 20 prime cultural competitions.
        </p>
      </div>
      <div className="w-fit h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px] relative flex items-center justify-center flex-col">
        <div className="w-80 h-60 relative">
          <Image
            src={"/vitopia-placeholder.webp"}
            fill
            alt="VITOPIA"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col items-center gap-2 pb-6">
          <h2 className="text-[24px] text-white text-center font-Emilio font-bold">
            VITOPIA
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-center">
            About VITopia '23
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-center">
          VITOPIA is the annual international cultural and sports festival
          conducted by VIT-AP University, celebrating its endless enthusiasm for
          various sports and art forms. VITOPIA 2024 marks the fifth edition of
          this cultural and sports extravaganza, scheduled for February 24th and
          25th, 2024. The sports event features 15+ indoor and outdoor games,
          while the cultural event includes over 20 prime cultural competitions.
        </p>
      </div>
      <div className="w-fit h-max bg-black lg:px-[108px] px-[20px] lg:py-[83px] py-[20px] relative flex items-center justify-center flex-col">
        <div className="w-80 h-60 relative">
          <Image
            src={"/vitap_drone.webp"}
            fill
            alt="VITOPIA"
            className="rounded-md"
          />
        </div>
        <div className="w-full h-full relative flex flex-col items-center gap-2 pb-6">
          <h2 className="text-[24px] text-white text-center font-Emilio font-bold">
            VIT-AP
          </h2>
          <h1 className="text-white font-Montserrat text-[18px] text-center">
            About VIT-AP
          </h1>
        </div>
        <p className="text-white font-Montserrat text-[14px] text-center">
          Our university achieved the prestigious #1 ranking as the Emerging
          Private University in India in the 2022 Outlook Ranking and secured a
          place in the Diamond Band (A+) Category in the 2023 R-World
          Institutional Ranking. This ranking emphasizes Outcome-Based Education
          (OBE), showcasing our unwavering commitment to excellence in
          education. With a staggering 90% placement rate and an impressive
          average package of 34.4 LPA, we ensure that your academic journey
          leads to promising career opportunities.
        </p>
      </div>
    </div>
  );
}
