import { ReactNode } from 'react'
import '@/styles/main.css'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}
