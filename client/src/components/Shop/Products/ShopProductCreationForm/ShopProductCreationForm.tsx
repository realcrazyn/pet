import { FC, useState } from 'react'
import './ShopProductCreationForm.css'
import { IShopProduct } from '../../../../models/IShop'
import {
  Button,
  Divider,
  Image,
  Input,
  Upload,
  UploadFile,
  notification,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { notificationPlacement } from '../../../../consts'
import { httpFetch } from '../../../../http/generalHttp'
import { httpShopProduct } from '../../../../http/http'

interface IProps {}

export const ShopProductCreationForm: FC<IProps> = ({}) => {
  const [product, setProduct] = useState<IShopProduct>({
    product_categories: [],
    product_description: '',
    product_id: Date.now(),
    product_images: [],
    product_name: '',
    product_params: [],
    product_price: 0,
    product_quantity: 0,
  })

  const encodeImage = (element: any) => {
    let file = element.files[0]
    let reader = new FileReader()
    reader.onloadend = function () {
      setProduct({
        ...product,
        product_images: [...product.product_images, reader.result as string],
      })
      notification.info({
        placement: notificationPlacement,
        message: 'Изображение загружено',
      })
    }
    reader.readAsDataURL(file)
  }

  const imgProps = {
    beforeUpload: (file: any) => {
      encodeImage({ files: [file] })
    },
  }

  const bufferUpladHandler = () => {
    navigator.clipboard
      .read()
      .then(async (components) => {
        for (const item of components) {
          if (!item.types.includes('image/png')) {
            notification.error({
              placement: notificationPlacement,
              message:
                'Буфер обмена не содержит изображение или оно недопустимого формата',
            })

            throw new Error('Non image data')
          }
          const blob = await item.getType('image/png')
          let file = new File([blob], 'screenshot.jpg')
          if (file) {
            encodeImage({ files: [file] })
          }
        }
      })
      .catch((err) => {
        console.error(err)
        notification.error({
          placement: notificationPlacement,
          message: 'Произошла ошибка во время вставки. Попробуйте позднее',
        })
      })
  }

  const saveProductHandler = () => {
    httpFetch(httpShopProduct, 'POST', product)
  }

  return (
    <div>
      <div>Название</div>
      <Input
        placeholder="Название товара"
        value={product.product_name}
        onChange={(e) =>
          setProduct({ ...product, product_name: e.target.value })
        }
      />
      <div>Описание</div>
      <Input.TextArea
        placeholder="Описание товара"
        value={product.product_description}
        onChange={(e) =>
          setProduct({ ...product, product_description: e.target.value })
        }
      />
      <div>Цена</div>
      <Input
        placeholder="Цена товара"
        type="number"
        value={product.product_price}
        onChange={(e) =>
          setProduct({ ...product, product_price: +e.target.value })
        }
      />
      <div>Количество</div>
      <Input
        placeholder="Количество товара"
        type="number"
        value={product.product_quantity}
        onChange={(e) =>
          setProduct({ ...product, product_quantity: +e.target.value })
        }
      />
      <div>
        Изображения{' '}
        <Button onClick={bufferUpladHandler}>Вставка из буфера</Button>
        <Upload
          {...imgProps}
          itemRender={(originNode, file, currFileList) => <></>}
          style={{ width: 300, display: 'inline-block' }}
        >
          <Button icon={<UploadOutlined />}>Выбрать файл</Button>
        </Upload>
      </div>

      <div style={{ display: 'flex' }}>
        {product.product_images.map((image, i) => (
          <div key={i}>
            <Image style={{ width: 100 }} src={image} />
            <Button
              onClick={() =>
                setProduct({
                  ...product,
                  product_images: product.product_images.filter(
                    (i) => i !== image
                  ),
                })
              }
            >
              x
            </Button>
          </div>
        ))}
      </div>

      <Button type="primary" onClick={saveProductHandler}>
        Save
      </Button>
    </div>
  )
}
