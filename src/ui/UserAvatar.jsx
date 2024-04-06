import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

import { useUser } from "../features/auth/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  & span {
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

function UserAvatar() {
  const { user } = useUser();

  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar alt={`img avatar ${fullName}`} src={avatar} />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
