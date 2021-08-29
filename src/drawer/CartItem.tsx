import React from 'react';
import { IProduct } from 'type';
// import { BsPlus } from 'react-icons/bs'
// import { BiMinus } from 'react-icons/bi'
// import { useSelector } from 'react-redux';
// import { AppState } from 'redux/store';

interface IProp {
  cartItem: IProduct;
}

const CartItem = ({ cartItem }: IProp) => {
  // const cart = useSelector((state: AppState) => state.cart);
  const { title, image, price } = cartItem;

  return (
    <>
      <tr className="cart__items py-3">
        <td>
          <img src={image} alt="" />
        </td>
        <td>{title}</td>
        <td>{price}</td>
      </tr>
    </>
  );
};

export default CartItem;
