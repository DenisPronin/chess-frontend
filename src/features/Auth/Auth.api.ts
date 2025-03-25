import { api } from '@/features/Network'
import { AuthLoginRequest, AuthLoginResponse } from './Auth.types'

export async function apiAuthLogin(request: AuthLoginRequest): Promise<AuthLoginResponse> {
  return api.post<AuthLoginResponse>('login', {
    json: request,
  })
}
