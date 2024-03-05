import styled, { css } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: 40%;
  ${(props) =>
    props.imageType === "header" &&
    css`
      width: 100%;
      height: 4rem;
    `}
`;

function Logo({ type }) {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode
    ? type !== "login"
      ? "/light-logo.png"
      : "/logo.png"
    : "/logo.png";

  return (
    <StyledLogo>
      <Img
        imageType={`${type === "header" && "header"}`}
        src={src}
        alt="Logo"
      />
    </StyledLogo>
  );
}

export default Logo;
