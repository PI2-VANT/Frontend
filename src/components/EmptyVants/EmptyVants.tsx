/* eslint-disable no-unused-vars */
import { Typography } from '@material-ui/core'
import * as S from './EmptyVants.styles'
import DroneImage from '../../assets/drone.png'

const EmptyVants = () => {
  return (
      <S.Container>
        <S.Content>
          <S.Image src={DroneImage} />
          <Typography variant='h6' >Voce deve cadastrar um drone para continuar</Typography>
          <S.StyledButton>Cadastrar drone</S.StyledButton>
        </S.Content>
      </S.Container>
  )
}

export { EmptyVants }
