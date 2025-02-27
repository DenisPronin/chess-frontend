import { Text, TextProps } from '@mantine/core'
import { ReactNode } from 'react'

export function UIText({ children, ...props }: TextProps & { children: ReactNode }) {
  return <Text {...props}>{children}</Text>
}
