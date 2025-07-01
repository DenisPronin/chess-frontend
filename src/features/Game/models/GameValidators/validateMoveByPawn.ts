import { Nullish } from '@/types'
import { GameColor, GameField, GameMove } from '../../Game.types'
import { checkIsSameCol, getFigureByPosition } from '../Game.common'
import { checkIsTargetEnemy, getMovePositionDiff } from './GameValidators.common'

const checkIsMoveDiagonal = (move: GameMove) => {
  const { colDiff, rowDiff } = getMovePositionDiff(move)

  if (colDiff !== 1) return false

  if (move.figure.color === GameColor.WHITE) {
    return rowDiff === 1
  }

  if (move.figure.color === GameColor.BLACK) {
    return rowDiff === -1
  }

  return false
}

const checkIsLongMove = (move: GameMove) => {
  return Math.abs(move.from.row - move.to.row) === 2
}

export const checkIsEnPassantMove = (
  move: GameMove,
  field: GameField,
  lastMove: Nullish<GameMove>
): boolean => {
  const hasFigureOnTargetCell = !!getFigureByPosition(field, move.to.row, move.to.col)

  if (checkIsMoveDiagonal(move) && !hasFigureOnTargetCell && lastMove) {
    const isEnemyPawn =
      lastMove.figure.type === move.figure.type && lastMove.figure.color !== move.figure.color
    const sameRow = move.from.row === lastMove.to.row
    const isCorrectRow =
      move.figure.color === GameColor.WHITE ? lastMove.to.row === 5 : lastMove.to.row === 4
    const isLastMoveLong = checkIsLongMove(lastMove)

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

  const isSameCol = checkIsSameCol(move)
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

  // long move fron start position
  if (isStartPosition && checkIsLongMove(move) && isSameCol && !targetFigure && !figureOnPrevCell) {
    return true
  }

  const isEnemyFigureOnTargetCell = checkIsTargetEnemy(move, field)

  if (checkIsMoveDiagonal(move) && isEnemyFigureOnTargetCell && isShortMove) {
    return true
  }

  return checkIsEnPassantMove(move, field, lastMove)
}
