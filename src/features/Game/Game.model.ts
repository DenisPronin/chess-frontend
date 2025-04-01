import { GameCellColor, GameField, GameFieldLetters } from './Game.types'

export const FEATURE_NAME = 'Game'

export const GAME_FIELD_SIZE = 8

export function initGameField(): GameField {
  const cells = []
  const letters = Object.values(GameFieldLetters)

  for (let i = 0; i < GAME_FIELD_SIZE; i++) {
    const row = []
    for (let j = 0; j < GAME_FIELD_SIZE; j++) {
      let colors = [GameCellColor.BLACK, GameCellColor.WHITE]
      if (i % 2 === 0) {
        colors = colors.reverse()
      }
      const color = j % 2 === 0 ? colors[0] : colors[1]

      const rowIndex = GAME_FIELD_SIZE - i
      const colIndex = letters[j]

      row.push({ color, row: rowIndex, col: colIndex })
    }
    cells.push(row)
  }

  return {
    cells,
  }
}
