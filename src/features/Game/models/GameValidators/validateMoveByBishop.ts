import { GameField, GameMove } from '../../Game.types'
import { checkIsTargetEnemy, checkObstacles, isMoveDiagonal } from './GameValidators.common'

export const validateMoveByBishop = (move: GameMove, field: GameField): boolean => {
  if (!isMoveDiagonal(move)) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
