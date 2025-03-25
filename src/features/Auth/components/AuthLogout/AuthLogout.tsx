import { Button } from '@mantine/core'
import { useAuthStore } from '../../store/Auth.store'

export function AuthLogout() {
  const logout = useAuthStore((state) => state.logout)

  return <Button onClick={logout}>Logout</Button>
}
