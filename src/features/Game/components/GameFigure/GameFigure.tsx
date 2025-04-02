import Pawn from '@/features/Assets/img/figures/bp.png'
import { GameFigureState } from '../../Game.types'
import * as Styled from './GameFigure.styled'

export function GameFigure({ figure }: { figure: GameFigureState }) {
  console.log(figure)
  return <Styled.Figure src={Pawn} />
}
