import { selectAuthIsLoggedIn, useAuthStore } from '@/app/imports/App.store'
import { ReactNode, useEffect } from 'react'
import { useProfileStore } from './store/Profile.store'

export function ProfileProvider({ children }: { children: ReactNode }) {
  const isLoggedIn = useAuthStore(selectAuthIsLoggedIn)

  const getProfile = useProfileStore((state) => state.getProfile)

  useEffect(() => {
    if (!isLoggedIn) return

    getProfile()
  }, [getProfile, isLoggedIn])

  return <>{children}</>
}
