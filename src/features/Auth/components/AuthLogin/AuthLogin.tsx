import {
  Button,
  Card,
  Flex,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { useUnit } from 'effector-react'
import { ChangeEvent, FormEvent } from 'react'
import {
  $loginErrors,
  $loginForm,
  changedPassword,
  changedUsername,
  formSubmitted,
} from './AuthLogin.store'

export function AuthLogin() {
  const form = useUnit($loginForm)
  const errors = useUnit($loginErrors)
  const onChangeUsername = useUnit(changedUsername)
  const onChangePassword = useUnit(changedPassword)

  const handleChangeField =
    (changeEvent: (value: string) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      changeEvent(e.target.value)
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    formSubmitted()
  }

  return (
    <Flex mih="100vh" justify="center" align="center">
      <Card shadow="sm" padding="lg" radius="md" withBorder miw={360}>
        <Title order={2} ta="center" mb="md">
          Login
        </Title>

        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Email / Username"
              placeholder="Enter email or username"
              value={form.username}
              error={errors.username}
              onChange={handleChangeField(onChangeUsername)}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter password"
              value={form.password}
              error={errors.password}
              onChange={handleChangeField(onChangePassword)}
            />

            <Button type="submit" fullWidth>
              Login
            </Button>
          </Stack>
        </form>
      </Card>
    </Flex>
  )
}
