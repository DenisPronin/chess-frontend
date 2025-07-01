import { GameField, GameMove } from '../../Game.types'
import {
  checkIsSameCol,
  checkIsSameRow,
  getColIndexByLetter,
  getFigureByPosition,
  getIntermediateCells,
} from '../Game.common'

export const getMovePositionDiff = (move: GameMove): { rowDiff: number; colDiff: number } => {
  const colDiff = Math.abs(getColIndexByLetter(move.from.col) - getColIndexByLetter(move.to.col))
  const rowDiff = Math.abs(move.from.row - move.to.row)

  return { rowDiff, colDiff }
}

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

export const checkIsMoveStraight = (move: GameMove): boolean => {
  return checkIsSameCol(move) || checkIsSameRow(move)
}

export const checkIsMoveDiagonal = (move: GameMove): boolean => {
  const { colDiff, rowDiff } = getMovePositionDiff(move)
  return colDiff === rowDiff
}
