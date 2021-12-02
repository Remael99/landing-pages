import React from "react";
import {
  HouseWrapper,
  House,
  HouseImage,
  HouseContent,
  HouseContentName,
  HouseContentLocation,
  HouseContentPrice,
} from "./Style";
import ImageA from "./images/estateA.jpg";
import ImageB from "./images/estateB.jpg";
import ImageC from "./images/estateC.jpg";
import ImageD from "./images/estateD.jpg";

const Houses = () => {
  const exampleHouses = [
    {
      id: 1,
      Image: `${ImageA}`,
      Name: "Chitaland Tower",
      Location: "Nairobi",
      Price: "Ksh 5,000,000",
      type: "Popular",
    },
    {
      id: 2,
      Image: `${ImageB}`,
      Name: "Tamansari Urbano",
      Location: "Nakuru",
      Price: "Ksh 3,000,000",
      type: "Minimalist",
    },
    {
      id: 3,
      Image: `${ImageC}`,
      Name: "Borneo paradiso",
      Location: "Narok",
      Price: "Ksh 2,000,000",
      type: "Modern",
    },
    {
      id: 4,
      Image: `${ImageD}`,
      Name: "D'Java residence",
      Location: "Limuru",
      Price: "Ksh 1,000,000",
      type: "Classic",
    },
  ];

  return (
    <HouseWrapper>
      {exampleHouses.map((house) => (
        <House>
          <HouseImage src={house.Image} alt={house.Name} />
          <HouseContent>
            <HouseContentName>{house.Name}</HouseContentName>
            <HouseContentLocation>{house.Location}</HouseContentLocation>
            <HouseContentPrice>{house.Price}</HouseContentPrice>
          </HouseContent>
        </House>
      ))}
    </HouseWrapper>
  );
};

export default Houses;
