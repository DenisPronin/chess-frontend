import { Nullish } from '@/types'
import { GameField, GameFigureTypes, GameMove } from '../../Game.types'
import { validateMoveByBishop } from './validateMoveByBishop'
import { validateMoveByPawn } from './validateMoveByPawn'
import { validateMoveByRook } from './validateMoveByRook'

export const validatorsMoveByFigure = {
  [GameFigureTypes.Pawn]: validateMoveByPawn,
  [GameFigureTypes.Rook]: validateMoveByRook,
  [GameFigureTypes.Knight]: validateMoveByPawn,
  [GameFigureTypes.Bishop]: validateMoveByBishop,
  [GameFigureTypes.Queen]: validateMoveByPawn,
  [GameFigureTypes.King]: validateMoveByPawn,
}
export const validateMove = (
  move: GameMove,
  field: GameField,
  lastMove: Nullish<GameMove>
): boolean => {
  return validatorsMoveByFigure[move.figure.type](move, field, lastMove)
}
