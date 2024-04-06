import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 0.5rem;
    `}

  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
      align-items: center;
      gap: 2rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
