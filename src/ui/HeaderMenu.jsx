import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLogout from "../features/auth/useLogout";

const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 2.5rem;
    height: 2.5rem;
    transition: fill 0.6s;
  }

  & svg:hover {
    fill: rgba(0, 0, 0, 0.6);
  }
`;

const StyledHeaderMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();
  const { logout } = useLogout();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/settings")}>
          <SettingsIcon />
        </ButtonIcon>
      </li>
      <li>
        <ButtonIcon onClick={logout}>
          <LogoutIcon />
        </ButtonIcon>
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
