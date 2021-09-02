import { CartAction } from 'redux/actions/cartAction';
import { ActionType } from 'redux/actionType';
import { IProduct } from 'type';

export const addToCart = (payload: IProduct): CartAction => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: number): CartAction => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export const clearCart = (): CartAction => {
  return {
    type: ActionType.CLEAR_CART,
  };
};
