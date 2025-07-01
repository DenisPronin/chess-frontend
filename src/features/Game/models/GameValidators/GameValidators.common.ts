import { GameField, GameMove } from '../../Game.types'
import {
  getColIndexByLetter,
  getFigureByPosition,
  getIntermediateCells,
  isSameCol,
  isSameRow,
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

export const isMoveStraight = (move: GameMove): boolean => {
  return isSameCol(move) || isSameRow(move)
}

export const isMoveDiagonal = (move: GameMove): boolean => {
  const { colDiff, rowDiff } = getMovePositionDiff(move)
  return colDiff === rowDiff
}
