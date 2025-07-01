import { GameField, GameMove } from '../../Game.types'
import { isSameCol, isSameRow } from '../Game.common'
import { checkIsTargetEnemy, checkObstacles } from './GameValidators.common'

export const validateMoveByRook = (move: GameMove, field: GameField): boolean => {
  const isStraightLineMove = isSameCol(move) || isSameRow(move)

  if (!isStraightLineMove) return false

  const hasObstacles = checkObstacles(move, field)
  if (hasObstacles) return false

  return checkIsTargetEnemy(move, field)
}
