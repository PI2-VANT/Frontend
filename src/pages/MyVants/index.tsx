import React, {useEffect} from 'react';
import { DroneCard } from '../../components/vantCard';

import { Container } from './styles';

const MyVants = () => {

    useEffect(()=> {

    },[]);

  return (
        <Container >
            <DroneCard name="Drone 1" onClick={()=>{}}/>
            <DroneCard name="Drone 1" onClick={()=>{}}/>
            <DroneCard name="Drone 1" onClick={()=>{}}/>
            <DroneCard name="Drone 1" onClick={()=>{}}/>
            <DroneCard name="Drone 1" onClick={()=>{}}/>
            <DroneCard name="Drone 1" onClick={()=>{}}/>
        </Container>
  );
}

export { MyVants };