import { FC } from 'react'
import './UserPage.css'
import { useActions } from '../../hooks/useActions'
import { Button, Tabs } from 'antd'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../../routes'
import { PlusOutlined } from '@ant-design/icons'
import { ShopProductCreationForm } from '../Shop/Products/ShopProductCreationForm/ShopProductCreationForm'
import { EmptyModal } from '../modals/EmptyModal'
import { ShopProductCategories } from '../Shop/Products/ShopProductCategories/ShopProductCategories'
import { ShopProducts } from '../Shop/Products/ShopProducts'
import { useTypeSelector } from '../../hooks/useTypeSelector'

export const UserPage: FC = () => {
  const { authLogout } = useActions()
  const navigate = useNavigate()
  const { user } = useTypeSelector((state) => state.auth)

  return (
    <div className="userpage__content">
      <Tabs centered destroyInactiveTabPane>
        <Tabs.TabPane key={1} tab={'Пользователь'}>
          <Button
            onClick={() => {
              authLogout()
              navigate(RouteNames.MAIN)
            }}
          >
            Logout
          </Button>
        </Tabs.TabPane>
        {user.isAdmin && (
          <>
            <Tabs.TabPane key={2} tab={'Товары'}>
              <div>
                <Button type="primary" icon={<PlusOutlined />}>
                  <EmptyModal
                    destroy
                    title="Форма создания товара"
                    component={<ShopProductCreationForm />}
                  />
                </Button>
                <Button type="primary" icon={<PlusOutlined />}>
                  <EmptyModal
                    destroy
                    title="Форма создания категорий"
                    component={<ShopProductCategories />}
                  />
                </Button>
              </div>
              <section>
                <ShopProducts />
              </section>
            </Tabs.TabPane>
            <Tabs.TabPane key={3} tab={'Заявки'}></Tabs.TabPane>
          </>
        )}
      </Tabs>
    </div>
  )
}
