import apiClient from "./api-client";

// define the shape of our user to avoid accessing invalid properties
export interface User {
  id: number;
  name: string;
}
/**
 * This class contains methods:
 * get
 */
class UserService {
  getAllUser() {
    // this is a built-in class in modern browser that allows us to cancel or abort asynchronous operations
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    // treat this cancel method as a cancel button, the users use it without knowing the logic behind the button
    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id:number) {
    const request = apiClient.delete("/users/" + id);
    return { request };
  }

  addUser(user: User) {
    const request = apiClient.post("/users", user);
    return { request };
  }

  updateUser(updatedUser:User){
    const request = apiClient.put("/users/" + updatedUser.id, updatedUser);
    return { request };
  }
}
export default new UserService();
