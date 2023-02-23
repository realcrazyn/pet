import React from 'react'
import { Login } from '../pages/Login'

import { Main } from '../pages/Main'
import { Shop } from '../pages/Shop/Shop'
import { User } from '../pages/User'

export interface IRoute {
  path: string
  component: React.ComponentType
}

export enum RouteNames {
  LOGIN = '/login',
  MAIN = '/',
  SHOP = '/shop',
  USER = '/user',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.SHOP, component: Shop },
  { path: RouteNames.USER, component: User },
]
export const privateRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.SHOP, component: Shop },
  { path: RouteNames.USER, component: User },
]
