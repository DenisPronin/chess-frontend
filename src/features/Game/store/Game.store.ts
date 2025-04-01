import { createStore } from '@/features/Store'
import { FEATURE_NAME, initGameField } from '../Game.model'
import { GameState } from '../Game.types'

export const useGameStore = createStore<GameState>()(
  () => ({
    field: initGameField(),
  }),
  {
    name: FEATURE_NAME,
    resettable: true,
    hasLogs: true,
  }
)

export const selectGameField = (state: GameState) => state.field
