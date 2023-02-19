import { Routes, Route, Navigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { privateRoutes, publicRoutes, RouteNames } from '../routes'

export const AppRouter = () => {
  const { isAuth } = useTypeSelector((state) => state.auth)

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.MAIN} />} />
    </Routes>
  )
}
