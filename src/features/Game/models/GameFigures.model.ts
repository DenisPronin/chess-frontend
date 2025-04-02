import { GameFigureTypes } from '../Game.types'

export const fenSymbolToFigureMap = {
  p: GameFigureTypes.Pawn,
  r: GameFigureTypes.Rook,
  n: GameFigureTypes.Knight,
  b: GameFigureTypes.Bishop,
  q: GameFigureTypes.Queen,
  k: GameFigureTypes.King,
  P: GameFigureTypes.Pawn,
  R: GameFigureTypes.Rook,
  N: GameFigureTypes.Knight,
  B: GameFigureTypes.Bishop,
  Q: GameFigureTypes.Queen,
  K: GameFigureTypes.King,
  '-': null,
}
