import styled from "styled-components";
import tw from "twin.macro";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 90%;
  position: relative;

  ${tw`
     flex
     flex-col
     md:flex-row
  `};
`;
export const HeaderLeft = styled.div`
  width: 70%;
  height: 100%;
  background-image: url(/images/headerA.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(44, 44, 44);
  ${tw`
     
  `};
`;

export const HeaderRight = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(/images/header.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgb(44, 44, 44);
  ${tw`
     
  `}
`;
export const HeaderContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  ${tw`
  flex
  flex-col
  m-auto

  `}
`;

export const HeaderContentTop = styled.div`
  ${tw`
  flex

  text-lg
  text-gray-300
  items-center
  w-full
  h-16
  `}
`;

export const HeaderList = styled.ul`
  ${tw`
    w-2/6
    flex

    justify-around
    items-center
`}
`;

export const HeaderListItem = styled.li`
  ${tw`
   p-3
   pl-1
`}
`;

export const Logo = styled.div`
  ${tw`
   w-auto
   ml-auto
   mr-32
   flex
   items-center
   h-10
`}
`;
export const SignUpButton = styled.button`
  ${tw`
  bg-blue-500
  w-32
  outline-none
  h-10
  text-white
  rounded-md
  focus:outline-none
  focus:ring-1
  focus:ring-blue-200
  ml-auto
`}
`;

export const Image = styled.img`
  ${tw`
w-full
h-full
object-cover
rounded-full
mr-2
`}
`;

export const LogoText = styled.h1`
  letter-spacing: 2px;
  ${tw`
   font-bold
   text-xl
   text-gray-100
`}
`;

export const HeaderContentMiddle = styled.div`
  height: 90%;
  ${tw`
   w-full
   pt-2
  text-white
   pb-2
   p-1
   flex
   flex-col
`};
`;

export const HeaderContentIntro = styled.div`
  width: 500px;
  ${tw`
   flex
   flex-col
   items-center
   p-2
   mt-4
   pr-1
`}
`;

export const HeaderContentsSearch = styled.div`
  ${tw`

`}
`;

export const Title = styled.h1`
  letter-spacing: 1px;
  line-height: 10%;
  ${tw`
 font-semibold
 text-5xl
 text-left
 pl-1
`}
`;

export const SubTitle = styled.h2`
  ${tw`
 text-gray-200
 text-xl
 text-left
 pl-1
 pt-4

`}
`;

export const SearchBar = styled.div`
  width: 83%;
  ${tw`
  bg-white
  h-20
  rounded-md
  ml-2
  p-2
  pl-1
  pr-1
  mt-5
  flex
`}
`;

export const SearchBarFilter = styled.div`
  ${tw`
  w-2/6

ml-1
flex
flex-col
border-r
border-gray-300

`}
`;

export const SearchFilters = styled.div`
  width: 89%;
  ${tw`
  h-full
 rounded-md
  flex
  text-black
  text-xl
`}
`;

export const SearchIcon = styled.button`
  width: 9%;
  ${tw`
   bg-blue-500
    ml-3
    p-2
   h-full
   rounded-lg
   focus:outline-none
   focus:ring-2
   focus:ring-blue-200
  text-3xl
  text-center

`}
`;

export const SearchOption = styled.div`
  ${tw`
 flex

 justify-between
 items-center

`}
`;

export const SearchOptionvalue = styled.h4`
  ${tw`
    text-lg
    text-gray-400
 `}
`;
