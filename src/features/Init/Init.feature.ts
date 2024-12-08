import { FEATURE_NAME } from '@/features/Init/Init.model'
import { InitProvider } from '@/features/Init/Init.provider'
import { IFeature } from '@/types'

export const InitFeature: IFeature = {
  title: FEATURE_NAME,

  provider: InitProvider,
}
