import React from "react";
import Input from "./Input";
import styled from "styled-components";

const Label = styled.label`
  display: flex;
  gap: 1rem;
`;
const Choice = ({ topic }) => {
  return (
    <Label>
      <Input type="radio" />
      <span>{topic}</span>
    </Label>
  );
};

export default Choice;
