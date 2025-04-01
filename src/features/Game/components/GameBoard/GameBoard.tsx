import { selectGameField, useGameStore } from '../../store/Game.store'
import { GameBoardCell } from '../GameBoardCell/GameBoardCell'
import * as Styled from './GameBoard.styled'

export function GameBoard() {
  const gameField = useGameStore(selectGameField)

  return (
    <Styled.Board>
      {gameField.cells.map((row) => {
        return row.map((cell) => {
          return <GameBoardCell key={`${cell.col}${cell.row}`} cell={cell} />
        })
      })}
    </Styled.Board>
  )
}
