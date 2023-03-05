import { FC } from 'react'
import './ShopProductsList.css'
import { IShopProduct } from '../../../../models/IShop'
import { ShopProductCard } from './ShopProductCard/ShopProductCard'
import { useTypeSelector } from '../../../../hooks/useTypeSelector'
import { ShopProductCardAdmin } from '../Administration/ShopProductCardAdmin/ShopProductCardAdmin'

interface IProps {
  products: IShopProduct[]
}

export const ShopProductsList: FC<IProps> = ({ products }) => {
  const { user } = useTypeSelector((state) => state.auth)

  return (
    <div className="shop__productlist_itemlist">
      {products.map((product) =>
        user.isAdmin ? (
          <ShopProductCardAdmin product={product} key={product.product_id} />
        ) : (
          <ShopProductCard product={product} key={product.product_id} />
        )
      )}
    </div>
  )
}
