import { useEffect, useRef, useState } from "react";
import "./App.css";

import axios, { AxiosError, CanceledError } from "axios";
import { map, set } from "zod";
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
  const [isLoading, setLoading] = useState(false);
  // use Effect hook to call the server
  useEffect(() => {
    // this is a built-in class in modern browser that allows us to cancel or abort asynchronous operations
    const controller = new AbortController();

    setLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  /**
   * Delete a user
   * @param user user to be deleted
   */
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    // update the UI first
    setUsers(users.filter((u) => u.id !== user.id));
    // Then call the server to save the change
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
      });

    /**
     * Pessimistic Update
     */
    // axios
    //   .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
    //   .then((res) => setUsers(users.filter((u) => u.id !== user.id)))
    //   .catch((err) => {
    //     setError(err.message);
    //     setUsers(originalUsers);
    //   });
  };

  /**
   * Add user to the users list
   */
  const addUser = () => {
    const originalUsers = [...users];
    // newUser variable
    const newUser = { id: 0, name: "Vy" };
    // Update the UI: spread over the users, add newUser to the array
    setUsers([...users, newUser]);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      // if the call to the server is successful, refresh the list with the new user
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " updated!" };
    // loop through the users array, if u.id===user.id => return updatedUser, otherwise return u
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    axios
      .put("https://jsonplaceholder.typicode.com/users/" + user.id, updateUser)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading === true && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>

      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
