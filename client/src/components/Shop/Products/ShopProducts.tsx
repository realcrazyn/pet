import { FC, useEffect } from 'react'
import './ShopProducts.css'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { EmptyModal } from '../../modals/EmptyModal'
import { ShopProductCreationForm } from './ShopProductCreationForm/ShopProductCreationForm'
import { ShopProductsFilter } from './ShopProductsFilter/ShopProductsFilter'
import { ShopProductsList } from './ShopProductsList/ShopProductsList'
import { httpFetch } from '../../../http/generalHttp'
import { httpShopProducts } from '../../../http/http'

interface IProps {}

export const ShopProducts: FC<IProps> = ({}) => {
  useEffect(() => {
    httpFetch(httpShopProducts, 'GET')
  }, [])

  return (
    <section>
      <div>
        <Button type="primary" icon={<PlusOutlined />}>
          <EmptyModal
            title="Форма создания товара"
            component={<ShopProductCreationForm />}
          />
        </Button>
      </div>
      <div>
        <div>
          <ShopProductsFilter />
        </div>
        <div>
          <ShopProductsList />
        </div>
      </div>
    </section>
  )
}
