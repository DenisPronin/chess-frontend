import { useMemo } from 'react'
import { gameAssetsFigures } from '../../assets/GameAssetsFigures'
import { GameFigureState } from '../../Game.types'
import * as Styled from './GameFigure.styled'

export function GameFigure({ figure }: { figure: GameFigureState }) {
  const imageSrc = useMemo(() => {
    return gameAssetsFigures[figure.type][figure.color]
  }, [figure])

  return <Styled.Figure src={imageSrc} />
}
