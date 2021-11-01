import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import drone from '../../assets/drone.png';
import history from '../../routes/services/history';

import { Container, Image, Title, CardContainer } from './styles';

interface MyDronesProps{
    name: string;
    vantName: string;
    registrationCode: string;
}

const DroneCard = ({ name, vantName, registrationCode}: MyDronesProps) => {
    const handleMonitoringVant = (registrationCode: string) => {
        history.push('/monitoring', {
          registrationCode
        })
      }

    const handleViewMore = (registrationCode: string, vantName: string ) => {
    history.push('/vantInfo', {
        registrationCode,
        vantName
    })
    }
  return (
    <Container>
        <Card >
            <CardContainer onClick={() => handleMonitoringVant(registrationCode)}>
                <Title >
                    {name}
                </Title>
                <Image src={drone} alt='pulver-vant' />
            </CardContainer>
            <CardActions>
            <Button onClick={() => handleViewMore(registrationCode, vantName)} size="small">VER MAIS</Button>
            </CardActions>
        </Card>
    </Container>
  );
}

export { DroneCard };