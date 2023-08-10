import { useEffect, useState } from "react";
import "./App.css";

import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-sevice";
import useUsers from "./components/hooks/useUsers";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  /**
   * Delete a user
   * @param user user to be deleted
   */
  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    const { request } = userService.delete(user.id);
    // update the UI first
    setUsers(users.filter((u) => u.id !== user.id));
    // Then call the server to save the change
    request.catch((err) => {
      setError(err.message);
    });
  };

  /**
   * Add user to the users list
   */
  const addUser = () => {
    const originalUsers = [...users];
    // newUser variable
    const newUser = { id: 0, name: "Vy" };
    const { request } = userService.add(newUser);
    // Update the UI: spread over the users, add newUser to the array
    setUsers([...users, newUser]);
    request
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
    const { request } = userService.update(updatedUser);
    // loop through the users array, if u.id===user.id => return updatedUser, otherwise return u
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    request.catch((err) => {
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
