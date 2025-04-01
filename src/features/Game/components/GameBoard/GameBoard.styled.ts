import styled from 'styled-components'
import { GAME_FIELD_SIZE } from '../../Game.model'

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(${GAME_FIELD_SIZE}, 120px);
  gap: 0;
`
