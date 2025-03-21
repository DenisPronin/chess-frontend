import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { authLogin } from '../Auth.api'
import { FEATURE_NAME } from '../Auth.model'
import { AuthLoginRequest } from '../Auth.types'

type AuthState = {
  token: string | null
  loginError: string | null
  isLoginLoading: boolean
  login: (values: AuthLoginRequest) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
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
          throw err
        } finally {
          set({ isLoginLoading: false })
        }
      },

      logout: () => set({ token: null }),
    }),
    {
      name: FEATURE_NAME,
      partialize: (state) => ({ token: state.token }),
    }
  )
)
