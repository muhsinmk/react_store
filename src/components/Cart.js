import React,{useContext} from "react";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util";
import {AppContext} from "../context/AppContext"

function Cart() {
  const {state:{cart},dispatch} = useContext(AppContext) 

  const subTotal = cart.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);

  const clearCart = () => {
    dispatch({
      type:"CLEAR_CART"
    })
  };

  return (cart.length ? (
    <div className="cart">
      <h3>Cart</h3>
      <div className="cartList">
        { cart.map((cartProduct) => {
          return <CartItem key={cartProduct.id} {...cartProduct}  />;
        }) }
      </div>

      <div className="cartTotal">Total - {currencyFormatter(subTotal)}</div>

      <div className="cartFooter">
        <button onClick={clearCart} className="clear">
          Clear Cart
        </button>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  ) : (
    <div className="cart">
      <h3>Cart</h3>
      <p>Please add Products to the cart</p>
    </div>
  ));
}

export default Cart;
