import { useDroppable } from '@dnd-kit/core'
import { useMemo } from 'react'
import { GameCell, GameFieldLetters } from '../../Game.types'
import { chooseCell, selectGameSelectedCell, useGameStore } from '../../store/Game.store'
import { GameFigure } from '../GameFigure/GameFigure'
import * as Styled from './GameBoardCell.styled'

export function GameBoardCell({ cell }: { cell: GameCell }) {
  const selectedCell = useGameStore(selectGameSelectedCell)

  const isSelected = useMemo(() => {
    return cell.row === selectedCell?.row && cell.col === selectedCell?.col
  }, [cell, selectedCell])

  const handleClick = () => {
    if (!cell.figure) return

    chooseCell(cell.row, cell.col)
  }

  const { setNodeRef } = useDroppable({
    id: `${cell.col}-${cell.row}`,
    data: { cell },
  })

  return (
    <Styled.Cell
      ref={setNodeRef}
      $color={cell.color}
      $isSelected={isSelected}
      onClick={handleClick}
    >
      {cell.col === GameFieldLetters.A && (
        <Styled.CellNumber $color={cell.color}>{cell.row}</Styled.CellNumber>
      )}

      {cell.row === 1 && <Styled.CellLetter $color={cell.color}>{cell.col}</Styled.CellLetter>}

      {cell.figure && <GameFigure figure={cell.figure} row={cell.row} col={cell.col} />}
    </Styled.Cell>
  )
}
