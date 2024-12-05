import { IFeature } from '@/types'
import { FEATURE_NAME } from './Auth.model'
import { authRouter } from './Auth.router'

export class AuthFeature implements IFeature {
  static title = FEATURE_NAME

  static routes = authRouter
}
