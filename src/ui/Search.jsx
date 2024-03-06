import React from "react";
import styled from "styled-components";
import { useProductMode } from "../context/ProductsMode";
import { useFavorites } from "../features/laptops/useFavorites";
import { useCartLaptops } from "../features/laptops/useCartLaptops";
import Row from "./Row";
import Button from "./Button";

const StyledSearch = styled.div`
  background-color: var(--color-secondary);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.3rem;
  align-items: center;
  justify-content: flex-end;
`;

const Span = styled.span`
  color: var(--color-text);
  font-size: 18px;
`;

const H3 = styled.h3`
  color: var(--color-primary);
  font-size: 20px;
`;
const Search = () => {
  const { productMode } = useProductMode();
  const { laptops: favorites, isLoading: isLoading2 } = useFavorites();
  const { laptops: cartLaptops, isLoading: isLoading3 } = useCartLaptops();

  const totalPrice = cartLaptops?.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  console.log(totalPrice);
  return (
    <StyledSearch>
      {productMode === "favorites" && (
        <H3>
          Total : <Span>{favorites?.length}</Span>
        </H3>
      )}
      {productMode === "cart" && (
        <>
          <H3>
            Total Products: <Span>{cartLaptops?.length}</Span>
          </H3>

          <H3>
            Total Price: <Span>${totalPrice}</Span>
          </H3>
        </>
      )}
    </StyledSearch>
  );
};

export default Search;
