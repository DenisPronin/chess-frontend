import { GameCell, GameFieldLetters } from '../../Game.types'
import * as Styled from './GameBoardCell.styled'

export function GameBoardCell({ cell }: { cell: GameCell }) {
  return (
    <Styled.Cell $color={cell.color}>
      {cell.col === GameFieldLetters.A && (
        <Styled.CellNumber $color={cell.color}>{cell.row}</Styled.CellNumber>
      )}

      {cell.row === 1 && <Styled.CellLetter $color={cell.color}>{cell.col}</Styled.CellLetter>}
    </Styled.Cell>
  )
}
