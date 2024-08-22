import Image from "next/image";
import illustration from "@/public/hero.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center h-[80dvh] items-center">
      <div className="-mr-10">
        <Image
          src={illustration}
          alt="illustration"
          quality={100}
          width={400}
          height={400}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-primary-500 mb-2 font-extrabold">
          Find the right professor!
        </h1>
        <div className="text-wrap text-base w-8/12 text-center mb-4">
          You can ask{" "}
          <span className="text-primary-500 font-extrabold">AiProfessor</span>{" "}
          to help you find specific attribute about a professor and receive
          tailored results.
        </div>

        <Link href="/chat">
          <button className="bg-primary-500 rounded-full py-2 px-8 gap-3 font-semibold text-base inline-flex items-center text-primary-100">
            continue{" "}
            <ArrowRightIcon className="fill-primary-100 w-6 self-end" />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}
