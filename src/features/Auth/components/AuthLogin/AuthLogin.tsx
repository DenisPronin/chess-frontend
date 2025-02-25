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
  $loginForm,
  changedPassword,
  changedUsername,
  loginFx,
} from './AuthLogin.store'

export function AuthLogin() {
  const form = useUnit($loginForm)
  const onChangeUsername = useUnit(changedUsername)
  const onChangePassword = useUnit(changedPassword)

  const handleChangeField =
    (changeEvent: (value: string) => void) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      changeEvent(e.target.value)
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await loginFx({ ...form })
    console.log('login success')
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
              required
              value={form.username}
              onChange={handleChangeField(onChangeUsername)}
            />

            <PasswordInput
              label="Password"
              placeholder="Enter password"
              required
              value={form.password}
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
