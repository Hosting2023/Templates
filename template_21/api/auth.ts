import axios from '../core/axios'
import {
  IClient,
  LoginFormDto,
  LoginResponseDto,
  RegisterFormDto,
  RegisterResponseDto,
} from './dto/auth.dto'
import { CreateOrderDto } from './dto/order.dto'

export const login = async (dto: LoginFormDto): Promise<LoginResponseDto> => {
  return (await axios.post('/auth/login', dto)).data
}

export const register = async (dto: RegisterFormDto): Promise<RegisterResponseDto> => {
  return (await axios.post('/auth/register', dto)).data
}

export const getMe = async (): Promise<IClient> => {
  return (await axios.get('/users/me')).data
}

export const order = async (dto: CreateOrderDto) => {
  return (await axios.post('/orders/create', dto)).data
}
