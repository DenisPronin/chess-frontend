import { EventCallable } from 'effector'
import { ChangeEvent } from 'react'

export function helperChangeHandler<T>(event: EventCallable<T>) {
  return (e: ChangeEvent<HTMLInputElement>) => event(e.target.value as T)
}
