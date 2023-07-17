import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Breadcrumbs() {
  const router = useRouter();
  const path = usePathname();
  const pathArray = path.split("/");
  pathArray[0] = "/";
  const pathLength = pathArray.length;
  const pathLast = pathArray[pathLength - 1];

  const search = useSearchParams().get("model");
  console.log(search);
  
  return (
    <ul className="container flex p-4 bg-blue-100">
      {pathArray.map((path, index) => {
        if(path === "/"){
          return (
            <li key={index}>
              <Link href="/">
                Home
              </Link>
            </li>
          );
        }

        return (
          <li key={index}>
            {pathLast !== "" && <span className="mx-2">/</span>}
              {search}
          </li>
        );
      })}
    </ul>
  );
}
