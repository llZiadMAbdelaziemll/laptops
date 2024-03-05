import React from "react";
import Choice from "./Choice";
import { H3, StyledChoice, StyledFilter } from "./StyledFilter";

const Price = () => {
  return (
    <StyledFilter>
      <H3>Price</H3>
      <StyledChoice>
        <Choice topic="All" />
        <Choice topic="Apple" />
        <Choice topic="Dell" />
        <Choice topic="Lenovo" />
        <Choice topic="Hp" />
      </StyledChoice>
    </StyledFilter>
  );
};

export default Price;
