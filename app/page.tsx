import Image from "next/image";
import illustration from "@/public/hero.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around  items-center h-[80dvh] p-4">
      <div className="md:ml-14 mb-6 md:mb-0">
        <Image
          src={illustration}
          alt="illustration"
          quality={100}
          width={350} // Adjusted width for better spacing
          height={350} // Adjusted height for better spacing
          className="w-full max-w-xs md:max-w-sm" // Control max width on large screens
        />
      </div>

      <div className="flex flex-col items-center text-center md:text-end md:items-end md:mr-5">
        <h1 className="text-3xl md:text-4xl text-primary-500 mb-2 font-extrabold">
          Find the right professor!
        </h1>
        <div className="text-wrap text-sm md:text-base w-11/12 md:w-8/12 mb-4">
          You can ask{" "}
          <span className="text-primary-500 font-extrabold">AiProfessor</span>{" "}
          to help you find specific attribute about a professor and receive
          tailored results.
        </div>

        <Link href="/chat">
          <button className="bg-primary-500 rounded-full py-2 px-6 md:px-8 gap-3 font-semibold text-sm md:text-base inline-flex items-center text-primary-100">
            continue{" "}
            <ArrowRightIcon className="fill-primary-100 w-5 md:w-6 self-end" />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
