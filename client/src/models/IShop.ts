export interface IShopProduct {
  product_id: number
  product_name: string
  product_price: number
  product_quantity: number
  product_description: string
  product_categories: string[]
  product_images: string[]
  product_params: {
    param_id: string
    param_value: string
  }[]
}

export interface IShopFilter {
  serach_value: string
  categories: string[]
}
