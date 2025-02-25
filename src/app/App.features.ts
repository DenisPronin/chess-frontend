import { AuthFeature } from '@/features/Auth'
import { GameFeature } from '@/features/Game'
import { InitFeature } from '@/features/Init'
import { ThemeFeature } from '@/features/Theme/Theme.feature'
import { IFeature } from '@/types'

export const appFeatures: IFeature[] = [ThemeFeature, InitFeature, AuthFeature, GameFeature]
