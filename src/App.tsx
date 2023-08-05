import { useEffect, useRef, useState } from "react";
import "./App.css";

import axios, { AxiosError, CanceledError } from "axios";
import { map } from "zod";
// define the shape of our user to avoid accessing invalid properties
interface User {
  id: number;
  name: string;
}
function App() {
  // declare a state variable for storing our users, initialize this to an empty array
  const [users, setUsers] = useState<User[]>([]);
  // declare a state variable for storing errors when fetching data
  const [error, setError] = useState("");
  // use Effect hook to call the server
  useEffect(() => {
    // this is a built-in class in modern browser that allows us to cancel or abort asynchronous operations
    const controller = new AbortController();
    
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers", {
        signal: controller.signal,
      })
      .then((res) => setUsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
