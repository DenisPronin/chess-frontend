import { Nullish } from '@/types'
import { GameField, GameFigureTypes, GameMove } from '../../Game.types'
import { validateMoveByBishop } from './validateMoveByBishop'
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
  [GameFigureTypes.King]: validateMoveByPawn,
}
export const validateMove = (
  move: GameMove,
  field: GameField,
  lastMove: Nullish<GameMove>
): boolean => {
  return validatorsMoveByFigure[move.figure.type](move, field, lastMove)
}
