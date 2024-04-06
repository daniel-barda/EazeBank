import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { createPortal } from "react-dom";
import DepositForm from "../features/movements/DepositForm";
import WithdrawalForm from "../features/movements/WithdrawalForm";
import TransferForm from "../features/movements/TransferForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  boxShadow: 24,
  p: 4,
  backgroundColor: "#fff",
};

export default function ModalComponent({ action, open, handleClose }) {
  return createPortal(
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="keep-mounted-modal-title"
            variant="h3"
            component="h2"
            sx={{ mb: 2 }}
          >
            Action you are about to perform is {action}
          </Typography>

          {action === "deposit" && (
            <DepositForm action={action} onClose={handleClose} />
          )}

          {action === "withdrawal" && (
            <WithdrawalForm action={action} onClose={handleClose} />
          )}

          {action === "transfer" && (
            <TransferForm action={action} onClose={handleClose} />
          )}
        </Box>
      </Modal>
    </div>,
    document.body
  );
}
