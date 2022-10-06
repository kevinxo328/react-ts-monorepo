import axios from "axios";

class AuthApi {
  private static getUrl(endpoint: string) {
    return `http://localhost:8080/api${endpoint}`;
  }
  static login<T>(data: T) {
    return axios.post(this.getUrl("/auth/login"), data);
  }
}

export default AuthApi;
