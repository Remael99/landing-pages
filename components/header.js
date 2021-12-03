import Image from "next/image";
import Layout from "./layout";
import Link from "next/link";

export default function Header() {
  return (
    <Layout>
      <header className="w-full h-auto p-1  flex justify-between md:h-14  md:p-2 md:pl-2 md:pr-4 ">
        <div className="flex  h-full   items-center">
          <Image
            className="h-full"
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
          <Link href="/">
            <a className="text-indigo-700 text-xl font-bold space-x-1 ml-1 no-underline hover:underline focus:underline  transition-all">
              Invasion
            </a>
          </Link>
        </div>
        <nav className=" w-1/2 m-auto ">
          <ul className=" w-full  list-none text-indigo-400  text-lg flex items-center justify-between  ">
            {["Product", "Company", "Integrations", "Pricing"].map(
              (nav, index) => (
                <li
                  key={index}
                  className="hover:underline hover:cursor-pointer hover:text-indigo-500 "
                >
                  {nav}
                </li>
              )
            )}
          </ul>
        </nav>
        <button className="h-full bg-red-50 rounded-3xl p-3 md:p-1 w-24 md:w-24 text-red-400 focus:ring-1 focus:ring-red-400  ">
          {" "}
          sign up{" "}
        </button>
      </header>
    </Layout>
  );
}
