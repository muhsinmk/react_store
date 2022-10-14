import React from "react";
import ProductItem from "./ProductItem";
import {useAppContext} from "../hooks/useAppContext"
function ProductGallery() {

    const {state} = useAppContext()

    if(state.products_loading){
      return(
        <h1>Products Loading</h1>
      )
    }
    return (
    <div className="productGallery">    
      {
        state.products.map((product) => {
           return <ProductItem key={product.id} {...product} />
        })
      }     
    </div>
  );
}

export default ProductGallery;
