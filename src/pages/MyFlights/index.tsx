import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import history from '../../routes/services/history';

// import { useCookies } from 'react-cookie';
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate';
import {StyledTableCell, StyledTableRow, Content, StyledTableContainer} from './styles';

function createData(
  idVant: string,
  date: string,
  vant: string,
) {
  return { idVant, date, vant };
}

const rowsToRender = [
  createData('1', '01/11/2021 08:50', 'vant 1'),
  // createData('2', '21/10/2021 08:50', 'vant 2'),
  // createData('3', '21/10/2021 08:50', 'vant 3'),
  // createData('4', '21/10/2021 08:50', 'vant 4'),
];

const MyFlights = () => {

    // const [getCookie] = useCookies(['vant-auth'])

    // useEffect(()=> {
    //   const ListMyVants = async () => {
    //     try {
    //       const data = await myVantList(getCookie['vant-auth'].id);
    //       setVants(data);
    //     } catch (error) {
    //       alert(error);
    //     }
    //   }
    //   ListMyVants();
    // },[]);

  return (
    <AuthenticatedTemplate active='Meus voos'>
      <Content>
        <StyledTableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>id Vôo</StyledTableCell>
                <StyledTableCell align="right">Data /Hora</StyledTableCell>
                <StyledTableCell align="right">Vant</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsToRender.map((row) => (
                <StyledTableRow key={row.idVant} onClick={()=> history.push('/details')}>
                  <StyledTableCell component="th" scope="row">
                    {row.idVant}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.vant}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Content>
    </AuthenticatedTemplate>

  );
}

export { MyFlights };