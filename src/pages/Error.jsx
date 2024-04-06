import styled from "styled-components";
import ErrorSvg from "../../public/Error.svg";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledError = styled.div`
  background-color: #f1f3f5;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 30rem;
`;

function Error() {
  const navigate = useNavigate();

  return (
    <StyledError>
      <Img src={ErrorSvg} alt="Error img" />
      <Button
        variant="contained"
        sx={{ fontSize: 12 }}
        onClick={() => navigate(-1)}
      >
        go back
      </Button>
    </StyledError>
  );
}

export default Error;
