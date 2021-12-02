import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
`;

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Container;
