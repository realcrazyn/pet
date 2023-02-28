import { FC, useEffect, useState } from 'react'
import './ShopProducts.css'
import { Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { EmptyModal } from '../../modals/EmptyModal'
import { ShopProductCreationForm } from './ShopProductCreationForm/ShopProductCreationForm'
import { ShopProductsFilter } from './ShopProductsFilter/ShopProductsFilter'
import { ShopProductsList } from './ShopProductsList/ShopProductsList'
import { httpFetch } from '../../../http/generalHttp'
import { httpShopProducts } from '../../../http/http'
import { IShopProduct } from '../../../models/IShop'
import { useActions } from '../../../hooks/useActions'
import { useTypeSelector } from '../../../hooks/useTypeSelector'
import useDebounce from '../../../hooks/useDebounce'

interface IProps {}

export const ShopProducts: FC<IProps> = ({}) => {
  const { shopFilter } = useTypeSelector((state) => state.shop)
  const { setShopFilter } = useActions()

  const [searchValue, setSearchValue] = useState('')
  const [products, setProducts] = useState<IShopProduct[]>([])

  let value = useDebounce(searchValue, 500)

  useEffect(() => {
    setShopFilter({ ...shopFilter, serarch_value: value })
  }, [value])

  useEffect(() => {
    httpFetch(httpShopProducts, 'POST', shopFilter).then(
      (res) => Array.isArray(res.items) && setProducts(res.items)
    )
  }, [shopFilter])

  return (
    <section className="shoppage__body">
      <div className="shoppage__body_content">
        <div className="shoppage__body_content-filter">
          <ShopProductsFilter />
        </div>
        <div className="shoppage__body_content-product">
          <div className="shoppage__body_search">
            <Input
              allowClear
              placeholder="Поиск по товарам"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
              className="shoppage__body_search-input"
              bordered={false}
            />
          </div>
          <ShopProductsList products={products} />
        </div>
      </div>
    </section>
  )
}
