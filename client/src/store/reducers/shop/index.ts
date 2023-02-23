import { ShopAction, ShopActionsEnum, ShopState } from './types'

const initialState: ShopState = {
  shopFilter: {
    serach_value: '',
    categories: [],
  },
}

const shopReducer = (state = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionsEnum.SET_SHOP_FILTER:
      return { ...state, shopFilter: action.payload }

    default:
      return state
  }
}

export default shopReducer
