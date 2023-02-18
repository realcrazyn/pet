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
} from '@ant-design/icons'

export const Navbar: FC = () => {
  const { isAuth, user } = useTypeSelector((state) => state.auth)

  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      {isAuth ? (
        <Layout.Sider style={{ width: 256 }} collapsed={collapsed}>
          <Menu mode="inline" theme="dark" style={{ marginTop: 100 }}>
            <Menu.Item
              key="1"
              icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
              onClick={() => {
                setCollapsed(!collapsed)
              }}
            >
              Свернуть
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<HomeOutlined />}
              onClick={() => {
                navigate(RouteNames.MAIN)
              }}
            >
              На главную
            </Menu.Item>
            <Menu.Item key="3" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
          </Menu>
        </Layout.Sider>
      ) : (
        <></>
      )}
    </>
  )
}
