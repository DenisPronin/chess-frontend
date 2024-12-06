import { FC, ReactNode } from 'react'
import { IRoute } from './Route.types'

export interface IFeature {
  title?: string

  routes?: IRoute[]

  provider?: FC<{ children: ReactNode }>
}
