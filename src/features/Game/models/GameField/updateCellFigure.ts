import { Nullish } from '@/types'
import { GameField, GameFieldLetters, GameFigureState } from '../../Game.types'

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
