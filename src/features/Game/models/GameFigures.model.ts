import { GameColor, GameFenSymbols, GameFigureTypes } from '../Game.types'

export const figuresMap = {
  [GameFigureTypes.Pawn]: {
    [GameColor.BLACK]: {
      image: 'bp.png',
      fenSymbol: GameFenSymbols.p,
    },
    [GameColor.WHITE]: {
      image: 'wp.png',
      fenSymbol: GameFenSymbols.P,
    },
  },
  [GameFigureTypes.Rook]: {
    [GameColor.BLACK]: {
      image: 'br.png',
      fenSymbol: GameFenSymbols.r,
    },
    [GameColor.WHITE]: {
      image: 'wr.png',
      fenSymbol: GameFenSymbols.R,
    },
  },
  [GameFigureTypes.Knight]: {
    [GameColor.BLACK]: {
      image: 'bn.png',
      fenSymbol: GameFenSymbols.n,
    },
    [GameColor.WHITE]: {
      image: 'wn.png',
      fenSymbol: GameFenSymbols.N,
    },
  },
  [GameFigureTypes.Bishop]: {
    [GameColor.BLACK]: {
      image: 'bb.png',
      fenSymbol: GameFenSymbols.b,
    },
    [GameColor.WHITE]: {
      image: 'wb.png',
      fenSymbol: GameFenSymbols.B,
    },
  },
  [GameFigureTypes.Queen]: {
    [GameColor.BLACK]: {
      image: 'bq.png',
      fenSymbol: GameFenSymbols.q,
    },
    [GameColor.WHITE]: {
      image: 'wq.png',
      fenSymbol: GameFenSymbols.Q,
    },
  },
  [GameFigureTypes.King]: {
    [GameColor.BLACK]: {
      image: 'bk.png',
      fenSymbol: GameFenSymbols.k,
    },
    [GameColor.WHITE]: {
      image: 'wk.png',
      fenSymbol: GameFenSymbols.K,
    },
  },
}

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
