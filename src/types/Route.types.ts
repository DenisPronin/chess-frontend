import { JSXElementConstructor } from 'react'

export interface IRoute {
  path: string
  element: JSXElementConstructor<any>
  private: boolean
}
