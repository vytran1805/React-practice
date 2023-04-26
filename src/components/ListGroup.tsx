function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   Convert each item to <li> element, use curly bracket to render data dynamically
  return (
    //the line below is translated to React.createElement('h1');
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li> //each item of a list should have a unique key
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
