import { StoreApi, UseBoundStore } from 'zustand'
import { StateLoadableSlice } from '../../types'

type StateWithSlice<SliceKey extends string | number | symbol, Response> = {
  [K in SliceKey]: StateLoadableSlice<Response>
}

interface AsyncActionOptions<Response, Request> {
  fetchFunction: (request: Request) => Promise<Response>
}

export function createAsyncAction<
  State extends StateWithSlice<SliceKey, Response>,
  Response,
  Request,
  SliceKey extends keyof State,
>(store: UseBoundStore<StoreApi<State>>, sliceKey: SliceKey, options: AsyncActionOptions<Response, Request>) {
  return async (request: Request) => {
    const { fetchFunction } = options
    const prevState = store.getState()
    if (prevState[sliceKey].isLoading) return

    store.setState((state) => ({
      ...state,
      [sliceKey]: { ...state[sliceKey], isLoading: true, error: null },
    }))

    try {
      const data = await fetchFunction(request)
      store.setState((state) => ({
        ...state,
        [sliceKey]: { data, isLoading: false, isSuccess: true, error: null },
      }))
    } catch (error) {
      store.setState((state) => ({
        ...state,
        [sliceKey]: { ...state[sliceKey], data: null, isLoading: false, isSuccess: false, error: String(error) },
      }))
    }
  }
}
