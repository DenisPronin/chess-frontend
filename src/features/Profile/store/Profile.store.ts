import { createAsyncAction, createStore } from '@/features/Store'
import { Nullish } from '@/types'
import { apiProfileFetch } from '../Profile.api'
import { ProfileUser } from '../Profile.types'

type ProfileState = {
  data: Nullish<ProfileUser>
  isLoading: boolean
  isSuccess: boolean
  error: string | null

  getProfile: () => Promise<void>
}

export const useProfileStore = createStore<ProfileState>()(
  (set, get) => ({
    data: null,
    isLoading: false,
    isSuccess: false,
    error: null,

    getProfile: createAsyncAction<ProfileUser, void>(set, get, {
      fetchFunction: apiProfileFetch,
      dataKey: 'data',
    }),
  }),
  {
    name: 'useProfileStore',
    resettable: true,
  }
)
