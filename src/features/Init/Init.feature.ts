import { IFeature } from '@/types'
import { FEATURE_NAME } from './Init.model'
import { InitProvider } from './Init.provider'

export const InitFeature: IFeature = {
  title: FEATURE_NAME,

  provider: InitProvider,
}
