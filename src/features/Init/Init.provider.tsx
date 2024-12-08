import { appEnv, envVersion } from '@/features/Env'
import { ReactNode } from 'react'

export function InitProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

console.info(`App version: ${envVersion} (${appEnv})`)
