import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type ResponseMyVants = {
  _id: string
  userId: string
  name: string
  registrationCode: string
  __v: number
}

export type ResponseCreateVant = {
  userId: string
  name: string
  registrationCode: string
  _id: string
  __v: number
}

type ResponseDeleteVant = {
  deletedCount: number
}

export type paramsCreateVant = {
  userId: string
  name: string
  registrationCode: string
}

export const myVantList = async (idUser: string) => {
  const { data }: AxiosResponse<ResponseMyVants[]> = await api.get(`vant/my-vants/${idUser}`)

  return data
}

export const Create = async (params: paramsCreateVant) => {
  const { data }: AxiosResponse<ResponseCreateVant[]> = await api.post('vant', params)
  
  return data
}

export const deleteVant = async (idVant: string) => {
  const { data }: AxiosResponse<ResponseDeleteVant> = await api.delete(`vant/${idVant}`)

  return data
}