import * as yup from 'yup'

export const loginValidationSchema = yup.object({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
})