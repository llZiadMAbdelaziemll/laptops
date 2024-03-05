import styled, { css } from "styled-components";

const types = {
  hero: css`
    display: flex;
    align-items: center;
    gap: 0.8rem;
  `,
};
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.8rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};
const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: #0d8b9f;
    color: #0e181a;
    &:hover {
      background-color: #0d8b9f;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: #0e1011;
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: transparent;
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  register: css`
    color: var(--color-brand-50);
    background-color: #0e9ab1;

    &:hover {
      background-color: #0d8b9f;
    }
    width: 316px;
  `,
  login: css`
    color: var(--color-brand-50);
    background-color: #0e9ab1;

    &:hover {
      background-color: #0d8b9f;
    }
    width: 410px;
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
  ${(props) => types[props.type]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
