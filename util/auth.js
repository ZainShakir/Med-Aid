import axios from "axios";
import { Alert } from "react-native";

export async function createUser({ email, password }) {
  const response = await axios.post("http://192.168.10.5:3300/register", {
    email: email,
    password: password,
  });
  const token = response.data;
  return token;
}

export async function loginUser(email, password) {
  const response = await axios.post("http://192.168.10.5:3300/login", {
    email: email,
    password: password,
  });
  const token = response.data;
  return token;
}
