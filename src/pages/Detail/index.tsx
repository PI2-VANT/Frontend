import React  from 'react';
import {Container,  ChartContant, ChartContainer, StyledButton} from './Detail.styles';
import { Chart } from "react-google-charts";
import Gauge from '../../components/charts/Gauge'
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate';

const Detail = () => {

  return (
    <AuthenticatedTemplate active='Details'>
      <Container>
 
        <ChartContainer>
          <Chart
            width={'700px'}
            height={'300px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'Velocidade', 'Nível Pesticida', 'Bateria', 'Temperatura', 'Umidade'],
              ['8:50', 0, 100, 100, 25, 51],
              ['8:55', 15, 100, 100, 25, 51],
              ['9:00', 18, 95, 98, 25, 51],
              ['9:05', 15, 95, 97, 25, 51],
              ['9:10', 14, 94, 96, 27, 51],
              ['9:15', 15, 93, 95,27, 51],
              ['9:20', 18, 93, 94,25, 51],
              ['9:25', 17, 85, 92,25, 51],
              ['9:30', 14, 85, 89,25, 51],
            ]}
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
        <ChartContant>
          <Gauge value={0.51} simbol='%' colors={['#12e5fb']} levels={1} text="Umidade"/>
          <Gauge value={0.16} simbol='Km/h' colors={['#06f18b']} levels={1} text="Velocidade Media"/>
          <Gauge value={0.26} simbol='ºC' colors={['#06d28b','#fffd49', '#f41734']} levels={3} text="Temperatura"/>
        </ChartContant>
          <StyledButton>
            Exportar CSV
          </StyledButton>
            
        </Container>

     </AuthenticatedTemplate>
  );
}

export { Detail };