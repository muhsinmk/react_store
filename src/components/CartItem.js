import React from "react";
import { currencyFormatter } from "../util";
import { useAppContext } from "../hooks/useAppContext";

function CartItem({ id, title, image, price, count }) {
  const { dispatch } = useAppContext();

  const increaseCount = (_id) => {
    dispatch({
      type: "INCREASE_PRODUCT_COUNT",
      payload: _id,
    });
  };

  const decreaseCount = (_id) => {
    if (count > 1) {
      dispatch({
        type: "DECREASE_PRODUCT_COUNT",
        payload: _id,
      });
    } else {
      dispatch({
        type: "REMOVE_PRODUCT",
        payload: _id,
      });
    }
  };

  return (
    <div className="cartItem">
      <div className="itemPic">
        <img src={`/images/${image}`} alt="" />
      </div>
      <div className="itemInfo">
        <p>{title}</p>
        <div className="cartUpdater">
          <button onClick={() => decreaseCount(id)}>-</button>
          <div>{count}</div>
          <button onClick={() => increaseCount(id)}>+</button>
        </div>
      </div>
      <div className="itemPrice">{currencyFormatter(price)}</div>
    </div>
  );
}

export default CartItem;
