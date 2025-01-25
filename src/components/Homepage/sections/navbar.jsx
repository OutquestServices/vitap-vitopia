"use client";
import Image from "next/image";
import { Button } from "../moving-border";
import {
  IconAddressBook,
  IconBuildingStore,
  IconHeartHandshake,
  IconHome,
  IconPennant2,
  IconUser,
} from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const items = [
    {
      title: "Home",
      icon: <IconHome color="white" />,
      href: "/",
    },
    {
      title: "Sports",
      icon: <IconPennant2 color="white" />,
      href: "/sports",
    },
    // {
    //   title: "Culturals",
    //   icon: <IconTicket color="white" />,
    //   href: "/culturals",
    // },
    {
      title: "About",
      icon: <IconUser color="white" />,
      href: "/about",
    },
    {
      title: "Contact",
      icon: <IconAddressBook color="white" />,
      href: "/contact",
    },
    // {
    //   title: "Shop",
    //   icon: <IconBuildingStore color="white" />,
    //   href: "/shop",
    // },
  ];
  return (
    <div className="absolute z-30 w-full flex items-center justify-between px-6 pt-6 md:pt-12">
      <div className="flex">
        <div className="relative w-[120px] h-[60px] md:w-[200px] md:h-[80px]">
          <Image
            src="/logo.svg"
            layout="fill"
            objectFit="contain"
            alt="VT App Logo"
          />
        </div>
        <div className="hidden md:block relative w-auto items-center justify-center top-4">
          <div className="w-[500px] h-[60px] rounded-full flex items-center justify-between bg-black px-10 font-bold">
            {items.map((item, index) => (
              <a className="text-white" href={item.href} key={index}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <FloatingDockMobile items={items} />
      <div className="relative w-[200px] h-[80px] hidden md:block">
        <a href="/sports">
          <Button>Register Now</Button>
        </a>
      </div>
    </div>
  );
}



const FloatingDockMobile = ({ items, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <div className="absolute top-12 right-0 w-[160px] bg-gray-700 shadow-md text-white">
            {items.map((item, index) => (
              <a key={index} href={item.href} className="block p-4">
                {item.title}
              </a>
            ))}
            <a href="/sports" className="block p-4">
              Grab Tickets
            </a>
          </div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10  flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
    </div>
  );
};