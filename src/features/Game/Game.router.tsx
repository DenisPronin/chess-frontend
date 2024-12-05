import { IRoute } from '@/types'
import { GamePage } from './components/GamePage/GamePage'

export const gameRouter: IRoute[] = [
  {
    path: '/',
    element: GamePage,
    private: false,
  },
]
