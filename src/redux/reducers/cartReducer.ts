import { CartAction } from 'redux/actions/cartActions';
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
      const newState = state.filter((item) => item.id !== action.payload.id);
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
