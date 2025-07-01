import { GameField, GameMove } from '../../Game.types'
import { checkIsTargetEnemy, getMovePositionDiff } from './GameValidators.common'

export const validateMoveByKing = (move: GameMove, field: GameField): boolean => {
  const { colDiff, rowDiff } = getMovePositionDiff(move)

  const isSingleStep = colDiff <= 1 && rowDiff <= 1
  if (!isSingleStep) return false

  return checkIsTargetEnemy(move, field)
}
