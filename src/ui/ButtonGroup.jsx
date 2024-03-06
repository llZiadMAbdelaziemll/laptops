import styled, { css } from "styled-components";

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.type === "singleProduct" &&
    css`
      margin-left: 13rem;
      margin-top: 5rem;
    `}
  ${(props) => props.type === "normal" && css``}
`;
ButtonGroup.defaultProps = {
  type: "normal",
};
export default ButtonGroup;
