import { TextField } from '@material-ui/core'
import * as S from './styles'

import logo from '../../assets/logo.svg'
import history from '../../routes/services/history'
import { useFormik } from 'formik'
import { CreateVantCardValidationSchema } from './validationSchema'
import { Create } from '../../api/services/vantService';
import { useCookies } from 'react-cookie';

const CreateVantCard = () => {
  const [getCookie] = useCookies(['vant-auth'])

  const formik = useFormik({
    initialValues: {
      idVant: '',
      nameVant: '',
    },
    validationSchema: CreateVantCardValidationSchema,
    onSubmit: async (values) => {
      try {
        await Create({
          registrationCode: values.idVant,
          name: values.nameVant,
          userId: getCookie['vant-auth'].id
        })
        alert('Vant Criado com sucesso')

        history.push('/myVants')
      } catch (err) {
        alert('Não foi possível cadastrar um novo vant')
      }
    },
  })

  return (
    <S.Container>
      <form onSubmit={formik.handleSubmit}>
        <S.Title variant='h6' align='center'>
          Cadastre seu Vant
        </S.Title>
        <S.Logo src={logo} alt='pulver-vant' />
        <TextField
          className='input'
          name='idVant'
          variant='filled'
          label='Identificador Vant'
          placeholder='ex: R2y34'
          value={formik.values.idVant}
          onChange={formik.handleChange}
          fullWidth
          error={formik.touched.idVant && Boolean(formik.errors.idVant)}
          helperText={formik.touched.idVant && formik.errors.idVant}
        />
        <TextField
          className='input'
          name='nameVant'
          variant='filled'
          label='Nome do Vant'
          placeholder='Digite o nome do vant'
          value={formik.values.nameVant}
          onChange={formik.handleChange}
          fullWidth
          error={formik.touched.nameVant && Boolean(formik.errors.nameVant)}
          helperText={formik.touched.nameVant && formik.errors.nameVant}
        />
        <S.StyledButton variant='contained' fullWidth type='submit'>
          Cadastrar
        </S.StyledButton>
      </form>
    </S.Container>
  )
}

export { CreateVantCard }
