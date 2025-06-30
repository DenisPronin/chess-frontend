import { GameFenSymbols } from '../Game.types'

export function parseFen(fen: string) {
  const fenRows = fen.split('/')
  return fenRows.map((row) => {
    const cells: GameFenSymbols[] = []
    row.split('').forEach((cell) => {
      const amountEmptyCells = Number(cell)
      const isNotEmptyCell = Number.isNaN(amountEmptyCells)
      if (isNotEmptyCell) {
        cells.push(cell as GameFenSymbols)
        return
      }

      for (let i = 0; i < amountEmptyCells; i++) {
        cells.push(GameFenSymbols.Empty)
      }
    })

    return cells
  })
}
