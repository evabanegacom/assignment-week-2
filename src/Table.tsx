import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
  item: any
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const CustomizedTables:React.FC<Props> = ({item}) => {
    console.log(item)
    
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Address(From)</StyledTableCell>
            <StyledTableCell align="right">BlockHash</StyledTableCell>
            <StyledTableCell align="right">To&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">TransactionHash&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Event</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {item?.length && item.slice(0, 21).map((row:any) => (
            <StyledTableRow key={row}>
              <StyledTableCell component="th" scope="row">
                {row?.address}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.blockHash}</StyledTableCell>
              <StyledTableCell align="right">{row?.args[0]}</StyledTableCell>
              <StyledTableCell align="right">{row?.transactionHash}</StyledTableCell>
              <StyledTableCell align="right">{row.event}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;


