import { IRoute } from '@/types'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { appFeatures } from './App.features'

function getRoutes() {
  const routes: IRoute[] = []
  appFeatures.forEach((feature) => {
    if (feature.routes) {
      routes.push(...feature.routes)
    }
  })

  return routes
}

const routes = getRoutes()

// TODO add protected routes
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.private ? <route.element /> : <route.element />}
              />
            )
          })}
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
