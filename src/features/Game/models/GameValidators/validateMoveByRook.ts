import { GameField, GameMove } from '../../Game.types'
import { checkIsTargetEnemy, checkObstacles, isMoveStraight } from './GameValidators.common'

export const validateMoveByRook = (move: GameMove, field: GameField): boolean => {
  const isStraightLineMove = isMoveStraight(move)
  if (!isStraightLineMove) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
