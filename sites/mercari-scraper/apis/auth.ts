import axios from "axios";
import * as process from "process";

class AuthApi {
  private static getUrl(endpoint: string) {
    const baseUrl = process.env.API_URL || "http://localhost:8080";
    return `${baseUrl}/api${endpoint}`;
  }
  static login<T>(data: T) {
    return axios.post(this.getUrl("/auth/login"), data);
  }
}

export default AuthApi;
