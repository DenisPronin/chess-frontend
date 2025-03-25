import { showVersion } from '@/features/Env'
import { ReactNode } from 'react'

showVersion()

export function InitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
