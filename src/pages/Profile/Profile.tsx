import { Paper, TextField, Typography } from '@material-ui/core'
import { useCookies } from 'react-cookie'
import { AuthenticatedTemplate } from '../../components/templates/authenticated/AuthenticatedTemplate'
import * as S from './Profile.styles'
import logo from '../../assets/logo.svg'
import { useFormik } from 'formik'
import { editUserService } from '../../api/services/editUserService'
import { profileValidationSchema } from './profileValidationSchema'

export const Profile = () => {
  const [getCookie, setCookie] = useCookies(['vant-auth'])
  const formik = useFormik({
    initialValues: {
      email: getCookie['vant-auth'].email,
      name: getCookie['vant-auth'].name,
    },
    validationSchema: profileValidationSchema,
    onSubmit: async (values) => {
      try {
        await editUserService(
          {
            email: values.email,
            name: values.name,
          },
          getCookie['vant-auth'].id
        )

        setCookie('vant-auth', {
          id: getCookie['vant-auth'].id,
          name: values.name,
          email: values.email,
        })
      } catch (err) {
        alert('Não foi possível editar o usuario')
      }
    },
  })
  return (
    <AuthenticatedTemplate active='Perfil'>
      <S.Container>
        <Paper
          elevation={3}
          sx={{
            padding: '20px 90px',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography alignSelf='center'>
            {getCookie['vant-auth'].name}
          </Typography>
          <S.Logo src={logo} alt='pulver-vant' />
          <form onSubmit={formik.handleSubmit}>
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
              name='name'
              variant='filled'
              label='Nome'
              placeholder='Email'
              value={formik.values.name}
              onChange={formik.handleChange}
              fullWidth
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <S.StyledButton variant='contained' fullWidth type='submit'>
              Editar usuario
            </S.StyledButton>
          </form>
        </Paper>
      </S.Container>
    </AuthenticatedTemplate>
  )
}
