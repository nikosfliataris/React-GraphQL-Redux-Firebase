import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-eshop-8bfe9.cloudfunctions.net/api",
});
export default instance;
