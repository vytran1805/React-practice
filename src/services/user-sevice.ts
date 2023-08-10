import create from "./http-services";

// define the shape of our user to avoid accessing invalid properties
export interface User {
  id: number;
  name: string;
}

export default create("/users");
