import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type Response = {
  _id: string
  userId: string
  name: string
  registrationCode: string
  __v: number
}

export const myVantList = async (idUser: string) => {
  const { data }: AxiosResponse<Response[]> = await api.get(`vant/my-vants/${idUser}`)

  return data
}
