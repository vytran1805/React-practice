import { useEffect, useRef } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
function App() {
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
      <ProductList />
    </div>
  );
}

export default App;
