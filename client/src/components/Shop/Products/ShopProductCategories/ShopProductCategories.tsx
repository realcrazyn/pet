import { FC, useEffect, useState } from 'react'
import { httpFetch } from '../../../../http/generalHttp'
import { httpShopCategories } from '../../../../http/http'
import { IShopCategory } from '../../../../models/IShop'
import { Button, Input, Spin } from 'antd'
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons'

interface IProps {}

export const ShopProductCategories: FC<IProps> = () => {
  const [categories, setCategories] = useState<IShopCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [newCategory, setNewCategory] = useState('')

  useEffect(() => {
    getCategoriesHandler()
  }, [])

  const getCategoriesHandler = async () => {
    setLoading(true)
    try {
      let categories = await httpFetch(httpShopCategories, 'GET')
      Array.isArray(categories) && setCategories(categories)
    } catch (e) {
      console.log(e)
    }
    setLoading(false)
  }

  const categoryDeleteHandler = async (id: number) => {
    try {
      await httpFetch(`${httpShopCategories}/${id}`, 'DELETE')
      setCategories(categories.filter((c) => c.id !== id))
    } catch (e) {
      console.log(e)
    }
  }

  const createCategoryHandler = async () => {
    try {
      let category = await httpFetch(`${httpShopCategories}`, 'POST', {
        name: newCategory,
      })
      category.data && setCategories([...categories, category.data])
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <div>
        <Input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />{' '}
        <Button icon={<PlusOutlined />} onClick={createCategoryHandler} />
      </div>

      {loading ? (
        <Spin style={{ width: '100%', paddingTop: 40 }} />
      ) : (
        categories.map((category) => (
          <div className="shop__list_item" key={category.id}>
            <h4 className="shop__list_item-name">{category.name}</h4>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => categoryDeleteHandler(category.id)}
              className="shop__list_item-button"
            />
          </div>
        ))
      )}
    </div>
  )
}
