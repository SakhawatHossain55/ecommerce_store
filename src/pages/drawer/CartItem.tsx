import React, { useCallback } from 'react';
import { IProduct } from 'type';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'redux/store';
import useAsync from 'hooks/useAsync';
import ProductService from 'services/ProductService';
import { addToCart } from 'redux/actionCreators/cartActions';

interface IProp {
  cartItem: IProduct;
}

const CartItem = ({ cartItem }: IProp) => {
  const cart = useSelector((state: AppState) => state.cart);
  const { title, image, price, id } = cartItem;
  const dispatch = useDispatch();

  const getProduct = useCallback(() => {
    return ProductService.getProductByID(id);
  }, [id]);

  const { data } = useAsync<IProduct>(getProduct);
  console.log(data);

  return (
    <>
      <tr className="cart__items py-3">
        <td>
          <img src={image} alt="" />
        </td>
        <td>{title}</td>
        <td>{price}</td>
        <td>
          <span
            onClick={() => dispatch(addToCart(data as unknown as IProduct))}
          >
            +
          </span>
          {cart.length}
          <span>-</span>
        </td>
        <td>$00</td>
      </tr>
    </>
  );
};

export default CartItem;
