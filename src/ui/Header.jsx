import styled from "styled-components";
import UserAvatar from "./UserAvatar";
import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  background-color: #dfe0e1;
  padding: 1.4rem 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 1.2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
