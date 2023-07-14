import Link from "next/link";

export default function LinkAsButton({text, route, bgColor, textColor}) {
  return (
    <Link
      href={route}
      className={`bg-${bgColor}-500 hover:bg-${bgColor}-700 active:bg-${bgColor}-900 rounded-xl text-${textColor} px-3 py-2 inline-block h-fit col-span-2 ml-4`}>
        {text}
    </Link>
  );
}
