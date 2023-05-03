import React from "react";

//The prop should be treated as immutable or read-only
interface Props {
  cartItems: string[];
  //   once user click on the Clear btn
  onClear: () => void;
}

const Cart = ({ cartItems, onClear }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {/* grab the cartItems and map/render them to <li> item */}
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/* Notify the App component that the user click on the btn */}
      <button onClick={onClear}>Clear Item</button>
    </>
  );
};

export default Cart;
