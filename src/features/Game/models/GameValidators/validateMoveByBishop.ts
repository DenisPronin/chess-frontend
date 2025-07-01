import { GameField, GameMove } from '../../Game.types'
import { checkIsMoveDiagonal, checkIsTargetEnemy, checkObstacles } from './GameValidators.common'

export const validateMoveByBishop = (move: GameMove, field: GameField): boolean => {
  if (!checkIsMoveDiagonal(move)) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
