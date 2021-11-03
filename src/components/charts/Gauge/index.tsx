import React from 'react';
import GaugeChart from 'react-gauge-chart'
import {Container, Text} from './styles'


type Props= {
  value: number;
  colors?: string[]; 
  simbol: string;
  levels?: number;
  text: string;
}

const Gauge = (props: Props) => {
  return (
    <Container>
       <GaugeChart id="gauge-chart5"
        nrOfLevels={props.levels} 
        colors={props.colors}
        percent={props.value}
        textColor="#000000"
        formatTextValue= {value => value + props.simbol}
      />
      <Text>{props.text}</Text>
    </Container>
 );
  


}

export default Gauge;