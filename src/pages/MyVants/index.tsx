import React, {useEffect, useState} from 'react';
import { DroneCard } from '../../components/vantCard';
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate';
import { myVantList} from '../../api/services/vantService';
import { Container } from './styles';
import { useCookies } from 'react-cookie';
import { EmptyVants } from '../../components/EmptyVants/EmptyVants';

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
    },[]);

  return (
    <AuthenticatedTemplate active='Meus Vants'>
          {
            vants?.length === 0 ? 
              <EmptyVants /> :
              ( 
                <Container >
                  {vants?.map((vant, index) => <DroneCard name={vant.name} vantId={vant._id} registrationCode={vant.registrationCode} vantName={vant.name} key={index}/>)}
                </Container>
              )
          }
        
    </AuthenticatedTemplate>

  );
}

export { MyVants };