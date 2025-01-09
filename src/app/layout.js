import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "VITopia '25 | VIT-AP University - Amaravati",
  description: "VIT AP International Techfest V-TAPP 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
