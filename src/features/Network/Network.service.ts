import { ErrorNetwork, Nullish } from '@/types'
import ky, { KyInstance, Options } from 'ky'

class NetworkService {
  readonly baseUrl: string

  private token: Nullish<string> = null

  private instance: KyInstance

  private logoutCallback: Nullish<() => void> = null

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl

    this.instance = ky.create({
      prefixUrl: `${this.baseUrl}/api/v1`,
      headers: this.getHeaders(),
      hooks: {
        beforeError: [
          // common error handling
          async (error) => {
            const { response } = error
            if (response) {
              const json = (await response.json()) as ErrorNetwork
              error.message = json.message
            }

            return error
          },
          // logout on 401
          (error) => {
            const { response } = error
            if (response.status === 401) {
              this.logoutCallback?.()
            }

            return error
          },
        ],
      },
    })
  }

  private getHeaders() {
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    return headers
  }

  setToken(token: Nullish<string>) {
    this.token = token
    if (!this.instance) return

    this.instance = this.instance.extend({
      headers: this.getHeaders(),
    })
  }

  setLogoutCallback(callback: () => void) {
    this.logoutCallback = callback
  }

  async get<T>(url: string, options?: Options) {
    const response = this.instance.get<T>(url, options)
    return await response.json()
  }

  async post<T>(url: string, options?: Options) {
    const response = this.instance.post<T>(url, options)
    return await response.json()
  }
}

export const api = new NetworkService(import.meta.env.VITE_APP_API_URL)
