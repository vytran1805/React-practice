import axios, { CanceledError } from "axios";
// create an axios obj
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export { CanceledError };
