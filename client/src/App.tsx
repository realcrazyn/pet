import { FC, useEffect } from 'react'
import './App.css'
import { useActions } from './hooks/useActions'
import { IUser } from './models/IUser'
import { Layout } from 'antd'
import { Navbar } from './components/Navbar'
import { AppRouter } from './components/AppRouter'

const App: FC = () => {
  const { setIsAuth, setUser } = useActions()
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
      setUser({ username: localStorage.getItem('username' || '') } as IUser)
    } else {
    }
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
