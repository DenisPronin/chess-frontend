import { GameColor, GameFenSymbols, GameField, GameFigureTypes } from '../../Game.types'
import { parseFen } from '../GameParser/GameFenParser'

const fenSymbolToFigureMap = {
  [GameFenSymbols.p]: GameFigureTypes.Pawn,
  [GameFenSymbols.r]: GameFigureTypes.Rook,
  [GameFenSymbols.n]: GameFigureTypes.Knight,
  [GameFenSymbols.b]: GameFigureTypes.Bishop,
  [GameFenSymbols.q]: GameFigureTypes.Queen,
  [GameFenSymbols.k]: GameFigureTypes.King,
  [GameFenSymbols.P]: GameFigureTypes.Pawn,
  [GameFenSymbols.R]: GameFigureTypes.Rook,
  [GameFenSymbols.N]: GameFigureTypes.Knight,
  [GameFenSymbols.B]: GameFigureTypes.Bishop,
  [GameFenSymbols.Q]: GameFigureTypes.Queen,
  [GameFenSymbols.K]: GameFigureTypes.King,
  [GameFenSymbols.Empty]: null,
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
