import { FC } from 'react'
import './ShopProductCard.css'
import { IShopProduct } from '../../../../../models/IShop'
import { Button, Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { EmptyModal } from '../../../../modals/EmptyModal'

interface IProps {
  product: IShopProduct
}

export const ShopProductCard: FC<IProps> = ({ product }) => {
  return (
    <Card
      hoverable
      style={{ width: 'calc(20% - 20px)', margin: 10 }}
      cover={
        <>
          <img alt="example" src={product.product_images[0]} />
          <EmptyModal component={<div></div>} title={product.product_name} />
        </>
      }
      actions={[<div>В корзину</div>]}
    >
      <Meta
        title={
          <div>
            <div>{product.product_name}</div>
            <div>{product.product_price}</div>
          </div>
        }
        description={product.product_description}
      />
    </Card>
  )
}
