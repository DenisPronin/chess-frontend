import { AuthFeature } from '@/features/Auth'
import { GameFeature } from '@/features/Game'
import { InitFeature } from '@/features/Init'
import { LayoutFeature } from '@/features/Layout'
import { ProfileFeature } from '@/features/Profile'
import { ThemeFeature } from '@/features/Theme'
import { IFeature } from '@/types'

export const appFeatures: IFeature[] = [
  ThemeFeature,
  InitFeature,
  LayoutFeature,
  AuthFeature,
  GameFeature,
  ProfileFeature,
]
