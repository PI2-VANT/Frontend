import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type Request = {
  email?: string
  name?: string
}

export type Response = {
  _id: string
  email: string
  name: string
  password: string
}

export const editUserService = async (params: Request, userId: string) => {
  if (params.email && params.name) {
    const { data }: AxiosResponse<Response> = await api.patch(
      `/users/${userId}`,
      params
    )
    return data
  }
}
