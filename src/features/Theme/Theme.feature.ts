import { FEATURE_NAME } from '@/features/Theme/Theme.model'
import { ThemeProvider } from '@/features/Theme/Theme.provider'
import { IFeature } from '@/types'

export const ThemeFeature: IFeature = {
  title: FEATURE_NAME,

  provider: ThemeProvider,
}
