import { Button, ButtonProps, ElementProps } from '@mantine/core'

interface UIButtonProps
  extends ButtonProps,
    ElementProps<'button', keyof ButtonProps> {}

export function UIButton({ children, ...props }: UIButtonProps) {
  return <Button {...props}>{children}</Button>
}
