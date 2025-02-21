import { Nullish } from '@/types'
import { createEvent, createStore } from 'effector'

export const $authToken = createStore<Nullish<string>>(null)

export const setAuthToken = createEvent<string>()
export const resetAuthToken = createEvent()

$authToken.on(setAuthToken, (_, token) => {
  console.log('setAuthToken:', token)
  return token
})
$authToken.on(resetAuthToken, () => null)

$authToken.watch((token) => {
  console.log('auth token:', token)
})
