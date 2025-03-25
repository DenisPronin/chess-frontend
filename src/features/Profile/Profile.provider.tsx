import { ReactNode, useEffect } from 'react'
import { selectAuthIsLoggedIn, useAuthStore } from '../Auth/store/Auth.store'
import { useProfileStore } from './store/Profile.store'

export function ProfileProvider({ children }: { children: ReactNode }) {
  const isLoggedIn = useAuthStore(selectAuthIsLoggedIn)

  const getProfile = useProfileStore((state) => state.getProfile)

  useEffect(() => {
    if (!isLoggedIn) return

    getProfile()
  }, [getProfile, isLoggedIn])

  return <div>{children}</div>
}
