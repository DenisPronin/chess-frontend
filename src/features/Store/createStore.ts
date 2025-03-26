import { appEnv } from '@/features/Env'
import { create, StateCreator } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'

const storeResetFns = new Set<() => void>()

export const resetAllStores = () => {
  storeResetFns.forEach((resetFn) => {
    resetFn()
  })
}

interface StoreOptions<T> {
  name: string
  resettable?: boolean
  persistOptions?: PersistOptions<T, Partial<T>>
  hasLogs?: boolean
}

export const createStore = <T>() => {
  return (stateCreator: StateCreator<T>, options?: StoreOptions<T>) => {
    let store = create(stateCreator)
    if (options?.persistOptions) {
      store = create(persist(stateCreator, options.persistOptions))
    }

    const initialState = store.getInitialState()
    if (options?.resettable) {
      storeResetFns.add(() => {
        store.setState(initialState, true)
      })
    }

    if (options?.hasLogs && appEnv === 'development') {
      store.subscribe((state) => {
        console.info(options.name, state)
      })
    }

    return store
  }
}
