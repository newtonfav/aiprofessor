import Link from "next/link";

function NotFound() {
  return (
    <main className="text-center space-y-6 mt-4">
      <h1 className="text-3xl font-semibold midPhone:text-[1rem]">
        This page could not be found :(
      </h1>
      <Link
        href="/"
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg midPhone:px-3 midPhone:py-2"
      >
        Go back home
      </Link>
    </main>
  );
}

export default NotFound;
