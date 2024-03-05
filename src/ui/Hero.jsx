import React from "react";
import styled from "styled-components";
import { FaFire } from "react-icons/fa";
import ButtonIcon from "./ButtonIcon";

const StyledHero = styled.div`
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 1rem;
`;
const Fire = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;
const Span = styled.span`
  color: #0e9ab1;
`;

const H2 = styled.h2`
  color: #d2dce1;
  font-weight: 500;
  font-size: 25px;
`;
const Hero = () => {
  return (
    <StyledHero>
      <Fire>
        <ButtonIcon>
          <FaFire color="#0e9ab1" />
        </ButtonIcon>
        <Span>Hot Deal In This Week</Span>
      </Fire>
      <H2>
        Harness the Power of Innovation: Unleashing Cutting-Edge Laptops for
        Limitless Possibilities
      </H2>
    </StyledHero>
  );
};

export default Hero;
