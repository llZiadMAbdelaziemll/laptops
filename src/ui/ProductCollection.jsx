import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useLaptops } from "../features/laptops/useLaptops";
import { useFavorites } from "../features/laptops/useFavorites";
import Spinner from "./Spinner";

import { useProductMode } from "../context/ProductsMode";
import FavoriteCard from "./FavoriteCard";
import { useCartLaptops } from "../features/laptops/useCartLaptops";

const Section = styled.section`
  background-color: var(--color-primary);
  padding: 14rem 4.8rem 10rem;
  border: 1px solid var(--color-secondary);
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
const ProductCollection = () => {
  const { laptops, isLoading } = useLaptops();
  const { laptops: favorites, isLoading: isLoading2 } = useFavorites();
  const { laptops: cartLaptops, isLoading: isLoading3 } = useCartLaptops();
  const { productMode } = useProductMode();
  if (isLoading || isLoading2 || isLoading3) return <Spinner />;
  return (
    <Section>
      <Container>
        {productMode === "home"
          ? laptops?.map((laptop, index) => (
              <Card
                productMode={productMode}
                key={laptop?.id}
                laptop={laptop}
                lapIndex={laptop?.id}
              />
            ))
          : productMode === "favorites"
          ? favorites?.map((laptop, index) => (
              <FavoriteCard
                key={laptop?.id}
                laptop={laptop}
                lapIndex={laptop?.id}
              />
            ))
          : cartLaptops?.map((laptop, index) => (
              <Card
                productMode={productMode}
                key={laptop?.id}
                laptop={laptop}
                lapIndex={laptop?.id}
              />
            ))}
      </Container>
    </Section>
  );
};

export default ProductCollection;
