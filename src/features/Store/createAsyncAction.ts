type AsyncState<T, DataKey extends string = 'data'> = {
  isLoading: boolean
  isSuccess: boolean
  error: string | null
} & {
  [key in DataKey]: T | null
}

export function createAsyncAction<Response, Request, DataKey extends string = 'data'>(
  set: (partial: Partial<AsyncState<Response, DataKey>>) => void,
  get: () => AsyncState<Response, DataKey>,
  options: {
    fetchFunction: (request: Request) => Promise<Response>
    dataKey: DataKey
  }
): (request: Request) => Promise<void> {
  return async (request: Request) => {
    if (get().isLoading) return

    set({ isLoading: true } as Partial<AsyncState<Response, DataKey>>)
    try {
      const data = await options.fetchFunction(request)
      set({ [options.dataKey]: data, isSuccess: true, error: null } as Partial<AsyncState<Response, DataKey>>)
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message } as Partial<AsyncState<Response, DataKey>>)
      }
    } finally {
      set({ isLoading: false } as Partial<AsyncState<Response, DataKey>>)
    }
  }
}
