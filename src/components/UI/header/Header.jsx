import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full font-bold text-2xl text-white">
      <Link href="/">
        <h1 className="bg-blue-500 top-0 w-full left-0 p-4 z-10">
          Best Smart Phones
        </h1>
      </Link>
    </header>
  );
}
