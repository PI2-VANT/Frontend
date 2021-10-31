import { TextField } from '@material-ui/core'
import * as S from './styles'

import drone from '../../assets/drone.png'
// import history from '../../routes/services/history'
import { useFormik } from 'formik'

interface VantInfoProps{
  idVant: string
  nameVant: string
}

const VantInfo = ({ idVant, nameVant }: VantInfoProps) => {

  const formik = useFormik({
    initialValues: {
      idVant: idVant,
      nameVant: nameVant,
    },
    onSubmit: async (values) => {
        alert('teste')
    },
  })

  return (
    <S.Container>
      <form onSubmit={formik.handleSubmit}>
        <S.Title variant='h6' align='center'>
          Cadastre seu Vant
        </S.Title>
        <S.Logo src={drone} alt='vant-image' />
        <TextField
          className='input'
          name='idVant'
          variant='filled'
          label='Identificador Vant'
          value={idVant}
          fullWidth
          disabled
        />
        <TextField
          className='input'
          name='nameVant'
          variant='filled'
          label='Nome do Vant'
          placeholder='Digite o nome do vant'
          value={nameVant}
          fullWidth
          disabled
        />
        <S.ActionContent>
          <S.StyledButton variant='contained' type='submit'>
            Excluir
          </S.StyledButton>
        </S.ActionContent>
      </form>
    </S.Container>
  )
}

export { VantInfo }
