import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type Response = {
  _id: string
  email: string
  name: string
  password: string
}

export const myVantList = async () => {
  const { data }: AxiosResponse<Response> = await api.get('/myVants')

  return data
}
