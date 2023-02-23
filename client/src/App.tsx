import { FC, useEffect } from 'react'
import './App.css'
import { useActions } from './hooks/useActions'
import { IUser } from './models/IUser'
import { Layout, notification } from 'antd'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'
import { notificationPlacement } from './consts'

const App: FC = () => {
  const { setIsAuth, setAuthUser } = useActions()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      setAuthUser({ username: localStorage.getItem('username' || '') } as IUser)
    } else {
    }
    notification.info({
      message: (
        <p style={{ display: 'inline', fontSize: 14 }}>
          Для отображения полного перечня функций можно залигиниться как
          администратор admin - 124680
        </p>
      ),
      placement: notificationPlacement,
      duration: 0,
    })
  }, [])

  return (
    <Layout className="h100">
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App
