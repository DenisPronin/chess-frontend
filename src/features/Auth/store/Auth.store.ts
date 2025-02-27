import { Nullish } from '@/types'
import { createEvent, createStore } from 'effector'

export const $authToken = createStore<Nullish<string>>(null)

export const setAuthToken = createEvent<string>()
export const resetAuthToken = createEvent()

$authToken.on(setAuthToken, (_, token) => token)
$authToken.on(resetAuthToken, () => null)
