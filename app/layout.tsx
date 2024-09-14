import "./global.css";

import type { Metadata } from "next";
import { Inter, Lusitana } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lusitana",
});

export const metadata: Metadata = {
  title: "Turniri",
  description:
    " Kreiraj, takmiči se, pobedi! Napravi svoj savršeni turnir brzo i lako.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lusitana.variable} bg-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <main>{children}</main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
