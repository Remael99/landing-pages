import Image from "next/image";

const LocationData = [
  {
    image: "/images/statue-of-liberty.png",
    name: "United States",
    address: "12/123-125 Macquarie",
    subAddress: "street,austin, TX 798750",
  },
  {
    image: "/images/kenya.png",
    name: "Kenya",
    address: "12/123-125 Nairobi",
    subAddress: "street,ruaka, TX 798750",
    mainOffice: "main Office",
  },
  {
    image: "/images/kangaroo.png",
    name: "United Kingdom",
    address: "165 Rowntree street",
    subAddress: "street,ruaka, TX 798750",
  },
];

export default function Location() {
  return (
    <section className=" w-full p-4 md:w-3/4 h-full md:h-screen m-auto flex flex-col items-center md:p-2">
      <h1>we are global</h1>
      <div className=" w-full h-full  md:h-3/5 flex flex-col md:flex-row items-center ">
        {LocationData.map((data, index) => (
          <div
            key={index}
            className=" w-full  mt-2 md:mt-0 md:w-1/3 md:p-2 shadow-sm bg-white h-full ml-2 flex flex-col"
          >
            <Image
              src={data.image}
              alt={data.name}
              width={1000}
              height={1000}
              className="w-full"
            />
            <div className="flex items-center flex-col">
              <h1 className="text-lg font-semibold text-purple-700 pb-2">
                {" "}
                {data.name}{" "}
              </h1>
              <h3 className=" text-gray-400"> {data.address} </h3>
              <h5 className=" text-gray-400"> {data.subAddress} </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
