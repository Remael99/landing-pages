import React from "react";
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  HeaderContent,
  HeaderContentTop,
  HeaderList,
  Logo,
  SignUpButton,
  Image,
  HeaderListItem,
  LogoText,
  HeaderContentMiddle,
  HeaderContentIntro,
  HeaderContentsSearch,
  Title,
  SubTitle,
  SearchBar,
  SearchBarFilter,
  SearchFilters,
  SearchIcon,
  SearchOption,
  SearchOptionvalue,
} from "./style.js";
import logo from "./logo.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {
  const exampleSearchOptions = [
    {
      option: "Location",
      value: "Nakuru",
    },
    {
      option: "Type",
      value: "minimalist",
    },
    {
      option: "Price Range",
      value: "1,000,000 - 2,000,000",
    },
  ];
  return (
    <HeaderWrapper>
      <HeaderLeft></HeaderLeft>
      <HeaderRight></HeaderRight>
      <HeaderContent>
        <HeaderContentTop>
          <HeaderList>
            <HeaderListItem>Home</HeaderListItem>
            <HeaderListItem>Pricing</HeaderListItem>
            <HeaderListItem>Contact</HeaderListItem>
          </HeaderList>
          <Logo>
            <Image src={logo} alt="logo" />
            <LogoText>INVASION</LogoText>
          </Logo>
          <SignUpButton>Get started</SignUpButton>
        </HeaderContentTop>
        <HeaderContentMiddle>
          <HeaderContentIntro>
            <Title>
              Easy way to find{" "}
              <strong style={{ color: "gray" }}>Property</strong> according to
              your choice.
            </Title>
            <SubTitle>
              We provide various property models for you at affordable prices
            </SubTitle>
          </HeaderContentIntro>
          <HeaderContentsSearch>
            <SearchBar>
              <SearchFilters>
                {exampleSearchOptions.map((fil) => (
                  <SearchBarFilter>
                    <SearchOption>
                      <SearchOptionvalue>{fil.option}</SearchOptionvalue>
                      <MdOutlineArrowDropDown
                        style={{
                          color: "gray",
                          fontSize: "larger",
                          textAlign: "center",
                        }}
                      />
                    </SearchOption>
                    <h4>{fil.value}</h4>
                  </SearchBarFilter>
                ))}
              </SearchFilters>
              <SearchIcon>
                <BsSearch style={{ fontSize: "larger", margin: "auto" }} />
              </SearchIcon>
            </SearchBar>
          </HeaderContentsSearch>
        </HeaderContentMiddle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
