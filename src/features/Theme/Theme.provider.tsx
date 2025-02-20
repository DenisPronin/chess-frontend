import { MantineProvider } from '@mantine/core'
import { ReactNode } from 'react'
import '@mantine/core/styles.css'
import '@/styles/main.css'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider>{children}</MantineProvider>
}
