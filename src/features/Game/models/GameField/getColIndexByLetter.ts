import { GameFieldLetters } from '../../Game.types'

export const getColIndexByLetter = (letter: GameFieldLetters): number => {
  const letters = Object.values(GameFieldLetters)
  return letters.indexOf(letter)
}
