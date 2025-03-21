import { ReactNode, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../../store/Auth.store'

export function AuthProtected({ children }: { children: ReactNode }) {
  const token = useAuthStore((state) => state.token)

  const isLoggedIn = useMemo(() => !!token, [token])

  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}
