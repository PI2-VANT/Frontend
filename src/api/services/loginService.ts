import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type Request = {
  email: string
  password: string
}

export type Response = {
  _id: string
  email: string
  name: string
  password: string
}

export const loginService = async (params: Request) => {
  const { data }: AxiosResponse<Response> = await api.post('/users/login', params)

  return data
}