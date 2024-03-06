import React from "react";
import styled, { keyframes } from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { FaHeart } from "react-icons/fa";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import { useAddFavorite } from "../features/laptops/useAddFavorite";
import { useAddToCart } from "../features/laptops/useAddToCart";
import { useDeleteCartLaptop } from "../features/laptops/useDeleteCartLaptop";
import { useLaptops } from "../features/laptops/useLaptops";
import { useFavorites } from "../features/laptops/useFavorites";
import { useNavigate } from "react-router-dom/dist";
import Spinner from "./Spinner";

const ShowData = keyframes`
50% {
  transform: translateY(-14rem);
}
100% {
  transform: translateY(-10rem);
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
  width: 280px;
  background-color: var(--color-secondary);
  padding: 1.5rem 2rem;
  color: var(--color-primary);
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, 0.15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 1s 1s;
`;
const StyledCard = styled.div`
  // background-color: var(--color-secondary);
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 300px;
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
  width: 90%;
  height: 200px;
  border-radius: 1.5rem;
  text-align: center;
  cursor: pointer;
`;

const CardDescription = styled.span`
  display: block;
  font-size: var(--small-font-size);
  // margin-bottom: 2rem;
  color: var(--color-price);
`;

const CardH2 = styled.h2`
  font-size: 17px;
  font-weight: 500;
  color: var(--title-color);
  margin-bottom: 0.75rem;
`;

const Card = ({ productMode, laptop, lapIndex }) => {
  const navigate = useNavigate();
  const { isCreating, addFavoriteLaptop } = useAddFavorite();
  const { isCreating: isCreating2, addCartLaptop } = useAddToCart();
  const { isDeleting, deleteCartLaptop } = useDeleteCartLaptop();

  const { laptops: favorites, isLoading: isLoading2 } = useFavorites();

  const { id } = laptop;
  const isFavorite = favorites?.map((laptop) => laptop?.id).includes(id);
  // const FavoriteLaptops = favorites?.filter((laptop) => laptop?.id === id);
  console.log(isFavorite);
  function addToFavorites() {
    addFavoriteLaptop({ ...laptop });
  }

  function addToCart() {
    addCartLaptop({ ...laptop });
  }
  if (isCreating || isCreating2 || isDeleting || isLoading2) return <Spinner />;
  return (
    <StyledCard>
      <Img
        src={laptop?.image}
        onClick={
          productMode === "home" ? () => navigate(`/home/${laptop?.id}`) : null
        }
        alt="image"
      />

      <CardData>
        <CardH2>{laptop?.name}</CardH2>
        {productMode === "home" && (
          <CardDescription>${laptop?.price}</CardDescription>
        )}

        <ButtonGroup>
          {productMode === "home" ? (
            <Button onClick={addToCart} size="small">
              Add To Cart
            </Button>
          ) : (
            <Button onClick={() => deleteCartLaptop(id)} size="small">
              Remove From Cart
            </Button>
          )}
          {productMode === "home" ? (
            <ButtonIcon>
              <FaHeart
                color={`${
                  isFavorite ? "var(--color-love)" : "var(--color-notLove)"
                }`}
                onClick={addToFavorites}
              />
            </ButtonIcon>
          ) : (
            <CardDescription>${laptop?.price}</CardDescription>
          )}
        </ButtonGroup>
      </CardData>
    </StyledCard>
  );
};

export default Card;
