"use client";
import Image from "next/image";
import { Button } from "../moving-border";
import {
  IconAddressBook,
  IconBuildingStore,
  IconHome,
  IconPennant2,
} from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const signInWithTimeout = (timeout = 5000) => {
  return Promise.race([
    signIn("google", {
      callbackUrl: "/auth/role-bridge",
      redirect: false,
    }),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Sign in timed out")), timeout),
    ),
  ]);
};

export default function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const MAX_RETRIES = 3;

  const handleGrabPasses = async () => {
    let attempt = 0;
    while (attempt < MAX_RETRIES) {
      try {
        const result = await signInWithTimeout(5000);
        if (result.error || !result.url) {
          throw new Error(result.error || "No URL returned");
        }
        router.push(result.url);
        return;
      } catch (error) {
        attempt++;
        const errorMsg =
          error && error.message ? error.message : "Unknown error";
        console.error(`Attempt ${attempt} failed: ${errorMsg}`);
        if (attempt < MAX_RETRIES) {
          await delay(2000);
        } else {
          console.error("Maximum sign-in attempts reached.");
        }
      }
    }
  };

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
    {
      title: "Culturals",
      href: "/culturals",
    },
    {
      title: "Contact",
      icon: <IconAddressBook color="white" />,
      href: "/contact",
    },
    {
      title: "Merchandise",
      icon: <IconBuildingStore color="white" />,
      href: "/merchandise",
    },
  ];

  return (
    <div className="absolute z-30 w-full flex items-center justify-between px-6 pt-6 md:pt-12">
      <div className="flex">
        <div className="relative w-[120px] h-[60px] md:w-[200px] md:h-[80px]">
          <Image
            src="/logo.svg"
            fill
            style={{ objectFit: "contain" }}
            alt="VT App Logo"
          />
        </div>
        <div className="hidden md:block relative w-auto items-center justify-center top-4">
          <div className="w-[600px] h-[60px] rounded-full flex items-center justify-between bg-black px-10 font-bold">
            {items.map((item, index) => (
              <a className="text-white" href={item.href} key={index}>
                {item.title}
              </a>
            ))}
            {status === "authenticated" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-white"
              >
                Sign Out
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <FloatingDockMobile
        items={items}
        status={status}
        handleGrabPasses={handleGrabPasses}
      />
      <div className="relative w-[200px] h-[80px] hidden md:block">
        <button onClick={handleGrabPasses}>
          <Button>Grab Passes</Button>
        </button>
      </div>
    </div>
  );
}

const FloatingDockMobile = ({ items, className, status, handleGrabPasses }) => {
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
            <button onClick={handleGrabPasses} className="block p-4">
              Grab Passes
            </button>
            {status === "authenticated" ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block p-4"
              >
                Sign Out
              </button>
            ) : null}
          </div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="white"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
    </div>
  );
};
