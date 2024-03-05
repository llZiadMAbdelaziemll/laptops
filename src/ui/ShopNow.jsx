import React from "react";
import styled from "styled-components";
import Button from "./Button";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Reviews from "./Reviews";

const StyledShopNow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
`;
const ShopNow = () => {
  return (
    <StyledShopNow>
      <Button size="large" type="hero">
        <ButtonIcon>
          <HiOutlineShoppingCart color={"#0e181a"} />
        </ButtonIcon>
        Shop Now
      </Button>

      <Reviews />
    </StyledShopNow>
  );
};

export default ShopNow;
