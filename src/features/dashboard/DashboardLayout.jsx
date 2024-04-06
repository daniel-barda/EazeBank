import styled from "styled-components";
import Stats from "./Stats";

import Spinner from "../../ui/Spinner";
import { useGetUserDetails } from "../auth/useGetUserDetails";
import TransactionChart from "./TransactionChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  column-gap: 1rem;
  row-gap: 8rem;
`;

function DashboardLayout() {
  const { user, isLoading } = useGetUserDetails();

  if (isLoading) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        accountNumber={user.user_id}
        currentBalance={user.current_balance}
      />

      <TransactionChart />
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
