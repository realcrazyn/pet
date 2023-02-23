import { IShopFilter } from '../../../models/IShop'

export interface ShopState {
  shopFilter: IShopFilter
}

export enum ShopActionsEnum {
  SET_SHOP_FILTER = 'SET_SHOP_FILTER',
}

export interface SetShopFilterAction {
  type: ShopActionsEnum.SET_SHOP_FILTER
  payload: IShopFilter
}

export type ShopAction = SetShopFilterAction
