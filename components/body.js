import Image from "next/image";

export default function Body() {
  return (
    <main>
      <section className="grid grid-cols-3 w-3/4 m-auto p-1 pl-4 pr-4 h-full gap-2">
        <div className=" flex items-center ">
          <Image
            src="/images/header1.jpg"
            alt="header one"
            width={310}
            height={250}
            className="w-full  shadow-sm rounded-md"
          />
        </div>
        <div className=" flex items-center ">
          {" "}
          <Image
            src="/images/header2.jpg"
            alt="header Two"
            width={350}
            height={250}
            className="w-full rounded-md shadow-sm"
          />
        </div>
        <div className="  flex flex-col text-left items-center  p-3 pt-2">
          <h1 className="text-indigo-500 font-bold text-4xl mt-5">
            We're a results driven team
          </h1>
          <h2 className="text-indigo-300 text-lg p-1">
            With Invasion you can build powerful websites and drive success for
            your business
          </h2>
        </div>
        <div className="  col-span-1 flex items-center ">
          {" "}
          <Image
            src="/images/header3.jpg"
            alt="header one"
            width={400}
            height={300}
            className="w-full rounded-md shadow-sm h-full"
          />
        </div>
        <div className="  col-span-2 flex items-center pl-4 ">
          {" "}
          <Image
            src="/images/header4.jpg"
            alt="header one"
            width={500}
            height={280}
            className="w-full rounded-md shadow-sm"
          />
        </div>
      </section>
      <section className="flex w-full h-4/5 p-3 mt-5 items-center mb-4">
        <div className="m-auto w-2/4 h-full mt-4 text-left">
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
      <section className="w-3/4 m-auto h-3/4  flex items-center">
        <div className="w-2/5 flex flex-col">
          <h3 className="text-indigo-700 p-2 font-bold text-4xl mt-5 tracking-wide">
            we are driven by our values
          </h3>
          <p className="text-indigo-300 text-lg p-1 pt-2  mt-3">
            culture is an important part of how we operate. We stand by six key
            pillars to success.
          </p>
          <div className="w-3/4 h-16 p-2 mt-3">
            <button className="h-full bg-red-50 rounded-3xl p-4 md:p-1 w-24 md:w-full text-red-400 focus:ring-1 focus:ring-red-400  ">
              {" "}
              join us{" "}
            </button>
          </div>
        </div>
        <div></div>
      </section>
    </main>
  );
}
