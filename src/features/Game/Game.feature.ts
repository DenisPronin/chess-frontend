import { IFeature } from '@/types'
import { FEATURE_NAME } from './Game.model'
import { gameRouter } from './Game.router'

export const GameFeature: IFeature = {
  title: FEATURE_NAME,

  routes: gameRouter,
}
