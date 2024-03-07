import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      padding-bottom: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      /* Box */
      // background-color: var(--color-primary);
      background-color: #171b1c;
      // border: 1px solid var(--color-grey-100);
      // border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "account" &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;

      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};
export default Form;
