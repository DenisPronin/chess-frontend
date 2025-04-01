import { selectAuthIsLoggedIn, useAuthStore } from '@/app/imports/App.store'
import { ReactNode, useEffect } from 'react'
import { getProfile } from './store/Profile.store'

export function ProfileProvider({ children }: { children: ReactNode }) {
  const isLoggedIn = useAuthStore(selectAuthIsLoggedIn)

  useEffect(() => {
    if (!isLoggedIn) return

    getProfile()
  }, [isLoggedIn])

  return <>{children}</>
}
