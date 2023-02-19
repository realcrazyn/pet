import React from 'react'
import { Login } from '../pages/Login'

import { Main } from '../pages/Main'
import { Shop } from '../pages/Shop/Shop'

export interface IRoute {
  path: string
  component: React.ComponentType
}

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/',
  SHOP = '/shop',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.SHOP, component: Shop },
]
export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.SHOP, component: Shop },
]
