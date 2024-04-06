import Row from "./Row";
import styled from "styled-components";

import Button from "@mui/material/Button";

const StyledError = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  background-color: #e9ecef;
`;

const Box = styled.div`
  /* Box */
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 9px;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: #495057;
    font-size: 1.7rem;
    letter-spacing: 0.7px;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledError>
      <Box>
        <h1>Something went wrong 🧐</h1>
        <p>{error.message}</p>
        <Button
          variant="contained"
          onClick={resetErrorBoundary}
          sx={{ fontSize: 12 }}
        >
          Try again
        </Button>
      </Box>
    </StyledError>
  );
}

export default ErrorFallback;
