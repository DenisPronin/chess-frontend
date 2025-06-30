import { Nullish } from '@/types'
import {
  GameCell,
  GameColor,
  GameField,
  GameFieldLetters,
  GameFigureState,
  GameFigureTypes,
  GameMove,
} from '../Game.types'
import { parseFen } from './GameFenParser.model.ts'
import { fenSymbolToFigureMap } from './GameFigures.model'

export const FEATURE_NAME = 'Game'

export const GAME_FIELD_SIZE = 8

export const initialGameFigures = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'

export function initGameField(figuresFen: string): GameField {
  const cells: GameCell[][] = []

  for (let i = 0; i < GAME_FIELD_SIZE; i++) {
    const row: GameCell[] = []
    for (let j = 0; j < GAME_FIELD_SIZE; j++) {
      row.push(createCell(i, j))
    }
    cells.push(row)
  }

  return restorePosition({ cells }, figuresFen)
}

function createCell(i: number, j: number): GameCell {
  const letters = Object.values(GameFieldLetters)
  let colors = [GameColor.BLACK, GameColor.WHITE]
  if (i % 2 === 0) {
    colors = colors.reverse()
  }
  const color = j % 2 === 0 ? colors[0] : colors[1]

  const rowIndex = GAME_FIELD_SIZE - i
  const colIndex = letters[j]

  return {
    color,
    row: rowIndex,
    col: colIndex,
    figure: null,
  }
}

export function restorePosition(field: GameField, fen: string) {
  const fenField = parseFen(fen)

  const newCells = field.cells.map((row) => {
    return row.slice()
  })

  for (let i = 0; i < newCells.length; i++) {
    const row = newCells[i]
    for (let j = 0; j < row.length; j++) {
      const cell = row[j]
      const fenCell = fenField[i][j]

      const figureType = fenSymbolToFigureMap[fenCell]
      if (figureType) {
        const color = fenCell === fenCell.toUpperCase() ? GameColor.WHITE : GameColor.BLACK
        cell.figure = {
          type: figureType,
          color,
        }
      }
    }
  }

  return { cells: newCells }
}

export const updateCellFigure = (
  field: GameField,
  row: number,
  col: GameFieldLetters,
  figure: Nullish<GameFigureState>
): GameField => {
  return {
    ...field,
    cells: field.cells.map((rowItem) => {
      return rowItem.map((cellItem) => {
        if (cellItem.row === row && cellItem.col === col) {
          return { ...cellItem, figure }
        }

        return cellItem
      })
    }),
  }
}

const getColIndexByLetter = (letter: GameFieldLetters): number => {
  const letters = Object.values(GameFieldLetters)
  return letters.indexOf(letter)
}

// можно ходить по вертикали на одну клетку, если нет препятствий
// или если пешка находится на начальной позиции, то можно ходить на две клетки, нельзя перепрыгивать фигуры
// или можно рубить фигуру противника, если она находится на соседней клетке по диагонали впереди
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

export const validatorsMoveByFigure = {
  [GameFigureTypes.Pawn]: validateMoveByPawn,
  [GameFigureTypes.Rook]: validateMoveByPawn,
  [GameFigureTypes.Knight]: validateMoveByPawn,
  [GameFigureTypes.Bishop]: validateMoveByPawn,
  [GameFigureTypes.Queen]: validateMoveByPawn,
  [GameFigureTypes.King]: validateMoveByPawn,
}

export const validateMove = (move: GameMove, field: GameField): boolean => {
  return validatorsMoveByFigure[move.figure.type](move, field)
}
