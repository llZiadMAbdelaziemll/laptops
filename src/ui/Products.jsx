import React from "react";
import styled from "styled-components";
import Search from "./Search";
import ProductCollection from "./ProductCollection";

const StyledProductsLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;
const Products = () => {
  return (
    <StyledProductsLayout>
      <Search />
      <ProductCollection />
    </StyledProductsLayout>
  );
};

export default Products;
