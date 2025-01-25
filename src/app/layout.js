import { Lexend } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "VITopia '25 | VIT-AP University - Amaravati",
  description: "VIT AP International Techfest V-TAPP 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-8TC7T9HD2B" />
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
