import { IShopFilter } from '../../../models/IShop'
import { ShopAction, ShopActionsEnum } from './types'

export const ShopActionCreators = {
  setShopFilter: (filter: IShopFilter): ShopAction => ({
    type: ShopActionsEnum.SET_SHOP_FILTER,
    payload: filter,
  }),
}
