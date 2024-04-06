import { createContext } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types"; // ES6

import { styled as styledMUI } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const StyledTableCell = styledMUI(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 15,
    fontWeight: 500,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const Span = styled.span`
  display: inline-block;
  padding: 1.1rem 1.6rem;
  border-radius: 9px;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;

  ${(props) =>
    props.action === "withdrawal" &&
    css`
      background-color: #930a0a;
    `}

  ${(props) =>
    props.action === "deposit" &&
    css`
      background-color: #1b5a26;
    `}


    ${(props) =>
    props.action === "transfer" &&
    css`
      background-color: #004a87;
    `}
`;

// Type of action	,transfer to,	Date	Money

const TableContext = createContext();

function TableComponent({ children }) {
  return (
    <TableContext.Provider value={null}>
      <TableContainer component={Paper} elevation={1}>
        <Table sx={{ minWidth: 650 }} aria-label="table">
          {children}
        </Table>
      </TableContainer>
    </TableContext.Provider>
  );
}

const Header = function ({ children }) {
  return (
    <TableHead>
      <TableRow>{children}</TableRow>
    </TableHead>
  );
};

const Body = function ({ data, render }) {
  return <TableBody>{data.map(render)}</TableBody>;
};

TableComponent.Header = Header;
TableComponent.Body = Body;

export default TableComponent;

TableComponent.propTypes = {
  children: PropTypes.array,
};

Header.propTypes = {
  children: PropTypes.array,
};

Body.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func,
};
