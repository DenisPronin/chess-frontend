import { AuthRequestLogin } from '@/features/Auth/Auth.types'

export async function authLogin(request: AuthRequestLogin) {
  const response = await fetch('http://localhost:8080/api/v1/login', {
    method: 'POST',
    body: JSON.stringify(request),
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error('Login failed')
  }

  return response.json()
}
