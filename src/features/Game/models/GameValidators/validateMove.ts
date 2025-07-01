import { GameFigureTypes, GameMove, GameState } from '../../Game.types'
import { checkTurn, getLastMove } from '../Game.common'
import { validateMoveByBishop } from './validateMoveByBishop'
import { validateMoveByKing } from './validateMoveByKing'
import { validateMoveByKnight } from './validateMoveByKnight'
import { validateMoveByPawn } from './validateMoveByPawn'
import { validateMoveByQueen } from './validateMoveByQueen'
import { validateMoveByRook } from './validateMoveByRook'

export const validatorsMoveByFigure = {
  [GameFigureTypes.Pawn]: validateMoveByPawn,
  [GameFigureTypes.Rook]: validateMoveByRook,
  [GameFigureTypes.Knight]: validateMoveByKnight,
  [GameFigureTypes.Bishop]: validateMoveByBishop,
  [GameFigureTypes.Queen]: validateMoveByQueen,
  [GameFigureTypes.King]: validateMoveByKing,
}
export const validateMove = (move: GameMove, gameState: GameState): boolean => {
  const { field, moves, turn } = gameState

  const isCorrectTurn = checkTurn(move, turn)
  if (!isCorrectTurn) return false

  const lastMove = getLastMove(moves)
  return validatorsMoveByFigure[move.figure.type](move, field, lastMove)
}
