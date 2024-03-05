import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser, HiOutlineShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import UserAvatar from "../features/authentication/UserAvatar";
import { useCartLaptops } from "../features/laptops/useCartLaptops";
import { useProductMode } from "../context/ProductsMode";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
const CartHint = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: -70px;
  min-width: 200px !important;
  color: var(--color-primary);
  background-color: var(--color-secondary);
  border-radius: 5px;
  padding: 1.2rem 1.6rem;
  font-size: 2rem;
  text-align: center;
  transition: 0.5s;
  box-shadow: var(--shadow);
`;

const P = styled.p`
  color: var(--color-primary);
  padding: 0 7px;
  font-size: 16px;
  text-align: center;
  &:not(:last-child) {
    border-bottom: 1px solid var(--color-primary);
  }
`;
const CartIcon = styled.li`
  position: relative;

  &:hover ${CartHint} {
    visibility: visible;
    opacity: 1;
  }
`;
const CartLength = styled.span`
  position: absolute;
  right: 0;
  background-color: var(--color-primary);
  color: var(--color-text);
  border-radius: 50%;
  padding: 0.1rem 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { isLoading, laptops } = useCartLaptops();
  const { setProductMode } = useProductMode();
  return (
    <StyledHeaderMenu>
      <li>
        <UserAvatar />
      </li>
      <CartIcon>
        <ButtonIcon
          onClick={() => {
            setProductMode("cart");
            navigate("/cart");
          }}
        >
          <HiOutlineShoppingCart color={"var(--color-primary)"} />
        </ButtonIcon>
        <CartLength>{laptops?.length}</CartLength>

        {laptops?.length > 0 && (
          <CartHint>
            {laptops?.map((laptop) => (
              <P>{laptop?.name}</P>
            ))}
          </CartHint>
        )}
      </CartIcon>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
