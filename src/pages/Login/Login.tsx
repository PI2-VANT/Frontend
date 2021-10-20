import { TextField } from '@material-ui/core'
import * as S from './Login.styles'

import logo from '../../assets/logo.svg'
import history from '../../routes/services/history'
import { loginService } from '../../api/services/loginService'
import { useFormik } from 'formik'
import { loginValidationSchema } from './validationSchema'
import { useCookies } from 'react-cookie'

const Login = () => {
  const setCookie = useCookies(['vant-auth'])[1]
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const data = await loginService({
          email: values.email,
          password: values.password,
        })

        setCookie('vant-auth', {
          id: data._id,
          name: data.name,
          email: data.email,
        })

        history.push('/myVants')
      } catch (err) {
        alert('Não foi possível fazer o login')
      }
    },
  })

  return (
    <S.Container>
      <form onSubmit={formik.handleSubmit}>
        <S.Title variant='h6' align='center'>
          Olá,
          <br />
          Faça seu Login
        </S.Title>
        <S.Logo src={logo} alt='pulver-vant' />
        <TextField
          className='input'
          name='email'
          variant='filled'
          label='Email'
          placeholder='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          fullWidth
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className='input'
          name='password'
          variant='filled'
          label='Senha'
          placeholder='Digite sua senha'
          value={formik.values.password}
          onChange={formik.handleChange}
          fullWidth
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <S.StyledButton variant='contained' fullWidth type='submit'>
          Login
        </S.StyledButton>
        <S.Link variant='body2' align='center'>
          Não possui conta,{' '}
          <span onClick={() => history.push('/signup')}>Cadastrar-se</span>
        </S.Link>
      </form>
    </S.Container>
  )
}

export { Login }
