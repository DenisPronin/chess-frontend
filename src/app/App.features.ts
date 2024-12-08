import { AuthFeature } from '@/features/Auth'
import { GameFeature } from '@/features/Game'
import { InitFeature } from '@/features/Init'
import { IFeature } from '@/types'

export const appFeatures: IFeature[] = [InitFeature, AuthFeature, GameFeature]
