import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className=" relative w-full h-auto p-1  flex justify-between md:h-14  md:p-2 md:pl-2 md:pr-4 ">
      <div className="  flex items-center flex-col md:hidden">
        <button
          onClick={() => setOpen(true)}
          className="h-10 bg-red-50 rounded-full p-3 md:p-1 w-10  md:w-24 text-red-400 focus:ring-1 focus:ring-red-400  "
        >
          <GiHamburgerMenu style={{ margin: "auto" }} />
        </button>
        {open && (
          <div className="absolute z-10 bg-white w-3/4 h-screen p-2 flex flex-col left-0 top-0 bottom-0 right-0 ">
            <div className=" flex h-24 items-center w-full">
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
              <button
                onClick={() => setOpen(false)}
                className="h-10 bg-red-50 rounded-full  ml-auto  md:p-1 w-10  md:w-24 text-red-400 focus:ring-1 focus:ring-red-400  "
              >
                <AiOutlineClose style={{ margin: "auto", fontSize: "large" }} />
              </button>
            </div>
            <div className="p-2">
              <nav className=" md:flex  md:w-1/2 md:m-auto ">
                <ul className=" w-full  list-none text-indigo-400  text-lg flex flex-col items-center justify-between  ">
                  {["Product", "Company", "Integrations", "Pricing"].map(
                    (nav, index) => (
                      <li
                        key={index}
                        className="hover:underline group-hover:hover:cursor-pointer hover:text-indigo-500 pt-2 pb-4 "
                      >
                        {nav}
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex  h-full   items-center">
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
      <nav className="hidden md:flex  md:w-1/2 md:m-auto ">
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
      <button className="h-10 bg-red-50 rounded-3xl  md:p-1 w-24 md:w-24 text-red-400 focus:ring-1 focus:ring-red-400  ">
        {" "}
        sign up{" "}
      </button>
    </header>
  );
}
