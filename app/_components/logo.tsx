import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 z-10 midPhone:w-[2.5rem]">
      <Image
        src={logo}
        quality={100}
        height="40"
        width="40"
        alt="AiProfessor logo"
      />
      <div className="font-bold text-xl">AiProfessor</div>
    </Link>
  );
}
