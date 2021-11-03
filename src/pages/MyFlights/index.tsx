import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'

import TableHead from '@mui/material/TableHead'

import TableRow from '@mui/material/TableRow'
import history from '../../routes/services/history'
import { useCookies } from 'react-cookie'
import { historyFlights, ResponseHistory } from '../../api/services/vantService'
// import { useCookies } from 'react-cookie';
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate'
import {
  StyledTableCell,
  StyledTableRow,
  Content,
  StyledTableContainer,
} from './styles'

interface row {
  idVant: string
  registrationCode: string
  date: string
  vant: string
  flyCode: string
}

function createData(
  idVant: string,
  registrationCode: string,
  date: string,
  vant: string,
  flyCode: string
) {
  return { idVant, registrationCode, date, vant, flyCode }
}

const rowsToRender: row[] = []

const MyFlights = () => {
  const [flights, setFlights] = useState<ResponseHistory[]>()
  const [getCookie] = useCookies(['vant-auth'])

  useEffect(() => {
    const ListMyVants = async () => {
      try {
        const data = await historyFlights(getCookie['vant-auth'].id)
        setFlights(data)
      } catch (error) {
        alert(error)
      }
    }
    ListMyVants()
    flights?.map((flight, index) =>
      rowsToRender.push(
        createData(
          flight.voos[index]._id,
          flight.voos[index].registrationCode,
          flight.voos[index].date,
          flight.vantName,
          flight.voos[index].flyCode
        )
      )
    )
  }, [flights?.length])


  return (
    <AuthenticatedTemplate active='Meus voos'>
      <Content>
        <StyledTableContainer>
          <Table sx={{ minWidth: 700 }} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>id Vôo</StyledTableCell>
                <StyledTableCell align='right'>Data /Hora</StyledTableCell>
                <StyledTableCell align='right'>Vant</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsToRender.map((row) => (
                <StyledTableRow
                  key={row.idVant}
                  onClick={() =>
                    history.push('/details', {
                      RegistrationCode: row.registrationCode,
                      flyCode: row.flyCode
                    })
                  }
                >
                  <StyledTableCell component='th' scope='row'>
                    {row.idVant}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{row.date}</StyledTableCell>
                  <StyledTableCell align='right'>{row.vant}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </Content>
    </AuthenticatedTemplate>
  )
}

export { MyFlights }
