import { isAppEnvLocal } from '@/features/Env'
import { createStore } from '@/features/Store'
import { GameFieldLetters, GameMove, GameState } from '../Game.types'
import { FEATURE_NAME, initialGameFigures } from '../models/Game.model'
import { initGameField } from '../models/GameField/initGameField'
import { updateCellFigure } from '../models/GameField/updateCellFigure'
import { validateMove } from '../models/GameValidators/validateMove'

export const useGameStore = createStore<GameState>()(
  () => ({
    field: initGameField(initialGameFigures),
    selectedCell: null,
    moves: [],
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

export const makeMove = (move: GameMove) => {
  const gameState = useGameStore.getState()

  const isValidMove = validateMove(move, gameState.field)
  if (!isValidMove) {
    return
  }

  let newField = updateCellFigure(gameState.field, move.from.row, move.from.col, null)
  newField = updateCellFigure(newField, move.to.row, move.to.col, move.figure)

  useGameStore.setState((state) => ({
    ...state,
    field: newField,
    moves: [...state.moves, move],
  }))
}

export const selectGameField = (state: GameState) => state.field
export const selectGameSelectedCell = (state: GameState) => state.selectedCell
