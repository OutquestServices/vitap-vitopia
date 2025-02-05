"use client";

import React from "react";
import { StarsBackground } from "../stars-background";
import Image from "next/image";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMeta,
  IconBrandX,
} from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export function Footer() {
  return (
    <div className="h-full bg-neutral-900 flex flex-col items-center justify-start relative w-full overflow-hidden">
      <StarsBackground />
      <div className="w-full md:w-[80vw] relative top-2 md:top-6 flex flex-col md:flex-row gap-6 items-start justify-between p-6 md:p-8 lg:p-10">
        {/* Logo and Title */}
        <div className="relative w-[180px] h-[80px] md:w-[300px] md:h-[160px]">
          <Image
            src="/vitap-logo-white.png"
            layout="fill"
            objectFit="contain"
            alt="VT App Logo"
          />
        </div>
        {/*  Quick Links */}
        <div className="relative text-white flex flex-col gap-2">
          <h3 className="text-lg font-bold">Quick Links</h3>
          <a href="/sports">Sports</a>
          {/* <a href="/culturals">Culturals</a> */}
          <a href="/about">About</a>
          <button
            onClick={() =>
              signIn("google", { callbackUrl: "/auth/role-bridge" })
            }
            className="cursor-pointer underline bg-transparent border-none text-left"
          >
            Dashboard
          </button>
          {/* <a href="/login">Registration</a> */}
          {/* <a href="/shop">Shop</a> */}
        </div>

        {/* Contact and Social Information */}
        <div className="relative text-white flex flex-col gap-2">
          <h3 className="text-lg font-bold">Contact</h3>
          <p>Convenor: </p>
          <a href="emailto:convenor.vitopia@vitap.ac.in">
            convenor.vitopia@vitap.ac.in
          </a>
          <p>Technical,Registration & Payment Related: </p>
          {/* <a href="emailto:vardhan.21bcb7144@vitapstudent.ac.in">vardhan.21bcb7144@vitapstudent.ac.in</a> */}
          <a href="emailto:akshay.22bce9221@vitapstudent.ac.in">akshay.22bce9221@vitapstudent.ac.in</a>
          <p>Address: VIT-AP University, Amaravati</p>
        </div>

        {/* Social and QR */}
        <div className="relative text-white flex-col gap-2 hidden md:flex">
          <h3 className="text-lg font-bold">Social</h3>
          <a href="https://www.instagram.com/vitap.vitopia/" target="_blank">
            Instagram
          </a>
          <a
            href="https://www.facebook.com/vitap.university/"
            target="_blank"
          >
            Facebook
          </a>
          <a href="https://twitter.com/VITAPuniversity" target="_blank">
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/school/vitap-university/"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>

        <div className="relative text-white flex gap-4 md:hidden">
          <a href="https://www.instagram.com/vitap.vitopia/" target="_blank">
            <IconBrandInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com/vitap.university/"
            target="_blank"
          >
            <IconBrandMeta size={24} />
          </a>
          <a
            href="https://www.linkedin.com/school/vitap-university/"
            target="_blank"
          >
            <IconBrandLinkedin size={24} />
          </a>
          <a href="https://twitter.com/VITAPuniversity" target="_blank">
            <IconBrandX size={24} />
          </a>
        </div>
      </div>

      <hr className="relative w-[90vw] md:w-[80vw] h-0.5 bg-white" />

      <div className="relative items-start justify-between text-white text-center p-4 flex flex-col md:flex-row gap-2 w-[90vw] md:w-[80vw]">
        <p>&copy; 2025 VIT-AP. All rights reserved.</p>
        <div className="z-30">
          Developed with ❤️ by{" "}
          <a
            href="https://www.akshayallenki.in.net"
            target="_blank"
            className="underline"
          >
            Akshay
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/rithwik-sthambamkadi-965793273/"
            target="_blank"
            className="underline"
          >
            Rithwik
          </a>{" "}
          &{" "}
          <a href="https://syncline.tech" target="_blank" className="underline">
            Rishi
          </a>
        </div>
      </div>
    </div>
  );
}
