import { AuthLoginRequest, AuthLoginResponse } from './Auth.types'

export async function authLogin(request: AuthLoginRequest): Promise<AuthLoginResponse> {
  const response = await fetch('http://localhost:8080/api/v1/login', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  })

  const json = await response.json()

  if (!response.ok) {
    throw new Error(json.message)
  }

  return json
}
