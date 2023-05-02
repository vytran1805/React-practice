import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

//this interface defines the shape of props
// notifies the consumer when user clicks on Like icon
interface LikeProps {
  onClick: () => void;
}
const Like = ({ onClick }: LikeProps) => {
  const [status, setStatus] = useState(false);
  //this function changes the status of the State by inverting the status of the State
  const toggle = () => {
    setStatus(!status);
    onClick(); //then call onClick() to notify the consumer
  };
  // If the status is true, return the red heart
  if (status)
    return (
      // Once filled heart is clicked, setState to false
      <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />
    );
  //If the status is false, return empty heart
  //Once empty heart is clicked, setStatus to true
  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
