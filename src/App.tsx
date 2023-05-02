import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like";
import React from "react";
import { CiBowlNoodles } from "react-icons/ci";
import Message from "./Message";
function App() {
  //React stores these values as an array [false, true]
  // it does not aware of the variable names
  // it relies on the order of these elements
  const [alertVisible, setAlertVisibility] = useState(false);
  const [isVisible, setVisibility] = useState(false);
  // May 02, 2023: Choosing the State Structure
  //create a drink object
  const [loading, isLoading] = useState(false);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });
  // May 02, 2023: Understanding Objects
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });
  const handleClick = () => {
    const newDrink = {
      title: drink.title,
      price: 6,
    };
    setDrink(newDrink);
  };

  // May 02, 2023: Choosing the State Structure
  // let count = 0;
  // const handleClick = () => {
  //   setVisibility(true);
  //   count++;
  //   console.log(isVisible);
  // };

  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Message /> //Message 1 //Message 2
      <Message /> //Message 3 //Message 4
      <Message /> //Message 5 //Message 6
    </div>
  );
}

export default App;
