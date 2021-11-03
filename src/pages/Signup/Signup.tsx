/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import {
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from '@material-ui/core'
import { Visibility, VisibilityOff, ArrowBack } from '@material-ui/icons'
import React, { useState, MouseEvent } from 'react'
import { useFormik } from 'formik'
import { useCookies } from 'react-cookie'

import logo from '../../assets/logo.svg'
import history from '../../routes/services/history'
import * as S from './Signup.styles'
import { signupValidationSchema } from './validationSchema'
import { createUserService } from '../../api/services/createUserService'

const Signup = () => {
  const setCookie = useCookies(['vant-auth'])[1]
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleMouseDownPassword = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault()
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupValidationSchema,
    onSubmit: async (values) => {
      try {
        const data = await createUserService({
          email: values.email,
          name: values.name,
          password: values.password,
        })

        setCookie('vant-auth', {
          id: data._id,
          name: data.name,
          email: data.email,
        })

        history.push('/myVants')
      } catch (err) {
        alert('Não foi possível criar o usuário')
      }
    },
  })

  return (
    <S.Container>
      <form onSubmit={formik.handleSubmit}>
        <IconButton
          onClick={() => history.push('/')}
          sx={{ position: 'absolute', top: '2rem', left: '2rem' }}
        >
          <ArrowBack className='back-icon' />
        </IconButton>

        <S.Title variant='h6' align='center'>
          Cadastro
        </S.Title>
        <S.Logo src={logo} alt='pulver-vant' />
        <TextField
          name='name'
          label='Nome'
          className='input'
          variant='filled'
          placeholder='Insira seu nome'
          fullWidth
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          id="input-name"
        />
        <TextField
          name='email'
          variant='filled'
          label='Email'
          placeholder='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          fullWidth
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          id="input-email"
        />
        <InputLabel htmlFor='passwordInput'>Senha</InputLabel>
        <FilledInput
          name='password'
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={(e) => handleMouseDownPassword(e)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          id="input-password"
        />
        <InputLabel htmlFor='repeatPasswordInput'>Repetir senha</InputLabel>
        <FilledInput
          name='confirmPassword'
          type={showPassword ? 'text' : 'password'}
          fullWidth
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          endAdornment={
            <InputAdornment position='end'>
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={(e) => handleMouseDownPassword(e)}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          id="input-confirm-password"
        />
        <S.StyledButton variant='contained' fullWidth type='submit'>
          Cadastrar
        </S.StyledButton>
      </form>
    </S.Container>
  )
}

export { Signup }
