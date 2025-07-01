import { Nullish } from '@/types'
import { GameColor, GameField, GameMove } from '../../Game.types'
import { getColIndexByLetter, getFigureByPosition } from '../Game.common'

const isDiagonalMove = (move: GameMove) => {
  const colDiff = Math.abs(getColIndexByLetter(move.from.col) - getColIndexByLetter(move.to.col))
  const rowDiff = move.to.row - move.from.row

  if (colDiff !== 1) return false

  if (move.figure.color === GameColor.WHITE) {
    return rowDiff === 1
  }

  if (move.figure.color === GameColor.BLACK) {
    return rowDiff === -1
  }

  return false
}

const isLongMove = (move: GameMove) => {
  return Math.abs(move.from.row - move.to.row) === 2
}

export const isEnPassantMove = (
  move: GameMove,
  field: GameField,
  lastMove: Nullish<GameMove>
): boolean => {
  const hasFigureOnTargetCell = !!getFigureByPosition(field, move.to.row, move.to.col)

  if (isDiagonalMove(move) && !hasFigureOnTargetCell && lastMove) {
    const isEnemyPawn =
      lastMove.figure.type === move.figure.type && lastMove.figure.color !== move.figure.color
    const sameRow = move.from.row === lastMove.to.row
    const isCorrectRow =
      move.figure.color === GameColor.WHITE ? lastMove.to.row === 5 : lastMove.to.row === 4
    const isLastMoveLong = isLongMove(lastMove)

    return isEnemyPawn && sameRow && isCorrectRow && isLastMoveLong
  }

  return false
}

export const validateMoveByPawn = (
  move: GameMove,
  field: GameField,
  lastMove: Nullish<GameMove>
): boolean => {
  const direction = move.figure.color === GameColor.WHITE ? 1 : -1
  const rowDiff = move.to.row - move.from.row

  // move must be forward
  if (Math.sign(rowDiff) !== direction) {
    return false
  }

  const isSameCol = move.from.col === move.to.col
  const isStartPosition =
    (move.from.row === 2 && move.figure.color === GameColor.WHITE) ||
    (move.from.row === 7 && move.figure.color === GameColor.BLACK)
  const isShortMove = Math.abs(rowDiff) === 1

  const prevRowIndex = move.figure.color === GameColor.WHITE ? move.to.row - 1 : move.to.row + 1
  const targetFigure = getFigureByPosition(field, move.to.row, move.to.col)
  const figureOnPrevCell = getFigureByPosition(field, prevRowIndex, move.to.col)

  // short move forward without figure on target cell
  if (isSameCol && isShortMove && !targetFigure) {
    return true
  }

  if (isStartPosition && isLongMove(move) && isSameCol && !targetFigure && !figureOnPrevCell) {
    return true
  }

  const isEnemyFigureOnTargetCell = targetFigure && targetFigure.color !== move.figure.color

  if (isDiagonalMove(move) && isEnemyFigureOnTargetCell && isShortMove) {
    return true
  }

  return isEnPassantMove(move, field, lastMove)
}
