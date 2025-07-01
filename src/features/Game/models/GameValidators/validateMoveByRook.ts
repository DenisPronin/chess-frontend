import { GameField, GameMove } from '../../Game.types'
import { checkIsMoveStraight, checkIsTargetEnemy, checkObstacles } from './GameValidators.common'

export const validateMoveByRook = (move: GameMove, field: GameField): boolean => {
  const isStraightLineMove = checkIsMoveStraight(move)
  if (!isStraightLineMove) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
