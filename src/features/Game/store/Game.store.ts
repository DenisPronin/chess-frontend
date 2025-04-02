import { isAppEnvLocal } from '@/features/Env'
import { createStore } from '@/features/Store'
import { GameFieldLetters, GameState } from '../Game.types'
import { FEATURE_NAME, initGameField, initialGameFigures } from '../models/Game.model'

export const useGameStore = createStore<GameState>()(
  () => ({
    field: initGameField(initialGameFigures),
    selectedCell: null,
  }),
  {
    name: FEATURE_NAME,
    resettable: true,
    hasLogs: isAppEnvLocal,
  }
)

export const chooseCell = (row: number, col: GameFieldLetters) => {
  useGameStore.setState((state) => ({
    ...state,
    selectedCell: {
      row,
      col,
    },
  }))
}

export const selectGameField = (state: GameState) => state.field
export const selectGameSelectedCell = (state: GameState) => state.selectedCell
