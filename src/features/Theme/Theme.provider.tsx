import { Theme } from '@radix-ui/themes'
import { ReactNode } from 'react'
import '@/styles/main.css'
import '@radix-ui/themes/styles.css'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <Theme>{children}</Theme>
}
