import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
const connect = () => console.log('connecting');
const disconnect = () => console.log('disconnecting');
 
function App() {
 useEffect(()=>{
  // connecting...
  connect();
  // then return the cleanup function that will execute the disconnect()
  return () => disconnect();  //this it will stop the connection
 })
  return (
    <div>

    </div>
  );
}

export default App;
