import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oprișor Raul-Alexandru",
  description: "Portfolio of Oprisor Raul-Alexandru, Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
