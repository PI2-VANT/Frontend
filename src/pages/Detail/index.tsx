/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Container,
  GaugeContainer,
  ChartContainer,
  StyledButton,
} from './Detail.styles'
import { Chart } from 'react-google-charts'
import Gauge from '../../components/charts/Gauge'
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate'
import {
  FlightDetailsResponse,
  getVantDetailsService,
} from '../../api/services/getVantDetails'

type Props = {
  location: {
    state: {
      RegistrationCode: string
      flyCode: string
    }
  }
}

const Detail = ({ location }: Props) => {
  const [data, setData] = useState<FlightDetailsResponse[]>([])
  const array: any[] = [
    ['x', 'Velocidade', 'Nível Pesticida', 'Bateria', 'Temperatura', 'Umidade'],
  ]
  useEffect(() => {
    const getFlightData = async () => {
      const response = await getVantDetailsService(
        location.state.flyCode,
        location.state.RegistrationCode
      )
      setData(response)
    }
    getFlightData()
  }, [])

  useMemo(() => {
    data.forEach((aux) => {
      array.push([
        aux.date,
        aux.velocidade,
        aux.pesticida,
        aux.bateria,
        aux.temperatura,
        aux.umidade,
      ])
    })
  }, [data.length])

  console.log(array)

  const downloadCsv = () => {
    let aux2: any
    array.forEach(function (row) {
      aux2 += row.join(',')
      aux2 += '\n'
    })
    document.write(aux2)
  }

  return (
    <AuthenticatedTemplate active='Details'>
      {data.length === 0 ? (
        <div>...carregando</div>
      ) : (
        <Container>
          <ChartContainer>
            <Chart
              width={'700px'}
              height={'300px'}
              chartType='LineChart'
              loader={<div>Loading Chart</div>}
              data={array}
              options={{
                hAxis: {
                  title: 'Time',
                },
                series: {
                  1: { curveType: 'function' },
                },
              }}
              rootProps={{ 'data-testid': '1' }}
            />
          </ChartContainer>
          <GaugeContainer>
            <Gauge
              value={
                data.reduce(
                  (acumulador, { umidade }) => acumulador + umidade,
                  0
                ) /
                data.length /
                100
              }
              simbol='%'
              colors={['#12e5fb']}
              levels={1}
              text='Umidade'
            />
            <Gauge
              value={
                data.reduce(
                  (acumulador, { velocidade }) => acumulador + velocidade,
                  0
                ) /
                data.length /
                100
              }
              simbol='Km/h'
              colors={['#06f18b']}
              levels={1}
              text='Velocidade Media'
            />
            <Gauge
              value={
                data.reduce(
                  (acumulador, { temperatura }) => acumulador + temperatura,
                  0
                ) /
                data.length /
                100
              }
              simbol='ºC'
              colors={['#06d28b', '#fffd49', '#f41734']}
              levels={3}
              text='Temperatura'
            />
          </GaugeContainer>
          <StyledButton onClick={downloadCsv}>Exportar CSV</StyledButton>
        </Container>
      )}
    </AuthenticatedTemplate>
  )
}

export { Detail }
