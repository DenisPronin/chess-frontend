export enum GameCellColor {
  BLACK = 'black',
  WHITE = 'white',
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

export interface GameCell {
  color: GameCellColor
  row: number
  col: GameFieldLetters
}

export interface GameField {
  cells: GameCell[][]
}

export interface GameState {
  field: GameField
}
