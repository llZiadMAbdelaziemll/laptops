import React from "react";
import styled from "styled-components";
import Categories from "./Categories";
import Price from "./Price";
import Colors from "./Colors";

const StyledSidebar = styled.aside`
  background-color: #0e9ab1;
  padding: 6rem 5rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  height: 100vh;
`;
const SideFiltersBar = () => {
  return (
    <StyledSidebar>
      <Categories />
      <Price />
      <Colors />
    </StyledSidebar>
  );
};

export default SideFiltersBar;
