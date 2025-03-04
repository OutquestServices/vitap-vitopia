"use client";

import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Homepage/sections/navbar";
import { Footer } from "@/components/Homepage/sections/footer";

export default function RoleBridgePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const MAX_RETRIES = 3;
  const [retryCount, setRetryCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // When session is authenticated, redirect based on user role.
    if (status === "authenticated") {
      const role = session?.user?.role;
      if (role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/user");
      }
    } else if (status === "unauthenticated") {
      attemptSignIn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session, router]);

  const attemptSignIn = async () => {
    try {
      const result = await signIn("google", {
        callbackUrl: "/auth/role-bridge",
        redirect: false, // prevent automatic redirect so we can handle errors
      });

      if (result.error || !result.url) {
        throw new Error(result.error || "No URL returned");
      } else {
        router.push(result.url);
      }
    } catch (error) {
      console.error(
        `Sign in attempt ${retryCount + 1} failed: ${error.message}`,
      );
      if (retryCount < MAX_RETRIES) {
        setRetryCount((prev) => prev + 1);
        setTimeout(() => {
          attemptSignIn();
        }, 2000);
      } else {
        console.error("Maximum sign-in attempts reached.");
        setErrorMessage(
          "Unable to sign in at this time. Please try again later.",
        );
      }
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        {errorMessage ? (
          <p className="text-red-500 text-lg font-semibold">{errorMessage}</p>
        ) : (
          <p className="text-white text-lg font-semibold animate-pulse">
            Loading, please wait...
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
