import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export function AuthProtected({ children }: { children: ReactNode }) {
  const isLoggedIn = false

  // if not logged in, redirect to login page
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />
  }

  return children
}
