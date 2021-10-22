import { AxiosResponse } from 'axios'
import { api } from '../config/api'


export type Data = {
  registrationCode:  string,
  flyCode: number,
  velocidade: number,
  temperatura: number,
  umidade: number,
  bateria: number,
  pesticida: number,
  latitude: string,
  longitude: string,
  date: string
}

export type Response = {
  data: Data,
  status: number
}

export const baseValue = {
  "data": {
    "registrationCode": "002",
    "flyCode": 0,
    "velocidade": 0,
    "temperatura": 0,
    "umidade": 0,
    "bateria": 0,
    "pesticida": 0,
    "latitude": "-15,7941",
    "longitude": "-47,8825",
    "date": "1-1-2021:T23:25:51"
  },
  "status": 200
}

export const monitoringService = async (registrationCode: string) => {
  const { data }: AxiosResponse<Response> = await api.get(`/monitoring/${registrationCode}`);
  return data
}