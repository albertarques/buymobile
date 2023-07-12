import Cart from "./Cart";
import Link from "next/link";

export default function Header({cartNumberItems}) {
  return (
    <div className="bg-blue-500">
      <header className="container flex mx-auto font-bold text-2xl text-white justify-between">
        <Link href="/" className="top-0 w-full left-0 p-4 z-10">
          <h1>
            Mobiles retro
          </h1>
        </Link>
        <Cart />
      </header>
    </div>
  );
}
