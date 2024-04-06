import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Divider from "@mui/material/Divider";
import AddIcon from "@mui/icons-material/Add";
import SwipeDownIcon from "@mui/icons-material/SwipeDown";

import MoveUpIcon from "@mui/icons-material/MoveUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ModalComponent from "./Modal";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function MovementMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [action, setAction] = React.useState("");

  const open = Boolean(anchorEl);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = (e) => {
    const typeAction = e.target.getAttribute("typeaction");
    setOpenModal(true);
    setAnchorEl(null);
    setAction(typeAction);
  };

  const handleClose = () => setOpenModal(false);

  return (
    <>
      <ModalComponent
        action={action}
        open={openModal}
        handleClose={handleClose}
      />

      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? "demo-customized-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="contained"
          disableElevation
          onClick={openMenu}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{
            bgcolor: "black",
            fontSize: 12,
            fontWeight: "600",
          }}
        >
          Action
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={closeMenu}
        >
          <MenuItem
            typeaction="deposit"
            onClick={handleOpenModal}
            disableRipple
          >
            <AddIcon />
            Deposit
          </MenuItem>
          <MenuItem
            typeaction="withdrawal"
            onClick={handleOpenModal}
            disableRipple
          >
            <SwipeDownIcon />
            withdrawal
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            typeaction="transfer"
            onClick={handleOpenModal}
            disableRipple
          >
            <MoveUpIcon />
            Transfer to another account
          </MenuItem>
        </StyledMenu>
      </div>
    </>
  );
}
