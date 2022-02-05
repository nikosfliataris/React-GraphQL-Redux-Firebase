import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/eshop-8bfe9/us-central1/api",
});
export default instance;
