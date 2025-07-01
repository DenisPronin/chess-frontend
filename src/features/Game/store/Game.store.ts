import { isAppEnvLocal } from '@/features/Env'
import { getLastMove } from '@/features/Game/models/Game.common'
import { createStore } from '@/features/Store'
import { GameColor, GameFieldLetters, GameMove, GameState } from '../Game.types'
import { FEATURE_NAME, initialGameFigures } from '../models/Game.model'
import { initGameField } from '../models/GameField/initGameField'
import { updateCellFigure } from '../models/GameField/updateCellFigure'
import { validateMove } from '../models/GameValidators/validateMove'
import { checkIsEnPassantMove } from '../models/GameValidators/validateMoveByPawn'

export const useGameStore = createStore<GameState>()(
  () => ({
    field: initGameField(initialGameFigures),
    selectedCell: null,
    moves: [],
    turn: GameColor.WHITE,
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

  const isValidMove = validateMove(move, gameState)
  if (!isValidMove) {
    return
  }

  let newField = updateCellFigure(gameState.field, move.from.row, move.from.col, null)
  newField = updateCellFigure(newField, move.to.row, move.to.col, move.figure)

  const lastMove = getLastMove(gameState.moves)
  if (lastMove && checkIsEnPassantMove(move, gameState.field, lastMove)) {
    newField = updateCellFigure(newField, lastMove.to.row, lastMove.to.col, null)
  }

  useGameStore.setState((state) => ({
    ...state,
    field: newField,
    moves: [...state.moves, move],
    turn: state.turn === GameColor.WHITE ? GameColor.BLACK : GameColor.WHITE,
  }))
}

export const selectGameField = (state: GameState) => state.field
export const selectGameSelectedCell = (state: GameState) => state.selectedCell
