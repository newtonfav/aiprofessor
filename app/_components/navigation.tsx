import Link from "next/link";

export default async function Navigation() {
  return (
    <nav className="z-10 relative">
      <ul
        id="nav-items"
        className="md:flex gap-10 transition-all font-semibold duration-500 items-center md:static absolute left-0 bg-white midPhone:text-[1rem] midPhone:text-primary-700 midPhone:-left-[6rem] midPhone:h-[8rem] md:bg-transparent md:w-auto hidden midPhone:p-3"
      >
        <li className="midPhone:mb-2">
          <Link
            href="/chat"
            className="hover:text-accent-400 transition-colors midPhone:mr-6"
          >
            Chat
          </Link>
        </li>
        <li className="midPhone:mb-2">
          <Link
            href="/github"
            className="hover:text-accent-400 transition-colors"
          >
            GitHub
          </Link>
        </li>
        <li className="midPhone:mb-2">
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
