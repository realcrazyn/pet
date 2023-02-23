import { FC } from 'react'
import './UserPage.css'
import { useActions } from '../../hooks/useActions'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { PlusOutlined } from '@ant-design/icons'
import { ShopProductCreationForm } from '../Shop/Products/ShopProductCreationForm/ShopProductCreationForm'
import { EmptyModal } from '../modals/EmptyModal'

export const UserPage: FC = () => {
  const { authLogout } = useActions()
  const navigate = useNavigate()
  return (
    <div>
      <Button type="primary" icon={<PlusOutlined />}>
        <EmptyModal
          title="Форма создания товара"
          component={<ShopProductCreationForm />}
        />
      </Button>

      <Button
        onClick={() => {
          authLogout()
          navigate(RouteNames.MAIN)
        }}
      >
        Logout
      </Button>
    </div>
  )
}
