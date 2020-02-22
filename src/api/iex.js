import Axios from "axios";
import timeout from "./timeout";

const testApi = Axios.create({
  baseURL: "https://sandbox.iexapis.com/stable"
});

const proApi = Axios.create({
  baseURL: "https://cloud.iexapis.com/stable"
});

const sTokenCode = process.env.REACT_APP_STOKEN;
const pTokenCode = process.env.REACT_APP_PTOKEN;

export const LoadStockQuote = symbol => {
  return testApi
    .get(`/stock/${symbol}/quote?token=${sTokenCode}`)
    .then(result => result.data);
};

export const LoadStockInfo = async symbol => {
  await timeout(1000);
  return await testApi
    .get(`/stock/${symbol}/company?token=${sTokenCode}`)
    .then(result => result.data);
};

export const LoadStockNews = async symbol => {
  await timeout(1000);
  return await testApi
    .get(`/stock/${symbol}/news/last/5?token=${sTokenCode}`)
    .then(result => result.data);
};

export const LoadStockChart = async (symbol, range) => {
  await timeout(2000);
  return await testApi
    .get(`/stock/${symbol}/chart/${range}?token=${sTokenCode}`)
    .then(result => result.data);
};
