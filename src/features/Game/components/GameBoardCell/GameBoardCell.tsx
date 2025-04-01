import { GameCell } from '../../Game.types'
import * as Styled from './GameBoardCell.styled'

export function GameBoardCell({ cell }: { cell: GameCell }) {
  return <Styled.Cell $color={cell.color} />
}
