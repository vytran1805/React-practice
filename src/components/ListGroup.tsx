import { MouseEvent, useState } from "react";
// {items:[], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  //event that has parameter type string and return void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // Event handler: Type of event in React is MouseEvent => import MouseEvent from react
  const handleClick = (event: MouseEvent) => console.log(event);
  // const message = items.length === 0 ? <p>No item found</p> : null;
  return (
    //the line below is translated to React.createElement('h1');
    <>
      <h1>{heading}</h1>
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
                onSelectItem(item);
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
