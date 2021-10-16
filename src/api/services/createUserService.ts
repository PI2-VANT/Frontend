import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type Request = {
  email: string
  name: string
  password: string
}

export type Response = {
  _id: string
  email: string
  name: string
  password: string
}

export const createUserService = async (params: Request) => {
  const { data }: AxiosResponse<Response> = await api.post('/users', params)

  return data
}
