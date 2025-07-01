import { GameField, GameMove } from '../../Game.types'
import {
  checkIsMoveDiagonal,
  checkIsMoveStraight,
  checkIsTargetEnemy,
  checkObstacles,
} from './GameValidators.common'

export const validateMoveByQueen = (move: GameMove, field: GameField): boolean => {
  if (!checkIsMoveDiagonal(move) && !checkIsMoveStraight(move)) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
