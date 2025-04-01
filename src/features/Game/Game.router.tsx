import { LayoutMain } from '@/app/imports/App.components'
import { IRouter } from '@/types'
import { GamePage } from './components/GamePage/GamePage'

export const gameRouter: IRouter = {
  layout: {
    path: 'app',
    element: LayoutMain,
  },
  routes: [
    {
      path: 'game',
      element: GamePage,
      private: true,
    },
  ],
}
