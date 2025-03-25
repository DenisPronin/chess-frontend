export const FEATURE_NAME = 'env'

export const envVersion = import.meta.env.VITE_APP_VERSION
export const appEnv = import.meta.env.VITE_APP_ENV

export function showVersion() {
  console.info(`App version: ${envVersion} (${appEnv})`)
}
