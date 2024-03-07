import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.type === "account" &&
    css`
      background-color: var(--color-secondary);
      color: var(--color-primary);
    `}

  ${(props) =>
    props.type === "updates" &&
    css`
      background-color: var(--color-secondary);
      color: var(--color-primary);
    `}
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
  line-height: 1.4;
  padding-left: 13rem;
`;

export default Heading;
