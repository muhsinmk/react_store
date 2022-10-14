import React, { useMemo } from "react";
import { currencyFormatter } from "../util";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

function ProductItem({ id, title, price, image }) {
  const {
    state: { cart },
    dispatch,
  } = useAppContext();

  const formattedPrice = useMemo(() => currencyFormatter(price), [price]);

  const isInCart = (_id) => {
    return !!cart.find((item) => item.id === _id);
  };

  let productCount = cart.find((item) => item.id === id)?.count;

  const countHandler = (_id) => {
    dispatch({
      type: "INCREASE_PRODUCT_COUNT",
      payload: _id,
    });
  };

  const cartHandler = () => {
    let cartProduct = {
      id,
      title,
      price,
      image,
      count: 1,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: cartProduct,
    });
  };

  return (
    <div className="productItem">
      <div className="itemName">
        <h3>{title}</h3>
      </div>
      <div className="itemPic">
        <Link to={`/product/${id}`}>
          <img src={`/images/${image}`} alt="" />
        </Link>
      </div>
      <div className="itemMeta">
        <div className="itemPrice"> {formattedPrice} </div>

        {isInCart(id) ? (
          <button className="cartButton" onClick={() => countHandler(id)}>
            {productCount} Added to Cart{" "}
          </button>
        ) : (
          <button className="cartButton" onClick={cartHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
