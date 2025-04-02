import { useEffect, useState } from 'react'
import { GameFigureState } from '../../Game.types'
import { figuresMap } from '../../models/GameFigures.model'
import * as Styled from './GameFigure.styled'

const images = import.meta.glob('@/features/Assets/img/figures/*.png')

export function GameFigure({ figure }: { figure: GameFigureState }) {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  useEffect(() => {
    const imgPath = figuresMap[figure.type][figure.color].image
    const importPath = `/src/features/Assets/img/figures/${imgPath}`

    if (images[importPath]) {
      images[importPath]().then((mod) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setImageSrc((mod as any).default)
      })
    }
  }, [figure])

  if (!imageSrc) return null

  return <Styled.Figure src={imageSrc} />
}
