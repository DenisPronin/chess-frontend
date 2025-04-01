import { createAsyncAction, createLoadableData, createStore } from '@/features/Store'
import { StateLoadableSlice } from '@/types'
import { apiProfileFetch } from '../Profile.api'
import { ProfileUser } from '../Profile.types'

type ProfileState = {
  profile: StateLoadableSlice<ProfileUser>
}

export const useProfileStore = createStore<ProfileState>()(
  () => ({
    profile: createLoadableData<ProfileUser>(),
  }),
  {
    name: 'useProfileStore',
    resettable: true,
    hasLogs: true,
  }
)

export const getProfile = createAsyncAction<ProfileState, ProfileUser, void, 'profile'>(useProfileStore, 'profile', {
  fetchFunction: apiProfileFetch,
})
