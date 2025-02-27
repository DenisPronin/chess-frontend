import { FC, ReactNode } from 'react'
import { IRouter } from './Route.types'

export interface IFeature {
  title?: string

  router?: IRouter

  provider?: FC<{ children: ReactNode }>
}
