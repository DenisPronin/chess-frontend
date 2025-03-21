import { create } from 'zustand'
import { authLogin } from '../Auth.api'
import { AuthLoginRequest } from '../Auth.types'

type AuthState = {
  token: string | null
  loginError: string | null
  isLoginLoading: boolean

  login: (values: AuthLoginRequest) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  loginError: null,
  isLoginLoading: false,

  login: async (request: AuthLoginRequest) => {
    set({ isLoginLoading: true })
    try {
      const { token } = await authLogin(request)
      set({ token, loginError: null })
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ loginError: err.message })
      }
    } finally {
      set({ isLoginLoading: false })
    }
  },

  logout: () => set({ token: null }),
}))
