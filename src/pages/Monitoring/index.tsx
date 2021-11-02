import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import { MonitoringCard} from '../../components/monitoringCard'
import { Container, DataFlyContant} from './styles';
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate';
import { monitoringService, Response, baseValue} from '../../api/services/monitoringService';


let cont = 0;

interface MonitoringProps{
  location:{
    state:{
      registrationCode: string
    }
  }
}

const Monitoring = ({location}: MonitoringProps) => {

      const [monitoringData, setMonitoringData] = useState<Response>(baseValue);
      const history = useHistory();
      console.log(location.state.registrationCode)
     useEffect(()=> {
      const timer = setInterval(async () => {
        try {
          
          // console.log()
          const response = await monitoringService(location.state.registrationCode);
          if(response.data){
            setMonitoringData(response);
          }
          else{
            setMonitoringData(monitoringData);
            cont++;
          }
        } catch (error) {
          console.log(error);
          setMonitoringData(monitoringData);
          cont++;
        }

        if(cont === 5){
          alert('Não há novos dados');
          history.push('/myVants');
        }
      }, 5000);
      return () => clearInterval(timer);
    },[]);

    const defaultProps = {
      center: {
        lat: -15.7941,
        lng: -47.8825
      },
      zoom: 11
    };

  return (
    <AuthenticatedTemplate active='Monitoramento'>
        <Container >
          <div style={{ height: '30%', width: '50%', minWidth: '700px' }}>
            <GoogleMapReact
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
          </div>
          <DataFlyContant>
            <MonitoringCard data={String(monitoringData?.data.velocidade)} simbol="Km/h" label="Velocidade"/>
            <MonitoringCard data={String(monitoringData?.data.pesticida)} simbol="%" label="Nivel pesticida"/>
            <MonitoringCard data={String(monitoringData?.data.bateria)} simbol="%" label="Bateria"/>
            <MonitoringCard data={String(monitoringData?.data.temperatura)} simbol="ºc" label="Temperatura"/>
            <MonitoringCard data={String(monitoringData?.data.umidade)} simbol="%" label="Umidade"/>
          </DataFlyContant>
           
        </Container>

    </AuthenticatedTemplate>
        
  );
}

export { Monitoring };