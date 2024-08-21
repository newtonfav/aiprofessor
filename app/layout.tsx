import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | AiProfessor",
    default: "AiProfessor",
  },
  description: "Find the right professor with AiProfessor.",
  authors: [
    { name: "Favour Oghenekowho", url: "https://newtonfav.xyz" },
    { name: "Rohit", url: "" },
    { name: "Bhoomika", url: "" },
    { name: "Swaytha", url: "" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className}  bg-primary-200 text-black min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-1 px-4 py-4 grid">
          <main className="mx-auto w-full max-w-7xl overflow-x-hidden">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
