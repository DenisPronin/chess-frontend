import { Colors } from '@/variables'
import styled from 'styled-components'
import { GameCellColor } from '../../Game.types'

export const Cell = styled.div<{ $color: GameCellColor }>`
  background-color: ${({ $color }) => {
    return $color === GameCellColor.WHITE ? Colors.WHITE_CELL : Colors.BLACK_CELL
  }};
  height: 120px;
  width: 120px;
`
