import { GameField, GameMove } from '../../Game.types'
import { getColIndexByLetter } from '../GameField/getColIndexByLetter'
import { getIntermediateCells, getRowIndex, isSameCol, isSameRow } from './GameValidators.common'

export const validateMoveByRook = (move: GameMove, field: GameField): boolean => {
  const isStraightLineMove = isSameCol(move) || isSameRow(move)

  if (!isStraightLineMove) return false

  const path = getIntermediateCells(move)

  const hasObstacles = path.some(({ row, col }) => {
    const rowIndex = getRowIndex(row)
    const colIndex = getColIndexByLetter(col)
    return field.cells[rowIndex][colIndex].figure !== null
  })

  if (hasObstacles) return false

  const targetRowIndex = getRowIndex(move.to.row)
  const targetColIndex = getColIndexByLetter(move.to.col)
  const targetFigure = field.cells[targetRowIndex][targetColIndex].figure

  return !(targetFigure && targetFigure.color === move.figure.color)
}
