import React, { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  // declare a state variable for storing ourlist of products
  const [products, setProducts] = useState<string[]>([]);
  // use the effect hook to call the server to fetch the products
  //   This will be executed after each render
  useEffect(() => {
    console.log("fetching products in " + category);
    setProducts(["Clothing", "Household"]); //set products to a new array
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
