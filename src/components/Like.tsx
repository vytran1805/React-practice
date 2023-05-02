import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Like = () => {
  const [status, setState] = useState(false);
  // If the status is true, return the red heart
  if (status)
    return (
      // Once filled heart is clicked, setState to false
      <AiFillHeart color="#ff6b81" size={20} onClick={() => setState(false)} />
    );
  //If the status is false, return empty heart
  //Once empty heart is clicked, setState to true
  return <AiOutlineHeart size={20} onClick={() => setState(true)} />;
};

export default Like;
