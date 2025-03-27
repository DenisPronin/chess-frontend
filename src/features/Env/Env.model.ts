export const FEATURE_NAME = 'env'

export enum EnvironmentType {
  Prod = 'production',
  Dev = 'development',
  Local = 'local',
}

export const envVersion = import.meta.env.VITE_APP_VERSION
export const appEnv = import.meta.env.VITE_APP_ENV as EnvironmentType

export function showVersion() {
  console.info(`App version: ${envVersion} (${appEnv})`)
}
