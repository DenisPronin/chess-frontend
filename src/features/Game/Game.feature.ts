import { IFeature } from '@/types'
import { gameRouter } from './Game.router'
import { FEATURE_NAME } from './models/Game.model'

export const GameFeature: IFeature = {
  title: FEATURE_NAME,

  router: gameRouter,
}
