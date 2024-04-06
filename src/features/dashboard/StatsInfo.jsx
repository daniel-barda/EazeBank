import styled from "styled-components";
import useClipBoard from "../../hooks/useClipBoard";

const StyledStat = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.6rem;
  border-radius: 9px;
  background-color: #fff;
  box-shadow: 1rem 2rem 4rem rgba(0, 0, 0, 0.2);
  position: relative;

  display: grid;
  grid-template-columns: 6.4rem 1fr;
  grid-template-rows: auto auto;
  justify-content: space-between;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  background-color: #228be6;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1 / span 2;

  & svg {
    width: 3rem;
    height: 3rem;
    color: #fff;
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
`;

const Value = styled.p`
  font-size: 2.4rem;
  line-height: 1;
  font-weight: 500;
`;

const Message = styled.span`
  font-size: 1.2rem;
  position: absolute;
  right: 2rem;
  top: 1rem;
`;

function StatsInfo({ icon, title, value }) {
  const { clipBoardEL, handleCopyClick, isCopied } = useClipBoard();

  return (
    <StyledStat>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Value ref={clipBoardEL} onClick={handleCopyClick}>
        {value}
      </Value>
      {isCopied && <Message>Content has been copied</Message>}
    </StyledStat>
  );
}

export default StatsInfo;
