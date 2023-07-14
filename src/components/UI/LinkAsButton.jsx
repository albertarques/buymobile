import Link from "next/link";

export default function LinkAsButton({text, route}) {
  return (
    <Link
      href={route}
      className="bg-orange-500 hover:bg-orange-700 active:bg-orange-900 rounded-xl text-white px-3 py-2 inline-block h-fit col-span-2 ml-4">
        {text}
    </Link>
  );
}
