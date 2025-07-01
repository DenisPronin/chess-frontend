import { GameField, GameMove } from '../../Game.types'
import { checkIsTargetEnemy, getMovePositionDiff } from './GameValidators.common'

export const validateMoveByKnight = (move: GameMove, field: GameField): boolean => {
  const { rowDiff, colDiff } = getMovePositionDiff(move)

  const isKnightMove = (colDiff === 2 && rowDiff === 1) || (colDiff === 1 && rowDiff === 2)
  if (!isKnightMove) return false

  return checkIsTargetEnemy(move, field)
}
