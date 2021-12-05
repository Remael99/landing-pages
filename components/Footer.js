import Link from "next/link";
import Image from "next/image";

const footerData = [
  {
    title: "OVERVIEW",
    links: ["product", "integrations", "Pricing", "FAQ's"],
  },
  {
    title: "COMPANY",
    links: ["About", "blog", "careers"],
  },
  {
    title: "LEGAL",
    links: ["Terms & conditions", "Privacy & policy", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 flex flex-col bg-purple-900 h-4/5">
      <div className="m-auto w-full h-full md:h-auto md:w-11/12  flex flex-wrap mt-4 p-4">
        <div className=" w-full md:w-2/5 mr-auto  h-full text-gray-400 flex justify-between">
          {footerData.map((data, index) => (
            <ul key={index}>
              <h1 className="text-gray-500"> {data.title} </h1>
              {data.links.map((link, index) => (
                <li
                  className="pt-2 pb-2 hover:underline hover:cursor-pointer "
                  key={index}
                >
                  {" "}
                  {link}{" "}
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="flex w-full h-60 md:w-auto flex-col items-center p-2">
          <div className=" md:flex mr-auto h-1/4 items-center">
            <Image
              className="h-full"
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
            />
            <Link href="/">
              <a className="text-gray-300 text-xl font-bold space-x-1 ml-1 no-underline hover:underline focus:underline  transition-all">
                Invasion
              </a>
            </Link>
          </div>
          <div className="flex flex-col h-2/4 mr-auto p-2 text-gray-400 items-center text-left ">
            <h4 className="text-xl mr-auto">subscribe to our newsletter</h4>
            <p className="text-lg">
              The latest news, articles and resources sent to your inbox
              directly
            </p>
          </div>
          <div className=" mt-2 md:mt-0 h-1/4 mr-auto flex items-center bg-purple-100 rounded-3xl w-full md:w-3/4  pl-2 ">
            <input
              placeholder="enter your email"
              className="bg-transparent focus:outline-none flex-1"
            />
            <button className="w-1/4 h-full bg-pink-300 text-white rounded-3xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="  text-center w-11/12 border-t border-gray-300 mt-2 p-1 flex m-auto h-20 ">
        <div className="m-auto flex">
          <h1 className="text-gray-200 ">@Invasion.com.</h1>

          <p className="text-gray-200 pl-1 ">All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
