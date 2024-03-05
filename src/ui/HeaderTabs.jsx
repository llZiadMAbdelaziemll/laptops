import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { useProductMode } from "../context/ProductsMode";

const StyledHeaderTabs = styled.ul`
  display: flex;
  gap: 2.5rem;
`;
const Li = styled.li`
  cursor: pointer;
  color: var(--color-primary);
  transition: 0.5s;
  &:hover {
    color: white;
  }
`;
function HeaderTabs() {
  const navigate = useNavigate();
  const { setProductMode } = useProductMode();

  return (
    <StyledHeaderTabs>
      {/* <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li> */}
      <Li
        onClick={() => {
          setProductMode("home");
          navigate("home");
        }}
      >
        Home
      </Li>

      <Li
        onClick={() => {
          setProductMode("favorites");

          navigate("favorites");
        }}
      >
        favorites
      </Li>
    </StyledHeaderTabs>
  );
}

export default HeaderTabs;
