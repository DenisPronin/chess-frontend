import { Nullish } from '@/types'

export enum GameColor {
  BLACK = 'black',
  WHITE = 'white',
}

export enum GameFenSymbols {
  p = 'p',
  P = 'P',
  r = 'r',
  R = 'R',
  n = 'n',
  N = 'N',
  b = 'b',
  B = 'B',
  q = 'q',
  Q = 'Q',
  k = 'k',
  K = 'K',
  Empty = '-',
}

export enum GameFieldLetters {
  A = 'a',
  B = 'b',
  C = 'c',
  D = 'd',
  E = 'e',
  F = 'f',
  G = 'g',
  H = 'h',
}

export enum GameFigureTypes {
  Pawn = 'pawn',
  Rook = 'rook',
  Knight = 'knight',
  Bishop = 'bishop',
  Queen = 'queen',
  King = 'king',
}

export interface GameFigureState {
  type: GameFigureTypes
  color: GameColor
}

export interface GameCellPosition {
  row: number
  col: GameFieldLetters
}

export interface GameCell extends GameCellPosition {
  color: GameColor
  figure: Nullish<GameFigureState>
}

export interface GameCellWithFigure extends GameCellPosition {
  figure: GameFigureState
}

export interface GameField {
  cells: GameCell[][]
}

export interface GameMove {
  from: GameCellPosition
  to: GameCellPosition
  figure: GameFigureState
}

export interface GameState {
  field: GameField
  selectedCell: Nullish<GameCellPosition>
  moves: GameMove[]
  turn: GameColor
}
