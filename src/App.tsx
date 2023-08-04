import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
function App() {
  // keep track of the selected category so when the state is changed, our ProductList is re-rendered
  const [selectedCategory, setSelectedCategory] = useState("");
  //use Ref hook to get reference to the input field
  const ref = useRef<HTMLInputElement>(null);

  // after Render
  useEffect(() => {
    // SIDE EFFECT: we are changing the state of the DOM => no longer the pure component
    if (ref.current) ref.current.focus(); // if ref.current is not null, move the cursor(or keyboard focus) to the input element
  });

  useEffect(() => {
    document.title = "My App";
  });
  return (
    <div>
      <input ref={ref} type="text" className="form-control" />
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={selectedCategory} />
    </div>
  );
}

export default App;
