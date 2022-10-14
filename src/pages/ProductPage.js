import React, { useState, useEffect} from "react";
import { currencyFormatter } from "../util";
import { useParams } from "react-router-dom";
import {useAppContext} from "../hooks/useAppContext"
function ProductPage() {
  
  const {state:{cart}, dispatch} = useAppContext()
  
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProduct = async () => {
      let res = await fetch(`http://localhost:4000/products/${id}`);
      let data = await res.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  const isInCart = (_id) => {
    return !!cart.find((item) => item.id === _id);
  };

  let productCount = cart.find((item) => item.id === id)?.count;

  const countHandler = (_id) => {

    dispatch({
      type:"INCREASE_PRODUCT_COUNT",
      payload:_id
    })

  };

  const cartHandler = () => {
    let cartProduct = {
        id,
        title: product.title,
        price: product.price,
        image: product.image,
        count: 1,
      };

    dispatch({
      type:"ADD_TO_CART",
      payload:cartProduct
    })

  };

  return (
    <div className="singleProduct">
      <img src={`/images/${product?.image}`} alt="" />
      <div>
        <h1>{product?.title}</h1>
        <h3>{product && currencyFormatter(product?.price)}</h3>
        <div>
          {isInCart(id) ? (
            <button className="cartButton" onClick={() => countHandler(id)}>
              {productCount} Added to Cart
            </button>
          ) : (
            <button className="cartButton" onClick={cartHandler}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
