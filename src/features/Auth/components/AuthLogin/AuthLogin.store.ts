import { authLogin } from '@/features/Auth/Auth.api'
import { setAuthToken } from '@/features/Auth/store/Auth.store'
import { Nullish } from '@/types'
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

export const $loginStatus = createStore(null)
export const $loginError = createStore<Nullish<Error>>(null)

$loginStatus.on(loginFx.done, (_, request) => request.result)

$loginError.on(loginFx.fail, (_, request) => request.error)

sample({
  clock: loginFx.done,
  fn: ({ result }) => result.token,
  target: setAuthToken,
})
