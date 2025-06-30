import { GameField, GameFigureTypes, GameMove } from '../../Game.types'
import { validateMoveByPawn } from './validateMoveByPawn'

export const validatorsMoveByFigure = {
  [GameFigureTypes.Pawn]: validateMoveByPawn,
  [GameFigureTypes.Rook]: validateMoveByPawn,
  [GameFigureTypes.Knight]: validateMoveByPawn,
  [GameFigureTypes.Bishop]: validateMoveByPawn,
  [GameFigureTypes.Queen]: validateMoveByPawn,
  [GameFigureTypes.King]: validateMoveByPawn,
}
export const validateMove = (move: GameMove, field: GameField): boolean => {
  return validatorsMoveByFigure[move.figure.type](move, field)
}
