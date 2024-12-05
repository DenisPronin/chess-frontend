import { AppProviders } from './App.providers'
import { AppRouter } from './App.router'

export function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  )
}
