import { GameCellPosition, GameFieldLetters, GameMove } from '../../Game.types'
import { GAME_FIELD_SIZE } from '../Game.model'
import { getColIndexByLetter } from '../GameField/getColIndexByLetter'

export const isSameCol = (move: GameMove): boolean => {
  return move.from.col === move.to.col
}

export const isSameRow = (move: GameMove): boolean => {
  return move.from.row === move.to.row
}

export const getRowIndex = (row: number): number => {
  return GAME_FIELD_SIZE - row
}

export const getIntermediateCells = (move: GameMove): GameCellPosition[] => {
  const cells: GameCellPosition[] = []

  const fromRow = move.from.row
  const toRow = move.to.row
  const fromCol = getColIndexByLetter(move.from.col)
  const toCol = getColIndexByLetter(move.to.col)

  const rowStep = Math.sign(toRow - fromRow)
  const colStep = Math.sign(toCol - fromCol)

  let currentRow = fromRow + rowStep
  let currentCol = fromCol + colStep

  while (currentRow !== move.to.row || currentCol !== toCol) {
    const colLetter = Object.values(GameFieldLetters)[currentCol]

    if (!colLetter) break

    cells.push({
      row: currentRow,
      col: colLetter,
    })

    currentRow += rowStep
    currentCol += colStep
  }

  return cells
}
