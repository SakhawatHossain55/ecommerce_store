import { CartAction } from 'redux/actions/cartAction';
import { ActionType } from 'redux/actionType';
import { IProduct } from 'type';

const cartReducer = (
  state: IProduct[] = [],
  action: CartAction
): IProduct[] => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return [...state, action.payload];
    case ActionType.REMOVE_FROM_CART: {
      const newState = state.filter((item) => item.id !== action.payload);
      return newState;
    }
    case ActionType.CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
