import * as yup from 'yup'

export const signupValidationSchema = yup.object({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('Email é obrigatório'),
  name: yup.string().required('Nome é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Senhas não conferem')
    .required('Confirmação da senha é obrigatória'),
})
