import "./global.css";

import type { Metadata } from "next";
import { Lusitana } from "next/font/google";

import Navbar from "@/components/Navbar";

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Turniri",
  description: "Napravi kostur za turnir u samo dva koraka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
