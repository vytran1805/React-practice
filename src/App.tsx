import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import Like from "./components/Like";
import React from "react";
import { CiBowlNoodles } from "react-icons/ci";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div
      style={{
        backgroundColor: "#FFFFCC",
      }}
    >
      <Like onClick={() => console.log("Clicked")}></Like>
      <CiBowlNoodles color="red" size="40" />
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My
        <strong> button</strong>
      </Button>
    </div>
  );
}

export default App;
