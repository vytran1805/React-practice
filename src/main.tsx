import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Use ReactDOM library (specify for) to render component tree inside an element 'Root'
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // The App function is wrapped inside a component called StrictMode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
