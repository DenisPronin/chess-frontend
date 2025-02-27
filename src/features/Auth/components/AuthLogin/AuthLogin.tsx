import { UIButton, UIForm, UIText } from '@/features/UI'
import { helperChangeHandler } from '@/utils'
import { reflect } from '@effector/reflect'
import { Card, PasswordInput, Stack, TextInput, Title } from '@mantine/core'
import {
  $loginErrors,
  $loginForm,
  $serverErrors,
  changedPassword,
  changedUsername,
  formSubmitted,
} from './AuthLogin.store'

export function AuthLogin() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder miw={360}>
      <Title order={2} ta="center" mb="md">
        Login
      </Title>

      <UIForm>
        <Stack>
          <FormUsername label="Email / Username" placeholder="Enter email or username" />
          <FormPassword label="Password" placeholder="Enter password" />

          <FormTextServerError />

          <FormButtonSubmit type="submit" color="teal" fullWidth>
            Login
          </FormButtonSubmit>
        </Stack>
      </UIForm>
    </Card>
  )
}

const FormUsername = reflect({
  view: TextInput,
  bind: {
    value: $loginForm.map((form) => form.username),
    onChange: helperChangeHandler<string>(changedUsername),
    error: $loginErrors.map((errors) => errors.username || null),
  },
})

const FormPassword = reflect({
  view: PasswordInput,
  bind: {
    value: $loginForm.map((form) => form.password),
    onChange: helperChangeHandler<string>(changedPassword),
    error: $loginErrors.map((errors) => errors.password || null),
  },
})

const FormButtonSubmit = reflect({
  view: UIButton,
  bind: {
    onClick: () => formSubmitted(),
  },
})

const FormTextServerError = reflect({
  view: UIText,
  bind: {
    children: $serverErrors,
    size: 'sm',
    c: 'red',
  },
})
