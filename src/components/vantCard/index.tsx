import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import drone from '../../assets/drone.png';

import { Container, Image, Title, CardContainer } from './styles';

interface MyDronesProps{
    name: string;
    viewMore: ()=> void;
    onClick: ()=> void
}

const DroneCard = ({ name, viewMore, onClick}: MyDronesProps) => {
  return (
    <Container>
        <Card onClick={onClick}>
            <CardContainer>
                <Title >
                    {name}
                </Title>
            <Image src={drone} alt='pulver-vant' />
            </CardContainer>
            <CardActions>
            <Button onClick={viewMore} size="small">VER MAIS</Button>
            </CardActions>
        </Card>
    </Container>
  );
}

export { DroneCard };