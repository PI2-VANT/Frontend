import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import drone from '../../assets/drone.png';

import { Container, Image, Title, CardContainer } from './styles';

interface MyDronesProps{
    name: string;
    onClick: ()=> void
}

const DroneCard = ({ name, onClick}: MyDronesProps) => {
  return (
    <Container>
        <Card>
            <CardContainer>
                <Title >
                    {name}
                </Title>
            <Image src={drone} alt='pulver-vant' />
            </CardContainer>
            <CardActions>
            <Button onClick={onClick} size="small">VER MAIS</Button>
            </CardActions>
        </Card>
    </Container>
  );
}

export { DroneCard };