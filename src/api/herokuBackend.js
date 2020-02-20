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
  console.log(result.data);
  return result.data;
};
