import { FC, useEffect, useState } from 'react'
import './ShopProductsFilter.css'
import { useTypeSelector } from '../../../../hooks/useTypeSelector'
import { httpFetch } from '../../../../http/generalHttp'
import { httpShopCategories } from '../../../../http/http'
import { useActions } from '../../../../hooks/useActions'
import { AutoComplete, Button, Divider } from 'antd'
import Title from 'antd/lib/typography/Title'

interface IProps {}

interface IShopProductsFilterState {
  categories: { name: string; id: number }[]
}

export const ShopProductsFilter: FC<IProps> = ({}) => {
  const { shopFilter } = useTypeSelector((state) => state.shop)
  const { setShopFilter } = useActions()

  const [state, setState] = useState<IShopProductsFilterState>({
    categories: [],
  })

  useEffect(() => {
    httpFetch(httpShopCategories, 'GET').then(
      (res) => Array.isArray(res) && setState({ ...state, categories: res })
    )
  }, [])

  return (
    <div>
      <Divider>
        <Title level={3}>Фильтры</Title>
      </Divider>

      <AutoComplete
        placeholder="Категории"
        style={{ width: '100%' }}
        allowClear
        options={state.categories.map((c, i) => ({ key: c.id, value: c.name }))}
        onSelect={(value, option) =>
          shopFilter.categories.includes(option.key)
            ? null
            : setShopFilter({
                ...shopFilter,
                categories: [...shopFilter.categories, option.key],
              })
        }
      />
      <div>
        {shopFilter.categories.map((category) => (
          <div>
            <p>{category}</p>
            <Button
              onClick={() =>
                setShopFilter({
                  ...shopFilter,
                  categories: shopFilter.categories.filter(
                    (c) => c !== category
                  ),
                })
              }
            >
              x
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
