"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "../sticky-scroll-reveal";

const content = [
  {
    title: "About VITopia '23",
    subtitle: "VITOPIA",
    description:
      "VITOPIA is the annual international cultural and sports festival conducted by VIT-AP University, celebrating its endless enthusiasm for various sports and art forms. VITOPIA 2024 marks the fifth edition of this cultural and sports extravaganza, scheduled for February 24th and 25th, 2024. The sports event features 15+ indoor and outdoor games, while the cultural event includes over 20 prime cultural competitions.",
    content: (
      <Image
        src="/vitopia-placeholder.webp"
        alt="Collaborative Editing"
        layout="fill"
        objectFit="cover"
      />
    ),
  },
  {
    title: "About VITopia '24",
    subtitle: "VITOPIA",
    description:
      "VITOPIA is the annual international cultural and sports festival conducted by VIT-AP University, celebrating its endless enthusiasm for various sports and art forms. VITOPIA 2024 marks the fifth edition of this cultural and sports extravaganza, scheduled for February 24th and 25th, 2024. The sports event features 15+ indoor and outdoor games, while the cultural event includes over 20 prime cultural competitions.",
    content: (
      <Image
        src="/vitopia-placeholder.webp"
        alt="Collaborative Editing"
        layout="fill"
        objectFit="cover"
      />
    ),
  },
  {
    title: "About VIT - AP",
    subtitle: "VIT-AP",
    description:
      "Our university achieved the prestigious #1 ranking as the Emerging Private University in India in the 2022 Outlook Ranking and secured a place in the Diamond Band (A+) Category in the 2023 R-World Institutional Ranking. This ranking emphasizes Outcome-Based Education (OBE), showcasing our unwavering commitment to excellence in education. With a staggering 90% placement rate and an impressive average package of 34.4 LPA, we ensure that your academic journey leads to promising career opportunities.",
    content: (
      <Image
        src="/vitap_drone.webp"
        alt="Real Time Changes"
        layout="fill"
        objectFit="cover"
      />
    ),
  },
];

export function AboutDesktop() {
  return (
    <div className="p-10 bg-black">
      <StickyScroll content={content} />
    </div>
  );
}
