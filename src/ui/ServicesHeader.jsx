import React from "react";
import styled from "styled-components";
import { useProductMode } from "../context/ProductsMode";

const TitleContainer = styled.p`
  margin: auto;
  text-align: center;
`;

const Description = styled.p`
  font-size: 18px;
  color: #0d8b9f;
  margin-bottom: 5px;
`;
const Title = styled.h3`
  font-size: 26px;
  color: #d2dce1;
`;
const ServicesHeader = () => {
  return (
    <TitleContainer>
      <Description>Market Collections</Description>
      <Title>Featured Products</Title>
    </TitleContainer>
  );
};

export default ServicesHeader;
