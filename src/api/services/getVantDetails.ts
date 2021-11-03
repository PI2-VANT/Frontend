import { AxiosResponse } from 'axios'
import { api } from '../config/api'

export type FlightDetailsResponse = {
  longitude: string
  latitude: string
  umidade: number
  temperatura: number
  pesticida: number
  bateria: number
  velocidade: number
  date: string
}

export const getVantDetailsService = async (
  flyCode: string,
  registrationCode: string
) => {
  const { data }: AxiosResponse<FlightDetailsResponse[]> = await api.get(
    `vant/get-fly-details/${flyCode}/drone/${registrationCode}`
  )

  return data
}
