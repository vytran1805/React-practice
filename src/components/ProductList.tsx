import React, { useEffect, useState } from "react";

const ProductList = () => {
  // declare a state variable for storing ourlist of products
  const [products, setProducts] = useState<string[]>([]);
  // use the effect hook to call the server to fetch the products
  //   This will be executed after each render
  useEffect(() => {
    console.log("fetching products");
    setProducts(["Clothing", "Household"]); //set products to a new array
  },[]);
  return <div>ProductList</div>;
};

export default ProductList;
