import { IFeature } from '@/types'
import { FEATURE_NAME } from './Profile.model'
import { ProfileProvider } from './Profile.provider'

export const ProfileFeature: IFeature = {
  title: FEATURE_NAME,

  provider: ProfileProvider,
}
