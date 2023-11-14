export interface LoginFormDto {
  email: string
  password: string
}

export interface LoginResponseDto {
  token: string
}

export interface RegisterFormDto {
  firstname: string
  email: string
  password: string
}

export interface RegisterResponseDto {
  token: string
}

export interface IClient {
  id: string
  firstname: string
  email: string
}
