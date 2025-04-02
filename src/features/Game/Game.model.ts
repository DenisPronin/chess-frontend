import { GameCell, GameColor, GameField, GameFieldLetters, GameFigureTypes } from './Game.types'

export const FEATURE_NAME = 'Game'

export const GAME_FIELD_SIZE = 8

export function initGameField(figuresFen: string): GameField {
  const cells: GameCell[][] = []
  const letters = Object.values(GameFieldLetters)
  console.log(figuresFen)

  for (let i = 0; i < GAME_FIELD_SIZE; i++) {
    const row: GameCell[] = []
    for (let j = 0; j < GAME_FIELD_SIZE; j++) {
      let colors = [GameColor.BLACK, GameColor.WHITE]
      if (i % 2 === 0) {
        colors = colors.reverse()
      }
      const color = j % 2 === 0 ? colors[0] : colors[1]

      const rowIndex = GAME_FIELD_SIZE - i
      const colIndex = letters[j]
      const figure = { color: GameColor.BLACK, type: GameFigureTypes.Pawn }

      row.push({
        color,
        row: rowIndex,
        col: colIndex,
        figure,
      })
    }
    cells.push(row)
  }

  return {
    cells,
  }
}

export const initialGameFigures = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
