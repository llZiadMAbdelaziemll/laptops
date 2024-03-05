import React from "react";
import styled, { keyframes } from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { FaRegHeart } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { useDeleteFavorite } from "../features/laptops/useDeleteFavorite";
import { useAddToCart } from "../features/laptops/useAddToCart";

const ShowData = keyframes`
50% {
  transform: translateY(-18rem);
}
100% {
  transform: translateY(-12rem);
}
`;

const RemoveOverflow = keyframes`
to {
  overflow: initial;
}
`;

const RemoveData = keyframes`
0% {
  transform: translateY(-10rem);
}
50% {
  transform: translateY(-14rem);
}
100% {
  transform: translateY(.5rem);
}
`;

const ShowOverflow = keyframes`
0% {
  overflow: initial;
  pointer-events: none;
}
50% {
  overflow: hidden;
}
`;

const CardData = styled.div`
  width: 400px;
  background-color: var(--color-secondary);
  padding: 1.5rem 2rem;
  color: var(--color-primary);
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.15);
  border-radius: 1rem;
  position: absolute;
  bottom: 0rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
  text-align: start;
`;
const StyledCard = styled.div`
  // background-color: #0e9ab1;
  position: relative;
  overflow: hidden;
  width: 40%;
  height: 600px;
  text-align: center;
  &:hover {
    animation: ${RemoveOverflow} 2s forwards;
    ${CardData} {
      animation: ${ShowData} 1s forwards;
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  &:not(:hover) {
    animation: ${ShowOverflow} 2s forwards;
    ${CardData} {
      animation: ${RemoveData} 1s forwards;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 1.5rem;
  text-align: center;
`;

const CardDescription = styled.span`
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: 2rem;
`;

const CardH2 = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: var(--title-color);
  margin-bottom: 0.75rem;
`;

const FavoriteCard = ({ laptop, lapIndex }) => {
  const { isDeleting, deleteFavorite } = useDeleteFavorite();
  const { isCreating: isCreating2, addCartLaptop } = useAddToCart();

  const { id } = laptop;

  function addToCart() {
    addCartLaptop({ ...laptop });
  }
  return (
    <StyledCard>
      <Img src={laptop?.image} alt="image" />

      <CardData>
        <CardH2>{laptop?.name}</CardH2>
        <CardDescription>{laptop?.description}</CardDescription>
        {/* <CardDescription>{laptop?.color}</CardDescription>
        <CardDescription>
          {laptop?.company}({laptop?.category})
        </CardDescription>
        <CardDescription></CardDescription>
        <CardDescription>${laptop?.price}</CardDescription> */}

        <ButtonGroup>
          <Button onClick={addToCart} size="small">
            Add To Cart
          </Button>
          <Button onClick={() => deleteFavorite(id)} size="small">
            Remove
          </Button>
        </ButtonGroup>
      </CardData>
    </StyledCard>
  );
};

export default FavoriteCard;
