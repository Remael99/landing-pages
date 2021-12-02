import React from "react";
import Houses from "./Houses.js";
import {
  BodyWrapper,
  BodyContents,
  BodyIntro,
  BodyTitle,
  BodySubTitle,
  BodyContent,
  BodyFilter,
  Category,
} from "./Style.js";

const Body = () => {
  const categories = [
    "Popular",
    "All Categories",
    "Minimalist",
    "Modern",
    "Classic",
  ];
  return (
    <BodyWrapper>
      <BodyContents>
        <BodyIntro>
          <BodyTitle>Our property</BodyTitle>
          <BodySubTitle>
            We provide various types of properties with different categories
          </BodySubTitle>
        </BodyIntro>
        <BodyContent>
          <BodyFilter>
            {categories.map((category, index) => (
              <Category key={index}>{category}</Category>
            ))}
          </BodyFilter>

          <Houses />
        </BodyContent>
      </BodyContents>
    </BodyWrapper>
  );
};

export default Body;
