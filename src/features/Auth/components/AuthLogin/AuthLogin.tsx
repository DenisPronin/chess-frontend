import { useAuthStore } from '@/features/Auth/store/Auth.store'
import { UIText } from '@/features/UI'
import { Button, Card, PasswordInput, Stack, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom'
import { AuthLoginRequest } from '../../Auth.types'

export function AuthLogin() {
  const navigate = useNavigate()
  const { login, loginError, isLoginLoading } = useAuthStore()

  const form = useForm<AuthLoginRequest>({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.length < 3 ? 'Минимум 3 символа' : null),
      password: (value) => (value.length < 3 ? 'Password is too short' : null),
    },
  })

  const handleSubmit = async (values: AuthLoginRequest) => {
    await login(values)
    navigate('/game')
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder miw={360}>
      <Title order={2} ta="center" mb="md">
        Login
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Email / Username"
            placeholder="Enter email or username"
            {...form.getInputProps('username')}
          />

          <PasswordInput label="Password" placeholder="Enter password" {...form.getInputProps('password')} />

          <UIText size="sm" c="red">
            {loginError}
          </UIText>

          <Button type="submit" loading={isLoginLoading} color="teal" fullWidth>
            Войти
          </Button>
        </Stack>
      </form>
    </Card>
  )
}
