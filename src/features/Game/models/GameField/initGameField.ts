import { GameCell, GameColor, GameField, GameFieldLetters } from '../../Game.types'
import { GAME_FIELD_SIZE } from '../Game.model'
import { restorePosition } from '../GameField/restorePosition'

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
