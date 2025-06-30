import { GameColor, GameField, GameMove } from '../../Game.types'
import { GAME_FIELD_SIZE } from '../Game.model'
import { getColIndexByLetter } from '../GameField/getColIndexByLetter'

export const validateMoveByPawn = (move: GameMove, field: GameField): boolean => {
  console.log('validateMoveByPawn', move, field)
  const isSameCol = move.from.col === move.to.col
  const isStartPosition =
    (move.from.row === 2 && move.figure.color === GameColor.WHITE) ||
    (move.from.row === 7 && move.figure.color === GameColor.BLACK)
  const isLongMove = Math.abs(move.from.row - move.to.row) === 2
  const isShortMove = Math.abs(move.from.row - move.to.row) === 1

  const rowToIndex = GAME_FIELD_SIZE - move.to.row
  const prevRowIndex = move.figure.color === GameColor.WHITE ? rowToIndex - 2 : rowToIndex + 2
  const colToIndex = getColIndexByLetter(move.to.col)
  const hasFigureOnTargetCell = !!field.cells[rowToIndex][colToIndex].figure
  const hasFigureOnPrevCell = !!field.cells[prevRowIndex][colToIndex].figure

  // short move forward without figure on target cell
  if (isSameCol && isShortMove && !hasFigureOnTargetCell) {
    return true
  }

  if (
    isStartPosition &&
    isLongMove &&
    isSameCol &&
    !hasFigureOnTargetCell &&
    !hasFigureOnPrevCell
  ) {
    return true
  }

  console.log(isSameCol, isStartPosition, isLongMove, isShortMove, hasFigureOnTargetCell)
  return false
}
