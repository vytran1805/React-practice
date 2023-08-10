import { useEffect, useState } from "react";
import userSevice, { User } from "../services/user-sevice";
import { CanceledError } from "../services/api-client";

const useUsers = () => {
  // declare a state variable for storing our users, initialize this to an empty array
  const [users, setUsers] = useState<User[]>([]);
  // declare a state variable for storing errors when fetching data
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  // use Effect hook to call the server
  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userSevice.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { users, error, isLoading, setUsers, setError };
};

export default useUsers;
