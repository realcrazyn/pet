export interface IShopProduct {
  product_id: number
  product_name: string
  product_price: number
  product_quantity: number
  product_description: string
  product_color: string[]
  product_images: string[]
  product_params: {
    param_id: string
    param_value: string
  }[]
}
