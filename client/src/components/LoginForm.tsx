import { Form, Input, Button } from 'antd'
import { FC, useState } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { IUser } from '../models/IUser'
import { rules } from '../utils/rules'

export const LoginForm: FC = () => {
  const { authLogin, authRegister, setIsAuth } = useActions()
  const [user, setUser] = useState({} as IUser)
  const { error, isLoading } = useTypeSelector((state) => state.auth)

  const submitHandler = () => {
    authLogin(user.username, user.password)
    setIsAuth(true)
  }

  const registerHandler = () => {
    authRegister(user.username, user.password)
  }

  return (
    <Form onFinish={submitHandler}>
      <div style={{ color: 'red' }}>{error}</div>
      <Form.Item
        label="Логин"
        name="username"
        rules={[rules.required('Введите имя пользователя!')]}
      >
        <Input
          value={user.username}
          onChange={(e) => {
            setUser({ ...user, username: e.target.value })
          }}
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required('Введите пароль!')]}
      >
        <Input.Password
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
        <Button type="primary" onClick={registerHandler} loading={isLoading}>
          Регистрация
        </Button>
      </Form.Item>
    </Form>
  )
}
