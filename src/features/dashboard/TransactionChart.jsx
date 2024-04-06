import styled from "styled-components";
import Empty from "../../ui/Empty";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import useLastMovmentsUser from "../movements/useGetAllMovementsUser";
import Spinner from "../../ui/Spinner";

const StyledTransactionChart = styled.div`
  grid-column: 1/ -1;
`;

export default function TransactionChart() {
  const { data: movements, isLoading } = useLastMovmentsUser();

  if (isLoading) return <Spinner />;
  if (!isLoading && !movements) return <Empty resourceName="transactions" />;

  const transactionSummary = movements.reduce((summary, transaction) => {
    const { type } = transaction;

    if (!summary[type]) summary[type] = 1;
    else summary[type]++;

    return summary;
  }, {});

  // Object.keys return array
  const data = Object.keys(transactionSummary).map((type) => ({
    name: type.at(0).toUpperCase() + type.slice(1), // capitalize name
    count: transactionSummary[type], // Access the count for the specific transaction type using its key (type) in transactionSummary. For example, to access the count of 'deposit': transactionSummary['deposit']
  }));

  return (
    <StyledTransactionChart>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={data} barSize={50}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 25, right: 10 }}
          />
          <YAxis type="number" dataKey="count" domain={[0, "dataMax"]} />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="count"
            name="transaction count"
            fill="#228be6"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </StyledTransactionChart>
  );
}
