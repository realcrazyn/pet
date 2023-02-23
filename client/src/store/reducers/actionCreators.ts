import { AuthActionCreators } from './auth/actionCreators'
import { ShopActionCreators } from './shop/actionCreators'

export const allActionCreators = {
  ...AuthActionCreators,
  ...ShopActionCreators,
}
