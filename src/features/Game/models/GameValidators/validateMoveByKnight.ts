import { GameField, GameMove } from '../../Game.types'
import { getColIndexByLetter } from '../Game.common'
import { checkIsTargetEnemy } from './GameValidators.common'

export const validateMoveByKnight = (move: GameMove, field: GameField): boolean => {
  const colDiff = Math.abs(getColIndexByLetter(move.from.col) - getColIndexByLetter(move.to.col))
  const rowDiff = Math.abs(move.from.row - move.to.row)

  const isKnightMove = (colDiff === 2 && rowDiff === 1) || (colDiff === 1 && rowDiff === 2)

  if (!isKnightMove) return false

  return checkIsTargetEnemy(move, field)
}
