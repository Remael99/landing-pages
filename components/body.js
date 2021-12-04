import Image from "next/image";

export default function Body() {
  return (
    <main>
      <section className=" flex flex-col mt-8 md:grid md:grid-cols-2 lg:grid-cols-3 w-full lg:w-3/4 lg:h-1/2 m-auto p-1 pl-4 pr-4 h-full gap-2">
        <div className="flex items-center w-full ">
          <Image
            src="/images/header1.jpg"
            alt="header one"
            width={1000}
            height={700}
            className="w-full  shadow-sm rounded-md"
          />
        </div>
        <div className=" hidden  md:flex md:items-center ">
          {" "}
          <Image
            src="/images/header2.jpg"
            alt="header Two"
            width={1000}
            height={700}
            className="w-full rounded-md shadow-sm"
          />
        </div>
        <div className="  p-1 w-full mb-1 md:flex md:flex-col text-left md:items-center  md:p-3 md:pt-2">
          <h1 className="text-indigo-500 font-bold text-4xl mt-5">
            We're a results driven team
          </h1>
          <h2 className="text-indigo-300 text-lg p-1">
            With Invasion you can build powerful websites and drive success for
            your business
          </h2>
        </div>
        <div className=" w-full  md:col-span-1 md:flex md:items-center ">
          {" "}
          <Image
            src="/images/header3.jpg"
            alt="header one"
            width={1000}
            height={700}
            className="w-full rounded-md shadow-sm h-full"
          />
        </div>
        <div className=" hidden col-span-2 md:hidden lg:flex md:items-center  pl-4 ">
          {" "}
          <Image
            src="/images/header4.jpg"
            alt="header one"
            width={1000}
            height={700}
            className="w-full rounded-md shadow-sm"
          />
        </div>
      </section>
      <section className="  w-full h-4/5 p-1 md:mb-4 md:mt-4 ">
        <div className="m-auto w-full p-2 md:w-3/4 lg:2/4 md:p-0 h-full   md:text-left">
          <h3 className="text-indigo-700 font-bold text-4xl mt-5 tracking-wide">
            It is our mission to remove barriers to understanding your users
            behavior
          </h3>
          <p className="text-indigo-300 text-lg p-1 pt-2">
            culture is an important part of how we operate. We stand by six key
            pillars to success. This ensures we are all moving in the same
            direction , and encourage the inclusive, diverse business we
            continue to build
          </p>
        </div>
      </section>
      <section className=" w-full  md:w-3/4 m-auto h-3/4  flex items-center mb-4">
        <div className="w-full p-2 md:w-3/4 h-auto flex flex-col">
          <h3 className="text-indigo-700  md:p-2 font-bold text-4xl mt-2 lg:mt-5 tracking-wide">
            we are driven by our values
          </h3>
          <p className="text-indigo-300 text-lg  pt-2  lg:mt-3">
            culture is an important part of how we operate. We stand by six key
            pillars to success.
          </p>
          <div className="w-full p-1 mt-3">
            <button className="h-full bg-red-50 rounded-3xl p-4 md:p-1 w-24 md:w-32 md:h-full text-red-400 focus:ring-1 focus:ring-red-400  ">
              {" "}
              join us{" "}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
