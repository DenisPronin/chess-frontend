import { GameField, GameMove } from '../../Game.types'
import {
  checkIsTargetEnemy,
  checkObstacles,
  isMoveDiagonal,
  isMoveStraight,
} from './GameValidators.common'

export const validateMoveByQueen = (move: GameMove, field: GameField): boolean => {
  if (!isMoveDiagonal(move) && !isMoveStraight(move)) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
