import styled from "styled-components";
import Spinner from "./Spinner";

const StyledSpinnerFullPage = styled.div`
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SpinnerFullPage() {
  return (
    <StyledSpinnerFullPage>
      <Spinner />
    </StyledSpinnerFullPage>
  );
}

export default SpinnerFullPage;
