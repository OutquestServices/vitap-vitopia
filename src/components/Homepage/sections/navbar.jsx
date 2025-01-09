"use client";
import Image from "next/image";
import { FloatingDock } from "../floating-dock";
import { Button } from "../moving-border";
import {
  IconAddressBook,
  IconBuildingStore,
  IconHeartHandshake,
  IconHome,
  IconPennant2,
  IconUser,
} from "@tabler/icons-react";
import {
  IconCalendarEventFilled,
  IconTicket,
  IconUsers,
} from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      title: "Home",
      icon: <IconHome color="white" />,
      href: "/",
    },
    {
      title: "Sports",
      icon: <IconPennant2 color="white" />,
      href: "#",
    },
    {
      title: "Culturals",
      icon: <IconTicket color="white" />,
      href: "/culturals",
    },
    {
      title: "About",
      icon: <IconUser color="white" />,
      href: "#",
    },
    {
      title: "Contact",
      icon: <IconAddressBook color="white" />,
      href: "/contact",
    },
    {
      title: "Shop",
      icon: <IconBuildingStore color="white" />,
      href: "/shop",
    },
  ];
  return (
    <div className="absolute z-30 w-full flex items-center justify-between px-6 pt-6 md:pt-12">
      <div className="relative w-[120px] h-[60px] md:w-[200px] md:h-[80px]">
        <Image
          src="/logo.svg"
          layout="fill"
          objectFit="contain"
          alt="VT App Logo"
        />
      </div>
      <div className=" relative w-auto items-center justify-center">
        <FloatingDock items={items} />
      </div>
      <div className="relative w-[200px] h-[80px] hidden md:block">
        <a href="/login">
          <Button>Login</Button>
        </a>
      </div>
    </div>
  );
}
