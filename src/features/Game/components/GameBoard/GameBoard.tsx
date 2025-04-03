import { DndContext } from '@dnd-kit/core'
import type { DragEndEvent } from '@dnd-kit/core/dist/types'
import { useCallback } from 'react'
import { GameCell, GameCellWithFigure } from '../../Game.types'
import { makeMove, selectGameField, useGameStore } from '../../store/Game.store'
import { GameBoardCell } from '../GameBoardCell/GameBoardCell'
import * as Styled from './GameBoard.styled'

export function GameBoard() {
  const gameField = useGameStore(selectGameField)

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event

    if (!over || !active.data.current || !over.data.current) return

    const activeData = active.data.current as GameCellWithFigure
    const overData = over.data.current.cell as GameCell

    makeMove({
      figure: activeData.figure,
      from: { row: activeData.row, col: activeData.col },
      to: { row: overData.row, col: overData.col },
    })
  }, [])

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Styled.Board>
        {gameField.cells.map((row) => {
          return row.map((cell) => {
            return <GameBoardCell key={`${cell.col}${cell.row}`} cell={cell} />
          })
        })}
      </Styled.Board>
    </DndContext>
  )
}
