import { FC } from 'react'
import './ShopProductsList.css'
import { IShopProduct } from '../../../../models/IShop'

interface IProps {
  products: IShopProduct[]
}

export const ShopProductsList: FC<IProps> = ({ products }) => {
  return (
    <div>
      {products.map((p) => (
        <div key={p.product_id}>{p.product_name}</div>
      ))}
    </div>
  )
}
