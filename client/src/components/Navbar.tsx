import { Layout, Menu, Button, Popover } from 'antd'
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
  UserOutlined,
} from '@ant-design/icons'
import { LoginForm } from './LoginForm'

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
            className={path === RouteNames.MAIN ? 'navbar__item_selected' : ''}
            icon={<HomeOutlined />}
            onClick={() => {
              navigate(RouteNames.MAIN)
            }}
          >
            Главная
          </Menu.Item>
          <Menu.Item
            className={path === RouteNames.SHOP ? 'navbar__item_selected' : ''}
            key="3"
            icon={<ShopOutlined />}
            onClick={() => {
              navigate(RouteNames.SHOP)
            }}
          >
            В магазин
          </Menu.Item>
          <Menu.Item
            style={{ position: 'absolute', right: 0 }}
            className={path === RouteNames.USER ? 'navbar__item_selected' : ''}
            key="4"
            icon={
              <UserOutlined
                style={{
                  border: '2px solid white',
                  padding: 8,
                  fontSize: 18,
                  borderRadius: '50%',
                }}
              />
            }
            onClick={() => {
              navigate(RouteNames.USER)
            }}
          ></Menu.Item>
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
            <Popover trigger={['click']} content={LoginForm}>
              <Menu.Item
                style={{ position: 'absolute', right: 0 }}
                className={
                  path === RouteNames.USER ? 'navbar__item_selected' : ''
                }
                key="4"
                icon={
                  <UserOutlined
                    style={{
                      border: '2px solid white',
                      padding: 8,
                      fontSize: 18,
                      borderRadius: '50%',
                    }}
                  />
                }
                // onClick={() => {
                //   navigate(RouteNames.USER)
                // }}
              ></Menu.Item>
            </Popover>
          </Menu>
        </>
      )}
    </>
  )
}
