import React, {useEffect, useState} from 'react';
import { DroneCard } from '../../components/vantCard';
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate';
import { myVantList} from '../../api/services/vantService';
import { Container } from './styles';
import { useCookies } from 'react-cookie';

export type Response = {
  _id: string
  userId: string
  name: string
  registrationCode: string
  __v: number
}

const MyVants = () => {
    const [vants, setVants] = useState<Response[]>();
    const [getCookie] = useCookies(['vant-auth'])
    useEffect(()=> {
      const ListMyVants = async () => {
        try {
          const data = await myVantList(getCookie['vant-auth'].id);
          setVants(data);
        } catch (error) {
          alert(error);
        }
      }
      ListMyVants();
      console.log(vants)
    },[]);

  return (
    <AuthenticatedTemplate active='Meus Drones'>
        <Container >
          {
            vants?.map((vant, index) => <DroneCard name="Drone 1" onClick={()=>{}} key={index}/>)
          }
        </Container>
    </AuthenticatedTemplate>

  );
}

export { MyVants };