import { api } from '@/features/Network'
import { createAsyncAction, createStore, resetAllStores } from '@/features/Store'
import { apiAuthLogin } from '../Auth.api'
import { FEATURE_NAME } from '../Auth.model'
import { AuthLoginRequest } from '../Auth.types'

type AuthState = {
  token: string | null
  error: string | null
  isLoading: boolean
  isSuccess: boolean

  login: (values: AuthLoginRequest) => Promise<void>
}

export const useAuthStore = createStore<AuthState>()(
  (set, get) => ({
    token: null,
    error: null,
    isLoading: false,
    isSuccess: false,

    login: createAsyncAction<string, AuthLoginRequest, 'token'>(set, get, {
      dataKey: 'token',
      fetchFunction: async (request: AuthLoginRequest) => {
        const { token } = await apiAuthLogin(request)
        api.setToken(token)
        return token
      },
    }),
  }),
  {
    name: FEATURE_NAME,
    resettable: true,
    persistOptions: {
      name: FEATURE_NAME,
      partialize: (state) => ({ token: state.token }),
      onRehydrateStorage: () => (state, error) => {
        if (error) return

        if (state?.token) {
          api.setToken(state.token)
        }
      },
    },
  }
)

export const logout = () => {
  resetAllStores()
  api.setToken(null)
}

api.setLogoutCallback(logout)

export const selectAuthIsLoggedIn = (state: AuthState) => !!state.token
