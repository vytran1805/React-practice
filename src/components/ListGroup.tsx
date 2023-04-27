import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //let selectedIndex = 0; // 0 means the first item is selected
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Event handler: Type of event in React is MouseEvent => import MouseEvent from react
  const handleClick = (event: MouseEvent) => console.log(event);
  // const message = items.length === 0 ? <p>No item found</p> : null;

  // Convert each item to <li> element, use curly bracket to render data dynamically
  return (
    //the line below is translated to React.createElement('h1');
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map(
          (
            item, //first parameter is the item of the list
            index // second is the index of the item
          ) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }} //we don't call the function, we just pass the reference
            >
              {item}
            </li> //each item of a list should have a unique key
            // or the console browser will show error
          )
        )}
      </ul>
    </>
  );
}
export default ListGroup;
