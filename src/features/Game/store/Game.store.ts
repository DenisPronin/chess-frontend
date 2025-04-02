import { createStore } from '@/features/Store'
import { GameState } from '../Game.types'
import { FEATURE_NAME, initGameField, initialGameFigures } from '../models/Game.model'

export const useGameStore = createStore<GameState>()(
  () => ({
    field: initGameField(initialGameFigures),
  }),
  {
    name: FEATURE_NAME,
    resettable: true,
    hasLogs: true,
  }
)

export const selectGameField = (state: GameState) => state.field
