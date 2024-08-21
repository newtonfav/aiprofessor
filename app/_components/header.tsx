import React from "react";
import Logo from "@/app/_components/logo";
import Navigation from "@/app/_components/navigation";

export default function Header() {
  return (
    <header className="">
      <div className="bg-primary-500 px-8 py-4 mt-4 rounded-[0.85rem] text-primary-200 flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
