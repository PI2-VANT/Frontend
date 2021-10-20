import React, {useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { MonitoringCard} from '../../components/monitoringCard'
import { Container, DataFlyContant} from './styles';


const Monitoring = () => {

    useEffect(()=> {

    },[]);

    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    };

  return (
        <Container >
          <div style={{ height: '30%', width: '50%', minWidth: '700px' }}>
            <GoogleMapReact
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
      </div>
           
           <DataFlyContant>
            <MonitoringCard data="20" simbol="Km/h" label="Velocidade"/>
            <MonitoringCard data="85" simbol="%" label="Nivel pesticida"/>
            <MonitoringCard data="90" simbol="%" label="Bateria"/>
            <MonitoringCard data="20" simbol="ºc" label="Temperatura"/>
            <MonitoringCard data="42" simbol="%" label="Umidade"/>
           </DataFlyContant>
           
        </Container>
  );
}

export { Monitoring };