import { GameField, GameMove } from '../../Game.types'
import { getFigureByPosition, getIntermediateCells, isSameCol, isSameRow } from '../Game.common'

export const validateMoveByRook = (move: GameMove, field: GameField): boolean => {
  const isStraightLineMove = isSameCol(move) || isSameRow(move)

  if (!isStraightLineMove) return false

  const path = getIntermediateCells(move)

  const hasObstacles = path.some(({ row, col }) => {
    return getFigureByPosition(field, row, col) !== null
  })

  if (hasObstacles) return false

  const targetFigure = getFigureByPosition(field, move.to.row, move.to.col)

  return !(targetFigure && targetFigure.color === move.figure.color)
}
