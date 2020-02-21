import axios from "axios";
import timeout from "./timeout";

const herokuBackend = axios.create({
  baseURL: "https://stock-dashboard-backend.herokuapp.com"
});
herokuBackend.defaults.headers.post["Content-Type"] = "application/json";
herokuBackend.defaults.withCredentials = true;

export const LoadForecastData = async symbol => {
  await timeout(1000);
  const result = await herokuBackend.get(`/stocks/${symbol}/forecast`);
  return result.data;
};

export const PostLogin = async (username, password) => {
  await timeout(100);
  let payload = { username, password };
  const result = await herokuBackend.post("/users/login", payload);
  return result.data;
};

export const RegisterUser = async (
  username,
  password,
  firstName,
  lastName,
  email
) => {
  await timeout(100);
  let payload = { username, password, firstName, lastName, email };
  const result = await herokuBackend.post("/users/register", payload);
  return result.data;
};
