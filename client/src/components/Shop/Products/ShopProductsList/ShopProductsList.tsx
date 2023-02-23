import { FC } from 'react'
import './ShopProductsList.css'
import { IShopProduct } from '../../../../models/IShop'
import { ShopProductCard } from './ShopProductCard/ShopProductCard'

interface IProps {
  products: IShopProduct[]
}

export const ShopProductsList: FC<IProps> = ({ products }) => {
  return (
    <div className="shop__productlist_itemlist">
      {products.map((product) => (
        <ShopProductCard product={product} key={product.product_id} />
      ))}
    </div>
  )
}
