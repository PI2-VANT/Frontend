import React from 'react'

import {Container, Title, DataTitle} from './styles'

interface MonitorinCardProps {
  data: string;
  simbol: string;
  label: string;
}

export const MonitoringCard = ( {data, simbol, label}: MonitorinCardProps) => {


  return(
    <Container>
      <DataTitle>
        {`${data}${simbol}`}
      </DataTitle>
      <Title>
        {label}
      </Title>
    </Container>
  );


}