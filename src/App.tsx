import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like";
import React from "react";
import { CiBowlNoodles } from "react-icons/ci";
import Message from "./Message";
import produce from "immer";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import ExpandableText from "./components/ExpandableText";
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
    // First spread the existing drink and then update the price to 6
    setDrink({ ...drink, price: 6 });
  };

  // May 02, 2023: Updating nested objects
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 94111,
    },
  });
  const onceClick = () => {
    // spread the customer obj, then set address to a new obj,
    // and spread the existing address and update zipCode
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 12345 },
    });
  };

  // May 03, 2023: Updating Arrays
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const click = () => {
    // Add tag
    setTags([...tags, "exciting"]);
    // Remove: filter and get all the tag, except for 'happy' tag
    setTags(tags.filter((tag) => tag !== "happy"));
    // Update an object: find the 'happy' tag and change it to 'happiness', otherwise, return the tag
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  // May 03, 2023: Updating Array of Objects, Simplifying Update Logic with Immer Lib
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);
  const btnClick = () => {
    // iterate over the array, find the bug with id==1
    // if found, create a brand new bug obj by spreading over that bug,
    // then update the fixed property to true, otherwise, return the same bug
    // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce((draft) => {
        // find the bug with id === 1 and store the result in the 'bug' variable
        const bug = draft.find((bug) => bug.id === 1);
        // if the bug is found, set fixed property to true
        if (bug) bug.fixed = true;
      })
    );
  };

  // May 03, 2023: Sharing State between Component
  const [cartItems, setCartItems] = useState(["Product 1", "Product 2"]);
  // April
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };

  // May 03, 2023: exercise 2: Updating Pizza
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    topping: ["Mushroom"],
  });
  const pizzaClick = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "pepper"] });
  };

  // May 03, 2023: exercise 2: Updating Cart
  const [cart, setCart] = useState({
    discount: 0.1,
    cartItems: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });
  const cartClick = () => {
    setCart({
      ...cart,
      cartItems: cart.cartItems.map((cartItem) =>
        cartItem.id === 1 ? { ...cartItem, quantity: 2 } : cartItem
      ),
    });
  };

  // May 03, 2023: exercise: Building an expandable text component
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        praesentium inventore cum impedit distinctio dicta, officia, ab
        explicabo aut quo tempore doloremque saepe dolores! Optio velit
        excepturi laborum r epellendus quia?
      </ExpandableText>
      <br />
      <NavBar cartItemsCount={cartItems.length} />
      {/* once user clicks on the Clear btn, setCartItems to empty Array */}
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      {/* iterate over the bugs array */}
      {bugs.map((bug) => (
        // Add the <p> element and set key to the unique value {id}
        <p key={bug.id}>
          {/* render title and fixed status of the bug ('Fixed' or 'New') */}
          {bug.title} {bug.fixed ? "Fixed" : "New"}
        </p>
      ))}
      {/* click on the button the change the state of the fixed property */}
      <button onClick={btnClick}>Bug button</button>
      <Message /> //Message 1 //Message 2
      <Message /> //Message 3 //Message 4
      <Message /> //Message 5 //Message 6
    </div>
  );
}

export default App;
