import { authLogin } from '@/features/Auth/Auth.api'
import { setAuthToken } from '@/features/Auth/store/Auth.store'
import { createEffect, createEvent, createStore, sample } from 'effector'
import { AuthRequestLogin } from '../../Auth.types'

export const $loginForm = createStore<AuthRequestLogin>({
  username: '',
  password: '',
})

export const changedUsername = createEvent<string>()
export const changedPassword = createEvent<string>()

$loginForm.on(changedUsername, (state, username) => ({ ...state, username }))
$loginForm.on(changedPassword, (state, password) => ({ ...state, password }))

export const loginFx = createEffect(authLogin)

sample({
  clock: loginFx.done,
  fn: ({ result }) => result.token,
  target: setAuthToken,
})
