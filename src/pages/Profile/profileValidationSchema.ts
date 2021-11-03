import * as yup from 'yup'

export const profileValidationSchema = yup.object({
  email: yup.string().email('Insira um email válido'),
  name: yup
    .string()
    .min(5, 'Nome deve ter ao menos 5 letras')
    .max(30, 'Máximo de 30 letras'),
})
