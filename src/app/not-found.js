import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <main className="flex container min-h-screen flex-col items-center relative">
        <ul className="flex p-4 w-full">
          <li>
            <Link href="/" className="text-blue-500">
              Inicio
            </Link>
          </li>
        </ul>
        <h1 className="text-2xl">Esta página no existe!</h1>
        <p>Por favor, vuelva al incio y disculpe las molestias.</p>
      </main>
    </>
  );
}
