import { IRoute } from '@/types'
import { AuthLogin } from './components/AuthLogin/AuthLogin'

export const authRouter: IRoute[] = [
  {
    path: '/login',
    element: AuthLogin,
    private: false,
  },
]
