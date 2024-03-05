import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import HeaderTabs from "./HeaderTabs";
import Logo from "./Logo";
// #0e181a #035d74 #8ea7b3
const StyledHeader = styled.header`
  // background-color: var(--color-grey-0);
  background-color: var(--color-secondary);
  padding: 1rem 7rem 1rem 10rem;
  // border-bottom: 1px solid var(--color-grey-100);
  // border-bottom: 1px solid #0e181a;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
`;
const StyledHeaderLinks = styled.div`
  padding: 1.2rem 7rem 1.2rem 10rem;

  display: flex;
  gap: 10rem;
  align-items: center;
  justify-content: flex-end;
`;
function Header() {
  return (
    <StyledHeader>
      <Logo type="header" />
      <StyledHeaderLinks>
        <HeaderTabs />

        <HeaderMenu />
      </StyledHeaderLinks>
    </StyledHeader>
  );
}

export default Header;
