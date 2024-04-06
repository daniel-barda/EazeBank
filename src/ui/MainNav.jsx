import { NavLink } from "react-router-dom";
import styled from "styled-components";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import TimelineIcon from "@mui/icons-material/Timeline";

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    color: var(--color-slate-100);
    font-size: 1.6rem;
    transition: color 0.8s;
    padding: 1.2rem 2.4rem;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      var(--color-white) 50%
    );
    background-size: 218%;
    transition: all 0.8s;
    text-transform: capitalize;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-black);
    background-position: 100%;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">
            <DashboardIcon />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/movements">
            <TimelineIcon />
            <span>movement details</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/settings">
            <SettingsIcon />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
