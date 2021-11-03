import * as yup from 'yup'

export const CreateVantCardValidationSchema = yup.object({
  email: yup.string().required('O identificador é obrigatório'),
  nameVant: yup.string().required('O nome do vant é obrigatória'),
})