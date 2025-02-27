import { IRouter } from '@/types'
import { AuthLayout } from './components/AuthLayout/AuthLayout'
import { AuthLogin } from './components/AuthLogin/AuthLogin'

export const authRouter: IRouter = {
  layout: {
    path: 'auth',
    element: AuthLayout,
  },
  routes: [
    {
      path: 'login',
      element: AuthLogin,
      private: false,
    },
  ],
}
