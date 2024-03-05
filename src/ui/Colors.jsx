import React from "react";
import Choice from "./Choice";
import { H3, StyledChoice, StyledFilter } from "./StyledFilter";
const Colors = () => {
  return (
    <StyledFilter>
      <H3>Colors</H3>
      <StyledChoice>
        <Choice topic="Black" />
        <Choice topic="White" />
        <Choice topic="Grey" />
      </StyledChoice>
    </StyledFilter>
  );
};

export default Colors;
