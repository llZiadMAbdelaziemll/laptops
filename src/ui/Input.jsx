import styled, { css } from "styled-components";

const Input = styled.input`
  // border: 1px solid var(--color-grey-300);
  // background-color: var(--color-grey-0);
  // border-radius: var(--border-radius-sm);
  // padding: 0.8rem 1.2rem;
  // box-shadow: var(--shadow-sm);
  ${(props) =>
    props.inputType === "regular" &&
    css`
      width: 410px;
      height: 56.8px;
      justify-content: center;
      color: black !important;
    `}

  border: 1px solid var(--color-grey-300);
  // background-color: var(--color-grey-0);
  background-image: linear-gradient(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
  color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export default Input;
