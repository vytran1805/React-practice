import apiClient from "./api-client";

interface Entity {
  id: number;
}
/**
 * This class contains methods:
 * get
 */
class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll<T>() {
    // this is a built-in class in modern browser that allows us to cancel or abort asynchronous operations
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    // treat this cancel method as a cancel button, the users use it without knowing the logic behind the button
    return { request, cancel: () => controller.abort() };
  }

  delete(id: number) {
    const request = apiClient.delete(this.endpoint + "/" + id);
    return { request };
  }

  add<T extends Entity>(entity: T) {
    const request = apiClient.post(this.endpoint, entity);
    return { request };
  }

  update<T extends Entity>(updatedEntity: T) {
    const request = apiClient.put("/users/" + updatedEntity.id, updatedEntity);
    return { request };
  }
}
// this function creates an instance of this class
const create = (endpoint: string) => new HttpService(endpoint);

export default create;
