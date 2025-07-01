import { GameField, GameMove } from '../../Game.types'
import { getFigureByPosition, getIntermediateCells } from '../Game.common'

export const checkIsTargetEnemy = (move: GameMove, field: GameField): boolean => {
  const targetFigure = getFigureByPosition(field, move.to.row, move.to.col)

  if (targetFigure) {
    return targetFigure.color !== move.figure.color
  }

  return true
}

export const checkObstacles = (move: GameMove, field: GameField): boolean => {
  const path = getIntermediateCells(move)

  return path.some(({ row, col }) => {
    return getFigureByPosition(field, row, col) !== null
  })
}
