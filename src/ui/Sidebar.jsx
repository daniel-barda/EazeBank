import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  padding: 1.5rem 2.5rem;
  background-color: var(--color-cyan-950);
  color: var(--color-white);
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
