import { FC, ReactNode } from 'react'

export interface IFeature {
  title?: string

  provider?: FC<{ children: ReactNode }>
}
