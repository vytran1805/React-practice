import { Children, useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";
import React from "react";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectedItem}
      ></ListGroup>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisibility(true)}>
        My
        <strong> button</strong>
      </Button>
    </div>
  );
}

export default App;
