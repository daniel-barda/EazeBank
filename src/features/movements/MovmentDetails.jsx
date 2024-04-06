import { TableRow } from "@mui/material";
import TableComponent, { Span, StyledTableCell } from "../../ui/Table";

import useMovements from "./useMovements";
import Spinner from "../../ui/Spinner";
import { formatCurrency, formattedDate } from "../../utils/helpers";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function MovmentDetails() {
  const { data, isLoading } = useMovements();
  if (isLoading) return <Spinner />;

  const { movements, count } = data;
  if (!isLoading && !movements.length)
    return <Empty resourceName="movements" />;

  return (
    <>
      <TableComponent>
        <TableComponent.Header>
          <StyledTableCell align="left">Type of action</StyledTableCell>
          <StyledTableCell align="left">transfer to</StyledTableCell>
          <StyledTableCell align="left">Date</StyledTableCell>
          <StyledTableCell align="left">Money</StyledTableCell>
        </TableComponent.Header>

        <TableComponent.Body
          data={movements}
          render={(movement) => (
            <TableRow
              key={movement.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                <Span action={movement.type}>{movement.type}</Span>
              </StyledTableCell>

              <StyledTableCell align="left">
                {movement.details.recipient_user_id ? (
                  movement.details.recipient_user_id
                ) : (
                  <span>&mdash;</span>
                )}
              </StyledTableCell>

              <StyledTableCell align="left">
                {formattedDate(movement.created_at)}
              </StyledTableCell>

              <StyledTableCell align="left">
                {formatCurrency(movement.amount)}
              </StyledTableCell>
            </TableRow>
          )}
        />
      </TableComponent>

      <Pagination count={count} />
    </>
  );
}

export default MovmentDetails;
