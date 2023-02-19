import { Layout, Menu, Button } from 'antd'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { RouteNames } from '../routes'
import {
  RightOutlined,
  LeftOutlined,
  HomeOutlined,
  PieChartOutlined,
  ShopOutlined,
} from '@ant-design/icons'

export const Navbar: FC = () => {
  const { isAuth, user } = useTypeSelector((state) => state.auth)

  const navigate = useNavigate()
  const path = window.location.pathname

  return (
    <>
      {isAuth ? (
        <Menu mode="horizontal" theme="dark">
          <Menu.Item
            key="2"
            icon={<HomeOutlined />}
            onClick={() => {
              navigate(RouteNames.MAIN)
            }}
          >
            На главную
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ShopOutlined />}
            onClick={() => {
              navigate(RouteNames.SHOP)
            }}
          >
            В магазин
          </Menu.Item>

          <Menu.Item key="4" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
        </Menu>
      ) : (
        <>
          {' '}
          <Menu mode="horizontal" theme="dark">
            <Menu.Item
              key="2"
              className={
                path === RouteNames.MAIN ? 'navbar__item_selected' : ''
              }
              icon={<HomeOutlined />}
              onClick={() => {
                navigate(RouteNames.MAIN)
              }}
            >
              Главная
            </Menu.Item>
            <Menu.Item
              className={
                path === RouteNames.SHOP ? 'navbar__item_selected' : ''
              }
              key="3"
              icon={<ShopOutlined />}
              onClick={() => {
                navigate(RouteNames.SHOP)
              }}
            >
              В магазин
            </Menu.Item>
          </Menu>
        </>
      )}
    </>
  )
}
