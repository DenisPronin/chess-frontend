import { createStore } from '@/features/Store'
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

    getProfile: async () => {
      const { isLoading } = get()
      if (isLoading) return

      set({ isLoading: true })
      try {
        const response = await apiProfileFetch()
        set({ data: response, error: null, isSuccess: true })
      } catch (err: unknown) {
        if (err instanceof Error) {
          set({ error: err.message })
        }
      } finally {
        set({ isLoading: false })
      }
    },
  }),
  {
    name: 'useProfileStore',
    resettable: true,
  }
)
