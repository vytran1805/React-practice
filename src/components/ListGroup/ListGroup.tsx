import React from "react";
import { Fragment, MouseEvent, useState } from "react";
import styled from "styled-components";
//this is the style for List, which is a React component
const List = styled.ul`
  list-style: none;
  padding: 0;
`;
//Create an interface for ListItem
interface ListItemProps {
  active: boolean;
}
//modify the style for <li> element and make the background dynamic
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(listItemProps) => (listItemProps.active ? "blue" : "none")};
`;

// {items:[], heading: string}
interface ListGroupProps {
  items: string[];
  heading: string;
  //event that has parameter type string and return void
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(0); //select the first item
  // Event handler: Type of event in React is MouseEvent => import MouseEvent from react
  const handleClick = (event: MouseEvent) => console.log(event);
  // const message = items.length === 0 ? <p>No item found</p> : null;
  return (
    //the line below is translated to React.createElement('h1');
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map(
          (
            item, //first parameter is the item of the list
            index // second is the index of the item
          ) => (
            <ListItem
              active={selectedIndex === index}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }} //we don't call the function, we just pass the reference
            >
              {item}
            </ListItem> //each item of a list should have a unique key
            // or the console browser will show error
          )
        )}
      </List>
    </Fragment>
  );
}
export default ListGroup;
