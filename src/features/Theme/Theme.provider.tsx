import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
}
