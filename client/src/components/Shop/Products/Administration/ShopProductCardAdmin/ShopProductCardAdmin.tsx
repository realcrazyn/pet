import { FC, useState } from 'react'
import { IShopProduct } from '../../../../../models/IShop'

interface IProps {
  product: IShopProduct
}

export const ShopProductCardAdmin: FC<IProps> = ({ product }) => {
  return (
    <div>
      {product.product_name} - {product.product_quantity}
    </div>
  )
}
