import styled from 'styled-components'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#009688',
      color: '#F5F5F5',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
export const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        backgroundColor: '#FFFFFF',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const StyledTableContainer = styled(TableContainer).attrs(() => ({
    component: Paper
}))`
    &&{
        width: 958px;
    }
`;

