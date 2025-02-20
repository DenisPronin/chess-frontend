import {
  Button,
  Card,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'

interface FormValues {
  username: string
  password: string
}

export function AuthLogin() {
  const form = useForm<FormValues>({
    initialValues: {
      username: '',
      password: '',
    },

    validate: {
      username: (value) =>
        /^\S+@\S+$/.test(value) || /^[a-zA-Z0-9_]+$/.test(value)
          ? null
          : 'Enter email or username',
      password: (value) =>
        value.length >= 6 ? null : 'Password must be at least 6 characters',
    },
  })

  const handleSubmit = (values: FormValues) => {
    console.log('Submitted values:', values)
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2} ta="center" mb="md">
        Вход в систему
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Email / Username"
            placeholder="Enter email or username"
            {...form.getInputProps('username')}
            required
          />

          <PasswordInput
            label="Password"
            placeholder="Enter password"
            {...form.getInputProps('password')}
            required
          />

          <Button type="submit" fullWidth>
            Login
          </Button>
        </Stack>
      </form>
    </Card>
  )
}
