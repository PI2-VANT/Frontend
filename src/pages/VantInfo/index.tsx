import { TextField } from '@material-ui/core'
import * as S from './styles'

import drone from '../../assets/drone.png'
import { deleteVant } from '../../api/services/vantService'
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate'
import history from '../../routes/services/history'
import { useFormik } from 'formik'

interface VantInfoProps{
  location:{
    state:{
      registrationCode: string,
      vantName: string
    }
  }
}

const VantInfo = ({ location }: VantInfoProps) => {
  const {registrationCode, vantName } = location.state;
  const formik = useFormik({
    initialValues: {
      idVant: registrationCode,
      vantName: vantName,
    },
    onSubmit: async () => {
        try {
          await deleteVant(registrationCode);
          alert('vant deletado com sucesso')
          history.push('/myVants')
        } catch (error) {
          alert(error)
          history.push('/myVants')
        }
    },
  })

  return (
    <AuthenticatedTemplate active='Meus Vants'>
      <S.Container>
        <form onSubmit={formik.handleSubmit}>
          <S.Title variant='h6' align='center'>
            Cadastre seu Vant
          </S.Title>
          <S.Logo src={drone} alt='vant-image' />
          <TextField
            className='input'
            name='registrationCode'
            variant='filled'
            label='Identificador Vant'
            value={registrationCode}
            fullWidth
            disabled
          />
          <TextField
            className='input'
            name='vantName'
            variant='filled'
            label='Nome do Vant'
            placeholder='Digite o nome do vant'
            value={vantName}
            fullWidth
            disabled
          />
          <S.ActionContent>
            <S.StyledButton variant='contained' type='submit' id="btn-exclude">
              Excluir
            </S.StyledButton>
          </S.ActionContent>
        </form>
      </S.Container>
    </AuthenticatedTemplate>
  )
}

export { VantInfo }
