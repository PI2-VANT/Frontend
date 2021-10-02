import {
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField
} from '@material-ui/core'
import { Visibility, VisibilityOff, ArrowBack } from '@material-ui/icons'
import { useState, MouseEvent } from 'react'

import logo from '../../assets/logo.svg'
import history from '../../routes/services/history'
import * as S from './Signup.styles'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleMouseDownPassword = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
  }

  return (
    <S.Container>
      <form>
        <IconButton
          onClick={() => history.push('/')}
          sx={{ position: 'absolute', top: '2rem', left: '2rem' }}>
          <ArrowBack className="back-icon" />
        </IconButton>

        <S.Title variant="h6" align="center">
          Cadastro
        </S.Title>
        <S.Logo src={logo} alt="pulver-vant" />
        <TextField
          label="Nome"
          className="input"
          variant="filled"
          placeholder="Insira seu nome"
          fullWidth
          autoFocus
        />
        <TextField
          variant="filled"
          label="Email"
          placeholder="Email"
          fullWidth
        />
        <InputLabel htmlFor="passwordInput">Senha</InputLabel>
        <FilledInput
          id="repeatPasswordInput"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={(e) => handleMouseDownPassword(e)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <InputLabel htmlFor="repeatPasswordInput">Repetir senha</InputLabel>
        <FilledInput
          id="repeatPasswordInput"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={(e) => handleMouseDownPassword(e)}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <S.StyledButton
          variant="contained"
          fullWidth
          type="submit"
          onClick={() => history.push('/home')}>
          Cadastrar
        </S.StyledButton>
      </form>
    </S.Container>
  )
}

export { Signup }
