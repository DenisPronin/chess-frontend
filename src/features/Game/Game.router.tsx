import { IRouter } from '@/types'
import { GamePage } from './components/GamePage/GamePage'

export const gameRouter: IRouter = {
  routes: [
    {
      path: 'game',
      element: GamePage,
      private: true,
    },
  ],
}
