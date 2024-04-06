import StatsInfo from "./StatsInfo";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { formatCurrency } from "../../utils/helpers";

function Stats({ accountNumber, currentBalance }) {
  return (
    <>
      <StatsInfo
        icon={<AttachMoneyIcon />}
        title="Total Balance"
        value={formatCurrency(currentBalance)}
      />
      <StatsInfo
        icon={<PersonOutlineIcon />}
        title="Account Number"
        value={accountNumber}
      />
    </>
  );
}

export default Stats;
