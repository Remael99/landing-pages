import styled from "styled-components";
import tw from "twin.macro";

export const BodyWrapper = styled.section`
  background-image: url(/images/bodyA.jpg);
  background-position: cover;
  background-repeat: no-repeat;
  ${tw`
    w-full
   h-full
`}
`;

export const BodyContents = styled.div`
  width: 80%;
  ${tw`
    flex
    flex-col
    h-full
    m-auto
   
    p-2
    `}
`;

export const BodyIntro = styled.div`
  width: 80%;
  height: fit-content;
  ${tw`
    flex
    flex-col
    items-center
    text-left
    m-auto
    mt-3
    p-2
 
    `}
`;

export const BodyTitle = styled.h1`
  ${tw`
      text-2xl
      font-semibold
      pb-2
    `}
`;

export const BodySubTitle = styled.h3`
  ${tw`
  text-xl
  text-gray-400
  
    `}
`;

export const BodyContent = styled.div`
  ${tw`
    flex
    flex-col
    p-2

    h-full
    `}
`;

export const BodyFilter = styled.ul`
  width: 70%;
  cursor: pointer;
  ${tw`
    flex
     mr-auto
     ml-auto
   items-center
   justify-between
    `}
`;

export const Category = styled.li`
  border-bottom: ${(props) => (props.borderBottom ? "blue" : "black")};
  ${tw`
     pl-2
     pr-2
     text-lg
     text-gray-400
  `}
`;

export const HouseWrapper = styled.div`
  ${tw`
   flex
   w-full
   h-full
  
   p-4
    `}
`;

export const House = styled.div`
  width: 270px;
  height: 290px;

  ${tw`
 flex
 flex-col

 p-1
 bg-white
 shadow-xl
 rounded-md
 ml-3
  `}
`;

export const HouseImage = styled.img`
  height: 55%;
  ${tw`
   
   w-full
   object-cover
   rounded-lg
   shadow-lg
   border
   border-gray-200
 
  `}
`;

export const HouseContent = styled.div`
  ${tw`
flex
flex-col
w-full
text-left
pt-2
  `}
`;

export const HouseContentName = styled.h1`
  ${tw`
text-black
text-xl
  `}
`;

export const HouseContentLocation = styled.h4`
  ${tw`
text-gray-400
text-lg
  `}
`;

export const HouseContentPrice = styled.h1`
  ${tw`
text-blue-500
text-xl

mt-6
  `}
`;
