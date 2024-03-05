import React from "react";
import styled from "styled-components";
import ServicesHeader from "./ServicesHeader";
import Products from "./Products";
import { useProductMode } from "../context/ProductsMode";

const StyledSection = styled.div`
  background-color: var(--color-primary);
`;
const ServicesContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 80px 0;
`;
const Services = () => {
  const { productMode } = useProductMode();

  return (
    <StyledSection>
      <ServicesContainer>
        {productMode === "home" ?? <ServicesHeader />}
        <Products />
      </ServicesContainer>
    </StyledSection>
  );
};

export default Services;
