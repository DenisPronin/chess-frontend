import { GameField, GameMove } from '../../Game.types'
import { getColIndexByLetter, getFigureByPosition, getIntermediateCells } from '../Game.common'

export const validateMoveByBishop = (move: GameMove, field: GameField): boolean => {
  const colDiff = Math.abs(getColIndexByLetter(move.from.col) - getColIndexByLetter(move.to.col))
  const rowDiff = Math.abs(move.from.row - move.to.row)

  if (colDiff !== rowDiff) {
    return false
  }

  const path = getIntermediateCells(move)

  const hasObstacles = path.some(({ row, col }) => {
    return getFigureByPosition(field, row, col) !== null
  })

  if (hasObstacles) return false

  const targetFigure = getFigureByPosition(field, move.to.row, move.to.col)

  return !(targetFigure && targetFigure.color === move.figure.color)
}
