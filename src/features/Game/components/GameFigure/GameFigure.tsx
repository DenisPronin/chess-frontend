import { useDraggable } from '@dnd-kit/core'
import { useMemo } from 'react'
import { gameAssetsFigures } from '../../assets/GameAssetsFigures'
import { GameFieldLetters, GameFigureState } from '../../Game.types'
import * as Styled from './GameFigure.styled'

export function GameFigure({
  figure,
  row,
  col,
}: {
  figure: GameFigureState
  row: number
  col: GameFieldLetters
}) {
  const imageSrc = useMemo(() => {
    return gameAssetsFigures[figure.type][figure.color]
  }, [figure])

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${figure.type}-${col}-${row}`,
    data: { figure, row, col },
  })

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 100,
      }
    : undefined

  return (
    <Styled.Figure src={imageSrc} ref={setNodeRef} {...listeners} {...attributes} style={style} />
  )
}
