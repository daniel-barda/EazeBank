import styled from "styled-components";

const StyledSpinner = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 8px solid #228be6;
  border-right-color: #1864ab;
  animation: 3s infinite loadingSpinner;
  margin: 0 auto;

  @keyframes loadingSpinner {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

function Spinner() {
  return <StyledSpinner>&nbsp;</StyledSpinner>;
}

export default Spinner;
