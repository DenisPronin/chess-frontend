import { GameCell, GameColor, GameField, GameFieldLetters } from '../Game.types'
import { parseFen } from './GameFenParser'
import { fenSymbolToFigureMap } from './GameFigures.model'

export const FEATURE_NAME = 'Game'

export const GAME_FIELD_SIZE = 8

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

export const initialGameFigures = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
