import { UIText } from '@/features/UI'
import { Colors } from '@/variables'
import styled, { css } from 'styled-components'
import { GameColor } from '../../Game.types'

export const Cell = styled.div<{ $color: GameColor }>`
  background-color: ${({ $color }) => {
    return $color === GameColor.WHITE ? Colors.WHITE_CELL : Colors.BLACK_CELL
  }};
  height: 120px;
  width: 120px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CellTextStyle = css<{ $color: GameColor }>`
  position: absolute;
  font-weight: bold;
  line-height: 1;
  user-select: none;
  color: ${({ $color }) => ($color === GameColor.WHITE ? Colors.BLACK_CELL : Colors.WHITE_CELL)};
`

export const CellNumber = styled(UIText)<{ $color: GameColor }>`
  ${CellTextStyle};
  left: 5%;
  top: 5%;
`

export const CellLetter = styled.div<{ $color: GameColor }>`
  ${CellTextStyle};
  right: 5%;
  bottom: 5%;
`
