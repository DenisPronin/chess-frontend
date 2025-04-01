import { UIText } from '@/features/UI'
import { Colors } from '@/variables'
import styled, { css } from 'styled-components'
import { GameCellColor } from '../../Game.types'

export const Cell = styled.div<{ $color: GameCellColor }>`
  background-color: ${({ $color }) => {
    return $color === GameCellColor.WHITE ? Colors.WHITE_CELL : Colors.BLACK_CELL
  }};
  height: 120px;
  width: 120px;
  position: relative;
`

const CellTextStyle = css<{ $color: GameCellColor }>`
  position: absolute;
  font-weight: bold;
  line-height: 1;
  user-select: none;
  color: ${({ $color }) =>
    $color === GameCellColor.WHITE ? Colors.BLACK_CELL : Colors.WHITE_CELL};
`

export const CellNumber = styled(UIText)<{ $color: GameCellColor }>`
  ${CellTextStyle}
  left: 5%;
  top: 5%;
`

export const CellLetter = styled.div<{ $color: GameCellColor }>`
  ${CellTextStyle}
  right: 5%;
  bottom: 5%;
`
