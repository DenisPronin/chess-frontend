import { authLogin } from '@/features/Auth/Auth.api'
import { setAuthToken } from '@/features/Auth/store/Auth.store'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { AuthLoginRequest } from '../../Auth.types'

export const $loginForm = createStore<AuthLoginRequest>({
  username: '',
  password: '',
})

export const changedUsername = createEvent<string>()
export const changedPassword = createEvent<string>()

$loginForm.on(changedUsername, (state, username) => ({ ...state, username }))
$loginForm.on(changedPassword, (state, password) => ({ ...state, password }))

export const $loginErrors = createStore<Partial<AuthLoginRequest>>({})
$loginErrors.reset([changedUsername, changedPassword])

export const $serverErrors = createStore<string>('')
$serverErrors.reset([changedUsername, changedPassword])

const validate = (values: AuthLoginRequest) => {
  const errors: Partial<AuthLoginRequest> = {}
  const isUsernameValid = /^[a-zA-Z0-9_]+$/.test(values.username)
  const isEmailValid = /^\S+@\S+$/.test(values.username)
  if (!isUsernameValid && !isEmailValid) {
    errors.username = 'Invalid username or email'
  }
  if (values.password.length < 3) {
    errors.password = 'Password is too short'
  }
  return errors
}

export const formSubmitted = createEvent()
export const loginFx = createEffect(authLogin)

sample({
  clock: formSubmitted,
  source: $loginForm,
  fn: validate,
  target: $loginErrors,
})

sample({
  clock: formSubmitted,
  source: { form: $loginForm, errors: $loginErrors },
  filter: ({ errors }) => Object.keys(errors).length === 0,
  fn: ({ form }) => form,
  target: loginFx,
})

sample({
  clock: loginFx.done,
  fn: ({ result }) => result.token,
  target: setAuthToken,
})

sample({
  clock: loginFx.done,
  fn: () => '',
  target: $serverErrors,
})

sample({
  clock: loginFx.fail,
  fn: ({ error }) => error.message,
  target: $serverErrors,
})
