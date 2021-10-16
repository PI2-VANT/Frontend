/* eslint-disable no-unused-vars */
import { Typography } from '@material-ui/core'
import { useCookies } from 'react-cookie'
import { AuthenticatedTemplate } from '../../../components/templates/authenticated/AuthenticatedTemplate'
import * as S from './Home.styles'
import DroneImage from '../../../assets/drone.png'

const Home = () => {
  const [getCookie] = useCookies(['vant-auth'])

  return (
    <AuthenticatedTemplate active='Meus Drones'>
      <S.Container>
        <S.Content>
          <S.Image src={DroneImage} />
          <Typography variant='h6' >Voce deve cadastrar um drone para continuar</Typography>
          <S.StyledButton>Cadastrar drone</S.StyledButton>
        </S.Content>
      </S.Container>
    </AuthenticatedTemplate>
  )
}

export { Home }
