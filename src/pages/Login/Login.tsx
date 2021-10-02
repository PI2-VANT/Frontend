import { TextField } from '@material-ui/core'
import * as S from './Login.styles'

import logo from '../../assets/logo.svg'
import history from '../../routes/services/history'

const Login = () => {
  return (
    <S.Container>
      <form>
        <S.Title variant="h6" align="center">
          Olá,
          <br />
          Faça seu Login
        </S.Title>
        <S.Logo src={logo} alt="pulver-vant" />
        <TextField
          className="input"
          variant="filled"
          placeholder="Email"
          fullWidth
          autoFocus
        />
        <TextField
          variant="filled"
          placeholder="Senha"
          fullWidth
          type="password"
        />
        <S.StyledButton
          onClick={() => history.push('/home')}
          variant="contained"
          fullWidth
          type="submit">
          Login
        </S.StyledButton>
        <S.Link variant="body2" align="center">
          Não possui conta,{' '}
          <span onClick={() => history.push('/signup')}>Cadastrar-se</span>
        </S.Link>
      </form>
    </S.Container>
  )
}

export { Login }
